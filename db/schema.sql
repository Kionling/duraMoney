DROP DATABASE IF EXISTS duraDB; 
CREATE DATABASE duraDB; 
USE duraDB; 

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(20),
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(10) NOT NULL,
    date_created TIMESTAMP DEFAULT, 
)

CREATE TABLE income(
    id INT AUTO_INCREMENT, 
    amount DECIMAL(10,2),
    date_recorded DATE, 
)


CREATE TABLE expenses(
    id INT AUTO_INCREMENT, 
    amount DECIMAL(10,2), 
)