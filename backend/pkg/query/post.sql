-- name: GetPostById :one
SELECT * FROM posts
WHERE id = $1 LIMIT 1;

-- name: ListAllPosts :many
SELECT id, title, files FROM posts
ORDER BY title;

-- name: CreatePost :one
INSERT INTO posts (
    title,
    content,
    files
) VALUES (
 $1, $2, $3
)
RETURNING *;

-- name: UpdatePost :one
UPDATE posts
set title = $2,
    content = $3,
    files = $4,
    updated_at = $5
WHERE id = $1 RETURNING *;

-- name: DeletePostById :exec
DELETE FROM posts
WHERE id = $1; -- AND author_email = $2;