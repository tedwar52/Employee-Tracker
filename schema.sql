DROP DATABASE IF EXISTS work_db;

CREATE DATABASE work_db;

USE work_db;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT
);

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

INSERT INTO employee (first_name, last_name)
VALUES ("Taylor", "Edwards");
INSERT INTO employee (first_name, last_name)
VALUES ("Jared", "Werner");
INSERT INTO employee (first_name, last_name)
VALUES ("Jenna", "Johnson");
INSERT INTO employee (first_name, last_name)
VALUES ("Megan", "Lowery");
INSERT INTO employee (first_name, last_name)
VALUES ("Eli", "Smith");
INSERT INTO employee (first_name, last_name)
VALUES ("Justin", "Wilcox");
INSERT INTO employee (first_name, last_name)
VALUES ("Sam", "McFadden");
INSERT INTO employee (first_name, last_name)
VALUES ("Tori", "Dayley");
INSERT INTO employee (first_name, last_name)
VALUES ("Tessa", "Gardner");
INSERT INTO employee (first_name, last_name)
VALUES ("Kevin", "Bell");