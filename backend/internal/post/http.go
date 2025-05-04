package post

import (
	"campusbook-be/internal/repository"
	"campusbook-be/pkg/utils"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type PostHandler interface {
	CreatePost(c *gin.Context)
	GetAllPosts(c *gin.Context)
	GetPostById(c *gin.Context)
	UpdatePost(c *gin.Context)
	DeletePostById(c *gin.Context)
}

type postHandler struct {
	postService PostService
}

func NewPostHandler(postService PostService) PostHandler {
	return &postHandler{postService: postService}
}

// RegisterUser handles HTTP requests for registering a new user.
func (h *postHandler) CreatePost(c *gin.Context) {
	// Parse the request JSON into the RegisterUserRequest struct
	var req *repository.CreatePostParams
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	// Call the RegisterUser method from the use case layer
	post, err := h.postService.CreatePost(c.Request.Context(), req)
	if err != nil {
    errorResponseData := utils.ApiResponse(http.StatusInternalServerError, "Unable to create post", err.Error())
		c.JSON(http.StatusInternalServerError, errorResponseData)
		return
	}
  successResponseData := utils.ApiResponse(http.StatusCreated, "Post created successfully", post)

	// Return a success response
	c.JSON(http.StatusCreated, successResponseData)
}

// GetUserByID handles HTTP requests to retrieve a user by their ID.
func (h *postHandler) GetPostById(c *gin.Context) {
	// Retrieve the userID from the path parameters
	postID := c.Param("postID")
	if postID == "" {
    errorResponseData := utils.ApiResponse(http.StatusBadRequest, "Post ID is required", nil)
		c.JSON(http.StatusBadRequest, errorResponseData)
		return
	}

  parsedUUID, err := uuid.Parse(postID)
  if err != nil {
    errorResponseData := utils.ApiResponse(http.StatusBadRequest, "Invalid post ID format", nil)
    c.JSON(http.StatusBadRequest, errorResponseData)
    return
  }

  pgUUID := pgtype.UUID{
    Bytes: parsedUUID,
    Valid: true,
  }
	// Call the GetPostByID method from the use case layer
	post, err := h.postService.GetPostById(c.Request.Context(), pgUUID)
	if err != nil {
    errorResponseData := utils.ApiResponse(http.StatusNotFound, "Post not found", nil)
		c.JSON(http.StatusNotFound, errorResponseData)
		return
	}
  
  successResponseData := utils.ApiResponse(http.StatusOK, "Post found", post)
	// Respond with the post data in JSON format
	c.JSON(http.StatusOK, successResponseData)
}

func (h *postHandler) GetAllPosts(c *gin.Context) {
	// Call the GetUserByID method from the use case layer
	posts, err := h.postService.GetAllPosts(c.Request.Context())
	if err != nil {
    errorResponseData := utils.ApiResponse(http.StatusInternalServerError, "Unable to get all posts", nil)
		c.JSON(http.StatusNotFound, errorResponseData)
		return
	}
  successResponseData := utils.ApiResponse(http.StatusOK, "Posts found", posts)

	// Respond with the user data in JSON format
	c.JSON(http.StatusOK, successResponseData)
}

func (h *postHandler) UpdatePost(c *gin.Context) {
	var req *repository.UpdatePostParams
	if err := c.ShouldBindJSON(&req); err != nil {
		errorResponseData := utils.ApiResponse(http.StatusOK, "Invalid request data", nil)
		c.JSON(http.StatusBadRequest, errorResponseData)
		return
	}

	

	// Call the GetUserByID method from the use case layer
	post, err := h.postService.UpdatePost(c.Request.Context(), req)
	if err != nil {
    errorResponseData := utils.ApiResponse(http.StatusInternalServerError, "Unable to update the post", nil)
		c.JSON(http.StatusNotFound, errorResponseData)
		return
	}
  successResponseData := utils.ApiResponse(http.StatusOK, "Posts updated successfully", post)

	// Respond with the user data in JSON format
	c.JSON(http.StatusOK, successResponseData)
}

func (h *postHandler) DeletePostById(c *gin.Context) {
	// Retrieve the userID from the path parameters
	postID := c.Param("postID")
	if postID == "" {
		errorResponseData := utils.ApiResponse(http.StatusBadRequest, "Post ID is required", nil)
		c.JSON(http.StatusBadRequest, errorResponseData)
		return
	}

	parsedUUID, err := uuid.Parse(postID)
	if err != nil {
		errorResponseData := utils.ApiResponse(http.StatusBadRequest, "Invalid post ID format", nil)
		c.JSON(http.StatusBadRequest, errorResponseData)
		return
	}

	pgUUID := pgtype.UUID{
		Bytes: parsedUUID,
		Valid: true,
	}
	// Call the GetUserByID method from the use case layer
	message, err := h.postService.DeletePostById(c.Request.Context(), pgUUID)
	if err != nil {
		errorResponseData := utils.ApiResponse(http.StatusInternalServerError, "Unable to delete the post", nil)
		c.JSON(http.StatusNotFound, errorResponseData)
		return
	}
	successResponseData := utils.ApiResponse(http.StatusOK, message, nil)

	// Respond with the user data in JSON format
	c.JSON(http.StatusOK, successResponseData)
}
