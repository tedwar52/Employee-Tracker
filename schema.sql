DROP DATABASE IF EXISTS work_db;

CREATE DATABASE work_db;

USE work_db;

CREATE TABLE employee (
    id NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT NULL,
    name VARCHAR(30),
    PRIMARY KEY (id)
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