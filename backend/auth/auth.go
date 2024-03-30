package auth

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/navneetshukl/Typing-Speed/database"
	"github.com/navneetshukl/Typing-Speed/models"
)

var DBHandler *database.PostgreSQLHandler

// SignUp function will register the user
func SignUp(c *gin.Context) {
	var user models.User

	if err := c.BindJSON(&user); err != nil {
		c.JSON(400, gin.H{"error": "Failed to process JSON"})
		return
	}

	if len(user.Name) == 0 || len(user.Email) == 0 || len(user.Password) == 0 {

		log.Println("Please enter the valid name,email and password")
		return

	}

	err := DBHandler.InsertToUser(user)
	if err != nil {
		log.Println("Error in inserting to database ", err)
		return
	}

	c.JSON(http.StatusOK, user)
}

func Login(c *gin.Context) {

}
