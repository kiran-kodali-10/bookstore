DROP DATABASE IF EXISTS bookstore;

CREATE DATABASE bookstore;

USE bookstore;

DROP TABLE if exists users CASCADE;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `created_at` timestamp,
  `country_code` int
);

CREATE TABLE `book` (
  `book_id` int PRIMARY KEY AUTO_INCREMENT,
  `book_title` varchar(255),
  `category` varchar(255),
  `author` varchar(255),
  `rating` int
);

ALTER TABLE `book` ADD FOREIGN KEY (`book_id`) REFERENCES `users` (`id`);

INSERT INTO users VALUES (1,'KIRAN','KODLAI','kiranrm61923@gmail.com','2021-01-01', 91);
INSERT INTO users VALUES (2,'KIRAN','KODLAI','kiranrm61923@gmail.com','2021-01-01', 91);
INSERT INTO users VALUES (3,'KIRAN','KODLAI','kiranrm61923@gmail.com','2021-01-01', 91);
INSERT INTO users VALUES (4,'KIRAN','KODLAI','kiranrm61923@gmail.com','2021-01-01', 91);

INSERT INTO book VALUES (1,'java se','programming','hcbert',4);
INSERT INTO book VALUES (2,'java se','programming','hcbert',4);
INSERT INTO book VALUES (3,'java se','programming','hcbert',4);
INSERT INTO book VALUES (4,'java se','programming','hcbert',4);

commit;