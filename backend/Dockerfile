FROM golang:1.24.3-alpine AS build

WORKDIR /app

# Install UPX and other necessary tools
RUN apk add --no-cache upx

# Copy Go module files and download deps
COPY go.mod go.sum ./
RUN go mod download && go mod verify

# Copy the rest of the source code
COPY . .

# Build the Go binary
RUN CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -v \
  -o server \
  -ldflags="-s -w" \
  -installsuffix cgo \
  ./cmd/main.go

# Compress the binary using UPX
RUN upx --ultra-brute --quiet server && upx --test server

# Final minimal image
FROM scratch

COPY --from=build /app/server /server

ENTRYPOINT ["/server"]