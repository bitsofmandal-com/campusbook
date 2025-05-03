CREATE TABLE posts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL,
  content     TEXT,
  files       TEXT[], -- array of text strings
  -- author_email   INTEGER REFERENCES users(id), -- assuming a 'users' table exists
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);


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
    files = $4
WHERE id = $1 RETURNING *;

-- name: DeletePostById :exec
DELETE FROM posts
WHERE id = $1; -- AND author_email = $2;