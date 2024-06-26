package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/navneetshukl/Typing-Speed/auth"
	"github.com/navneetshukl/Typing-Speed/database"
	"github.com/navneetshukl/Typing-Speed/middleware"
	"github.com/navneetshukl/Typing-Speed/routes"
)

func init() {
	dbHandler := &database.PostgreSQLHandler{}
	dbHandler.MigrateDatabase()

	auth.DBHandler = dbHandler
	routes.DBHandler = dbHandler

}
func main() {
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowCredentials = true
	config.AllowOrigins = []string{"http://localhost:5173"}
	router.Use(cors.New(config))

	router.POST("/user/signup", auth.SignUp)
	router.POST("/user/login", auth.Login)
	router.GET("/user/logout", auth.Logout)

	router.POST("/user/home",middleware.Authenticate ,routes.GetDetailFromFrontend)

	router.Run()
}
