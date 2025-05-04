package utils

import (
	"github.com/gin-gonic/gin"
)


func ApiResponse(code int, message string, data interface{}) gin.H {
  // if slice, ok := data.([]interface{}); ok && len(slice) == 0 {
	// 	data = []interface{}{}
	// }

  return gin.H{
    "code":    code,
    "message": message,
    "data":    data,
  }  
}