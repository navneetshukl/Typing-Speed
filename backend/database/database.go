package database

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"github.com/navneetshukl/Typing-Speed/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

//  ConnectToDatabase will connect to database

func (p *PostgreSQLHandler) ConnectToDatabase() (*gorm.DB, error) {
	err := godotenv.Load()
	if err != nil {
		p.db = nil
		log.Fatal("Error loading .env file")
		return nil, err
	}
	dsn := os.Getenv("DB_CONNECTION_STRING")

	DB, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		p.db = nil
		log.Fatal("Error connecting to database ", err)
		return nil, err
	}
	fmt.Println("Connected to Database")
	p.db = DB
	return DB, nil
}

func (p *PostgreSQLHandler) MigrateDatabase() {

	DB, err := p.ConnectToDatabase()

	if err != nil {
		log.Fatal("There is error connecting to database")
		return
	}

	DB.AutoMigrate(&models.User{})
}

func (p *PostgreSQLHandler) InsertToUser(user models.User) error {

	result := p.db.Create(&user)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
