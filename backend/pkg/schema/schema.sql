-- create "users" table

CREATE TABLE users (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(), 
  "name" varchar(100) NULL,
  "phone_number" TEXT NULL,
  "email" varchar(100) UNIQUE,
  "alternate_email" varchar(100) UNIQUE,
  "created_at" timestamptz NULL DEFAULT now(), 
  "updated_at" timestamptz NULL DEFAULT now(),
  PRIMARY KEY ("id")
);

-- Create "posts" table
CREATE TABLE posts (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(), 
  "title" text NOT NULL, 
  "content" text NULL, 
  "files" text[] NULL, 
  "author_id" uuid NOT NULL,
  "created_at" timestamptz NULL DEFAULT now(), 
  "updated_at" timestamptz NULL DEFAULT now(),
  PRIMARY KEY ("id"),
  CONSTRAINT "author_fk" FOREIGN KEY ("author_id") REFERENCES "users" ("id")
);
