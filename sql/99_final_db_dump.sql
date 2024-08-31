USE home_db;

SET PERSIST local_infile = 1;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS home;

DROP TABLE IF EXISTS interests;

CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO user (username, email)
SELECT DISTINCT username, email
FROM user_home;

CREATE TABLE home (
    home_id INT AUTO_INCREMENT PRIMARY KEY,
    street_address VARCHAR(255) NOT NULL,
    state varchar(50) DEFAULT NULL,
    zip varchar(10) DEFAULT NULL,
    sqft float DEFAULT NULL,
    beds int DEFAULT NULL,
    baths int DEFAULT NULL,
    list_price float DEFAULT NULL
);

INSERT INTO home (street_address, state, zip, sqft, beds, baths, list_price)
SELECT DISTINCT street_address, state, zip, sqft, beds, baths, list_price
FROM user_home;

CREATE TABLE interests (
    user_id INT NOT NULL,
    home_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (home_id) REFERENCES home(home_id)
);

INSERT INTO interests (user_id, home_id)
SELECT user.user_id as user_id, home.home_id as home_id FROM
user INNER JOIN home_db.user_home uh
ON uh.username = user.username 
INNER JOIN home  
ON uh.street_address = home.street_address;

DROP TABLE IF EXISTS user_home;




