package post

import (
	"campusbook-be/internal/repository"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
	"golang.org/x/net/context"
)

type PostService interface {
	CreatePost(ctx context.Context, args *repository.CreatePostParams) (*repository.Post, error)
	GetAllPosts(ctx context.Context) ([]repository.ListAllPostsRow, error)
	GetPostById(ctx context.Context, postID pgtype.UUID) (*repository.Post, error)
  UpdatePost(ctx context.Context, args *repository.UpdatePostParams) (*repository.Post, error)
  DeletePostById(ctx context.Context, postID pgtype.UUID) (string, error)
}

type postServiceSqlc struct {
	postRepository repository.Querier
}

func NewPostService(postRepo repository.Querier) PostService {
	return &postServiceSqlc{postRepository: postRepo}
}

func (pr *postServiceSqlc) CreatePost(ctx context.Context, args *repository.CreatePostParams) (*repository.Post, error) {
		// Create a new user in the schema
		post, err := pr.postRepository.CreatePost(ctx, &repository.CreatePostParams{
			Title:  args.Title,
      Content: args.Content,
      Files:  args.Files,
		}); 
    if err != nil {
      return nil, err
    }
    return &post, nil
}

func (pr *postServiceSqlc) GetAllPosts(ctx context.Context) ([]repository.ListAllPostsRow, error) {
	// Get the user by ID from the schema
	posts, err := pr.postRepository.ListAllPosts(ctx)
	if err != nil {
		return nil, err
	}

	return posts, nil
}

func (u *postServiceSqlc) GetPostById(ctx context.Context, postID pgtype.UUID) (*repository.Post, error) {
	// Get the post by ID from the schema
	post, err := u.postRepository.GetPostById(ctx, postID)
	if err != nil {
		return nil, err
	}

	return &post, nil
}

func (u *postServiceSqlc) UpdatePost(ctx context.Context, args *repository.UpdatePostParams) (*repository.Post, error) {
  args.UpdatedAt = pgtype.Timestamptz{
		Time: time.Now(),
		Valid: true,
	}
	
	// Update the post by ID from the schema
  post, err := u.postRepository.UpdatePost(ctx, args)
  if err != nil {
    return nil, err
  }

  return &post, nil
}

func (u *postServiceSqlc) DeletePostById(ctx context.Context, postID pgtype.UUID) (string, error) {
  // Delete the post by ID from the schema
  err := u.postRepository.DeletePostById(ctx, postID)
  if err != nil {
    return "Unable to deleted post", err
  }

  return "Post deleted successfully", nil
}
// func (u *postServiceSqlc) GetPostById(ctx context.Context, postID pgtype.UUID) (*repository.Post, error) {