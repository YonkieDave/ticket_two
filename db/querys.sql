CREATE DATABASE socialweb;

USE socialweb;

CREATE TABLE users 
(user_id INT NOT NULL IDENTITY(1,1),
user_name VARCHAR(256) NOT NULL,
user_profile_image NVARCHAR(1000),
user_paternal VARCHAR(256) NOT NULL,
user_maternal VARCHAR(256) NOT NULL,
user_email VARCHAR(256) NOT NULL,
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
update_date DATETIME,
PRIMARY KEY (user_id, user_email)
);

SELECT * FROM users;
