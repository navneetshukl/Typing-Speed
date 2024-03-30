package database

import "gorm.io/gorm"

type PostgreSQLHandler struct {
	db *gorm.DB
}
type DBHandler interface {
	ConnectToDatabase() (*gorm.DB, error)
	MigrateDatabase()
	InsertToUser(name, email, password string) error
}
