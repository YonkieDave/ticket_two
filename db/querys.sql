CREATE DATABASE socialweb;

USE socialweb;

CREATE TABLE users 
(user_id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
user_name VARCHAR(256) NOT NULL,
user_paternal VARCHAR(256) NOT NULL,
user_maternal VARCHAR(256) NOT NULL,
user_email VARCHAR(256) NOT NULL ,
user_pass VARCHAR(256) NOT NULL,
user_gender VARCHAR(256) NOT NULL,
user_marital_status VARCHAR(256) NOT NULL,
user_city VARCHAR(256) NOT NULL,
user_age INT NOT NULL,
user_studies NVARCHAR(1000) NOT NULL,
user_lenguajes NVARCHAR(1000) NOT NULL,
user_linkedin VARCHAR(256),
user_hobbies NVARCHAR(1000) NOT NULL,
user_about NVARCHAR(1000) NOT NULL,
create_date DATETIME,
update_date DATETIME
);

SELECT * FROM users;

CREATE TABLE user_images 
(image_id INT IDENTITY (1,1),
user_id INT, 
image_name VARCHAR(255),
image_content VARBINARY(MAX),
image_extention CHAR(5),
create_date DATETIME,
update_date DATETIME
PRIMARY KEY (image_id)
FOREIGN KEY (user_id) REFERENCES users(user_id));

CREATE TABLE user_friends
(id_friendly INT IDENTITY (1,1),
user_id INT,
user_id_friend INT,
status VARCHAR(20),
create_date DATETIME,
update_date DATETIME
PRIMARY KEY (id_friendly)
FOREIGN KEY (user_id) REFERENCES users(user_id));