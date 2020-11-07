DROP DATABASE IF EXISTS work_db;

CREATE DATABASE work_db;

USE work_db;

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    //*manager_id INT*//
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT
);

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Taylor", "Edwards", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jared", "Werner", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jenna", "Johnson", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Megan", "Lowery", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Eli", "Smith", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Justin", "Wilcox", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sam", "McFadden", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tori", "Dayley", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kelsey", "Gardner", 5);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kevin", "Bell", 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 30000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Developer", 65000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Developer", 45000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 50000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Salesperson", 33000, 1);

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Development");