package main

import (
	"campusbook-be/internal/general"
	"campusbook-be/internal/post"
	"campusbook-be/pkg/database"
	"context"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"strconv"
	"syscall"
	"time"

	"ariga.io/atlas-go-sdk/atlasexec"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
	_ "github.com/joho/godotenv/autoload"

	"campusbook-be/internal/repository"
)

func main() {
	serverPort, _ := strconv.Atoi(os.Getenv("SERVER_PORT"))
	databaseName := os.Getenv("DB_DATABASE")
	password := os.Getenv("DB_PASSWORD")
	username := os.Getenv("DB_USERNAME")
	host := os.Getenv("DB_HOST")
	dbport, _ := strconv.Atoi(os.Getenv("DB_PORT"))
	schema := os.Getenv("DB_SCHEMA")

	// Declare a flag to run migrations only
	migrateFlag := flag.Bool("migrate", false, "run migrations only")
	// Parse the flags
	flag.Parse()

	if *migrateFlag {
		migrateDatabase(username, password, host, databaseName, schema, dbport)
		return
	}
	// Create a done channel to signal when the shutdown is complete
	done := make(chan bool, 1)

	dbInst, db := database.NewDatabasePg(username, password, host, databaseName, schema, dbport)

	newServer := &http.Server{
		Addr:    fmt.Sprintf(":%d", serverPort),
		Handler: registerRoutes(dbInst, db),
	}
	// Run graceful shutdown in a separate goroutine
	go gracefulShutdown(done, newServer, dbInst)

	// start the server
	if err := newServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		panic(fmt.Sprintf("http server error: %s", err))
	}

	// Wait for the graceful shutdown to complete
	<-done
	log.Println("Graceful shutdown complete.")
}

func registerRoutes(dbInst database.Database, db *pgx.Conn) *gin.Engine {
	// Declare Router
	queries := repository.New(db)

	// declare generic handlers
	generalHandlers := general.NewGeneralHandler(dbInst)
	// declare user handlers
	postService := post.NewPostService(queries)
	postHandlers := post.NewPostHandler(postService)

	router := gin.Default()
	// generic routes
	router.GET("/health", generalHandlers.HealthCheck)
	// post routes
	postRouter := router.Group("/post")
	postRouter.POST("/", postHandlers.CreatePost)
	postRouter.GET("/", postHandlers.GetAllPosts)
	postRouter.GET("/:id", postHandlers.GetPostById)
	postRouter.PUT("/", postHandlers.UpdatePost)
	postRouter.DELETE("/:id", postHandlers.DeletePostById)

	return router
}

func gracefulShutdown(done chan bool, server *http.Server, db database.Database) {
	// Create context that listens for the interrupt signal from the OS.
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	// Listen for the interrupt signal.
	<-ctx.Done()

	log.Println("shutting down gracefully, press Ctrl+C again to force")

	// shut down any database connections
	if err := db.Close(); err != nil {
		log.Printf("Database unable to stop with error: %v", err)
	}

	// The context is used to inform the server it has 5 seconds to finish
	// the request it is currently handling
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Printf("Server forced to shutdown with error: %v", err)
	}

	log.Println("Server exiting")

	// Notify the main goroutine that the shutdown is complete
	done <- true
}

func migrateDatabase(username, password, host, databaseName, schema string, dbport int) {
	// Construct the connection string
	connStr := fmt.Sprintf("postgres://%s:%s@%s:%d/%s?sslmode=disable&search_path=%s",
		username, password, host, dbport, databaseName, schema)

	// Define the execution context, supplying a migration directory
	// and potentially an `atlas.hcl` configuration file using `atlasexec.WithHCL`.
	workdir, err := atlasexec.NewWorkingDir(
		atlasexec.WithMigrations(
			os.DirFS("./pkg/schema"),
		),
	)
	if err != nil {
		log.Fatalf("failed to load working directory: %v", err)
	}
	// atlasexec works on a temporary directory, so we need to close it
	defer workdir.Close()

	log.Printf("Running migrations on %s\n", workdir.Path())

	// Initialize the client.
	client, err := atlasexec.NewClient(workdir.Path(), "atlas")
	if err != nil {
		log.Fatalf("failed to initialize client: %v", err)
	}
	absSchemaFile, err := filepath.Abs("./pkg/schema")
	if err != nil {
		log.Fatalf("failed to hash migrations: %v", err)
	}
		// Run `atlas schema apply` on a Postgres database under /tmp.
	res, err := client.SchemaApply(context.Background(), &atlasexec.SchemaApplyParams{
		URL: connStr,
		To:  "file://" + absSchemaFile,
		DevURL: "docker://postgres/15/dev?search_path=public",
		AutoApprove: true,
	})
	if err != nil {
		log.Fatalf("failed to apply migrations: %v", err)
	}
	if res.Applied != nil {
		log.Printf("Applied %d migrations\n", len(res.Applied.Applied))
		return
	}else {
		log.Printf("No migrations to apply\n")
	}
}