FROM golang:1.24.3-alpine AS build

WORKDIR /app
COPY go.mod ./ 
COPY go. sum ./

RUN go mod download && go mod verify

COPY • •

RUN CGO_ENABLED=0 GOARCH=amd64 G00S=linux go build \
  -o server -a -ldflags="-s -w" -installsuffix cgo

RUN upx--ultra-brute -qq server do upx-t server

FROM scratch

COPY --from=build /app/server /server

ENTRYPOINT ["/ server"]
# CMD ["air", "-c", ".air.toml"]