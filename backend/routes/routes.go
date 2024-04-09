package routes

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/navneetshukl/Typing-Speed/database"
	"github.com/navneetshukl/Typing-Speed/models"
)

var DBHandler *database.PostgreSQLHandler

func GetDetailFromFrontend(c *gin.Context) {

	email, ok := c.Get("user")

	log.Println("Email is ", email)
	if !ok {
		log.Println("Error in getting the email from cookie ")
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": models.Error,
		})
		return

	}

	var detailData models.Details

	err := c.ShouldBindJSON(&detailData)
	if err != nil {
		log.Println("Error in reading the request body ", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": models.Error,
		})
		return
	}

	detailData.Email = email.(string)
	err = DBHandler.InsertIntoDetails(detailData)
	if err != nil {
		log.Println("Error in inserting the details of the user ", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": models.Error,
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"success": "User detail saved successfully to database",
	})

}
