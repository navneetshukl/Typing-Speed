package auth

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"github.com/navneetshukl/Typing-Speed/database"
	"github.com/navneetshukl/Typing-Speed/models"
	"golang.org/x/crypto/bcrypt"
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

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
	if err != nil {
		log.Println("Error in encrypting the password ", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": models.Error,
		})
		return
	}

	user.Password = string(hashedPassword)

	err = DBHandler.InsertToUser(user)
	if err != nil {
		log.Println("Error in inserting to database ", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": models.Error,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": "User registered successfully",
	})
}

func Login(c *gin.Context) {

	var user models.User

	err := c.BindJSON(&user)
	if err != nil {
		log.Println("Error in reading the request body ", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": models.Error,
		})
		return
	}

	logindata, err := DBHandler.GetUserByEmail(user.Email)
	if err != nil {
		log.Println("Error from getting login data from database ", err)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Email does not exist",
		})
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(logindata.Password), []byte(user.Password))

	if err != nil {
		log.Println("Password does not match")
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Password does not match",
		})
		return
	}

	// Implement the JWT here

	secret := os.Getenv("SECRET")

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": logindata.Email,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})
	tokenString, err := token.SignedString([]byte(secret))

	if err != nil {
		log.Println("Error in saving the JWT Token ", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": models.Error,
		})

		return
	}

	// Saving the JWT token to the cookies

	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, int(time.Hour*24), "/", "", false, true)

	c.JSON(http.StatusOK, gin.H{
		"success": "User Login Successfully",
	})

}


func Logout(c *gin.Context) {
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", "", -1, "/", "", false, true)

	log.Println("I am on signup page")

	c.JSON(http.StatusOK, gin.H{
		"success": "User Logout successfully",
	})

}