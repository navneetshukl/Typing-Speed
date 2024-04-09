package database

import (
	"github.com/navneetshukl/Typing-Speed/models"
	"gorm.io/gorm"
)

type PostgreSQLHandler struct {
	db *gorm.DB
}
type DBHandler interface {
	ConnectToDatabase() (*gorm.DB, error)
	MigrateDatabase()
	InsertToUser(name, email, password string) error
	GetUserByEmail(email string) (models.User, error)
	InsertIntoDetails(data models.Details) error
}
