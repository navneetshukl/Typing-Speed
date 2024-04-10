package models

import "gorm.io/gorm"

const (
	Error = "Some error occured.Please try again."
)

//User model for user details
type User struct {
	gorm.Model
	Name     string `json:"name" gorm:"not null"`
	Email    string `json:"email" gorm:"unique;not null"`
	Password string `json:"password" gorm:"not null"`
}

//Details models for typing detail
type Details struct {
	gorm.Model
	Email        string `json:"email" gorm:"not null"`
	Correct      int    `json:"correct" gorm:"not null"`
	Wrong        int    `json:"wrong" gorm:"not null"`
	Time         int    `json:"time" gorm:"not null"`
	Total_Length int    `json:"total" gorm:"not null"`
	Level        int    `json:"level" gorm:"not null"`
	Type         string `json:"type" gorm:"not null"`
}
