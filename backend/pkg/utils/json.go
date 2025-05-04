package utils

import (
	"github.com/gin-gonic/gin"
)


func ApiResponse(code int, message string, data interface{}) gin.H {
  return gin.H{
    "code":    code,
    "message": message,
    "data":    data,
  }  
}