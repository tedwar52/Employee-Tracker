const mysql = require("mysql");
const inquirer = require("inquirer");
const console = require("console.table");
//const Roles = require("./viewRoles.js");
//const Departs = require("./viewDepartments.js");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hello152",
    database: "work_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

//const table = cTable.getTable([
// ]);
//HOW TO RETURN RESULTS AS A TABLE

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all employees by department",
                "View all employees by role",
                "Add employee",
                "Remove employee",
                "Update employee role",
                "Exit"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
            case "View all employees":
                viewEmployees();
                break;

            case "View all employees by department":
                //Departs.viewDeparts();
                viewDepartments();
                break;
            case "View all employees by role":
                //Roles.viewRoles();
                viewRoles();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Remove employee":
                removeEmployee();
                break;
            case "Update employee role":
                updateRole();
                break;
            case "Exit":
                connection.end();
                break;
            }
        });
}

function viewEmployees() {
    var query = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name ";
    query += "FROM employee INNER JOIN role ON (employee.role_id = role.id) ";

    connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res)
        }
    });


    start();
}
//ENTER VIEW DEPARTMENTS HERE

//external file for individual search returns

//ENTER VIEW ROLES FUNCTION HERE

//external file for search returns

function addEmployee() {
    //needs to return input fields
    //first name, last name, role
    inquirer
        .prompt(
            {
                name: "firstname",
                type: "input",
                message: "What is their first name?"
            },
            {
                name: "lastname",
                type: "input",
                message: "What is their last name?"
            },
            {
                name: "title",
                type: "input",
                message: "What is their title? (Salesperson, Lead Salesperson, Developer, Lead Developer, or Lawyer)"
            }
        )
        .then(function(answer) {
            //insert each answer into respective slot of table
            //return updated playlist
            var query = "INSERT INTO employee.first_name, employee.last_name, role.title WHERE ?"
            connection.query(query, [
                {
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                    role: answer.title
                }],
            function(err, res) {
                if (err) throw err;
            });
        });
}

function removeEmployee() {
    inquirer
        .prompt({
            name: "who",
            type: "input",
            message: "Who would you like to remove? (Search by last name)"
        })
        .then(function(answer) {
            //search by last name
            //remove user from schema
            //return updated database
        });
}

function updateRole() {
    inquirer
        .prompt({
            name: "changeTitle",
            type: "input",
            message: "Who's information would you like to update? (Search by last name)"
        })
        .then(function(answer) {
            //search by last name
            //update information in specific user
            //return updated database
        })
}