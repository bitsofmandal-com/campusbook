# Simple Makefile for a Go project

# Build the application
all: build watch

build:
	@echo "Building..."
	
	
	@go build -o main cmd/main.go

# Run the application
run:
	@go run cmd/main.go
# Create DB container
docker-run:
	@if docker compose up --build 2>/dev/null; then \
		: ; \
	else \
		echo "Falling back to Docker Compose V1"; \
		docker-compose up --build; \
	fi

# Shutdown DB container
docker-down:
	@if docker compose down 2>/dev/null; then \
		: ; \
	else \
		echo "Falling back to Docker Compose V1"; \
		docker-compose down; \
	fi

# Clean the binary
clean:
	@echo "Cleaning..."
	@rm -f main

# Live Reload
watch:
	@if command -v air > /dev/null; then \
            air server --port 8080; \
            echo "Watching...";\
        else \
            read -p "Go's 'air' is not installed on your machine. Do you want to install it? [Y/n] " choice; \
            if [ "$$choice" != "n" ] && [ "$$choice" != "N" ]; then \
                go install github.com/air-verse/air@latest; \
                air server --port 8080; \
                echo "Watching...";\
            else \
                echo "You chose not to install air. Exiting..."; \
                exit 1; \
            fi; \
        fi

migrate:
	@echo "Migrating..."
	@go run cmd/main.go -migrate

sqlcgen:
	@echo "Generating SQLC files..."
	@if command -v sqlc > /dev/null; then \
            sqlc generate; \
            echo "SQLC files generated...";\
        else \
            read -p "Go's 'sqlc' is not installed on your machine. Do you want to install it? [Y/n] " choice; \
            if [ "$$choice" != "n" ] && [ "$$choice" != "N" ]; then \
                go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest; \
                @sqlc generate; \
                echo "SQLC files generated...";\
            else \
                echo "You chose not to install sqlc. Exiting..."; \
                exit 1; \
            fi; \
        fi

createmigration:
	@echo "Creating migration..."
	@atlas schema apply --url "postgres://campusbook:campusbook@localhost:5433/campusbook?sslmode=disable&search_path=public" \
    --to "file://pkg/schema/schema.sql" --dev-url "docker://postgres/15/dev?search_path=public"


.PHONY: all build run clean watch docker-run docker-down migrate createmigration