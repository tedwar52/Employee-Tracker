const mysql = require("mysql");
const inquirer = require("inquirer");
const console = require("console.table");
//const Roles = require("./viewRoles.js");
//const Departs = require("./viewDepartments.js");
//const employeeQuery = require('./employeesearch.js');

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

//---------------------START APPLICATION-------------------------------

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
                employeeQuery();
                break;
            case "Exit":
                connection.end();
                break;
            }
        });
}

//--------------SELECTION: VIEW ALL EMPLOYEES-----------------------------

function viewEmployees() {
    var query = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name ";
    query += "FROM employee INNER JOIN role ON (employee.role_id = role.id) ";

    var query = "SELECT * FROM employee"

    connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res)
        }
    });


    start();
}

//---------------SELECTION: VIEW BY DEPARTMENT-----------------------------

function viewDepartments() {
    inquirer
        .prompt({
            name: "department",
            type: "list",
            message: "Which department would you like to look at?",
            choices: [
                "Sales",
                "Legal",
                "Development",
                "Go Back"
            ]
        })
        .then(function(answer) {
            switch(answer.department) {
                case "Sales":
                    viewSales();
                    break;
                case "Legal":
                    viewLegal();
                    break;
                case "Development":
                    viewDevelopment();
                    break;
                case "Go Back":
                    start();
                    break;
                    //consider sending back to previous menu
            }
        });
}


//---------------SELECTION: VIEW BY ROLE-----------------------------------

function viewRoles() {
    inquirer
        .prompt({
            name: "role",
            type: "list",
            message: "Which role would you like to look at?",
            choices: [
                "Lead Salesperson",
                "Salesperson",
                "Lead Developer",
                "Developer",
                "Lawyer",
                "Go Back"
            ]
        })
        .then(function(answer) {
            switch(answer.role) {
                case "Lead Salesperson":
                    roleQuery();
                    break;
                case "Salesperson":
                    roleQuery();
                    break;
                case "Lead Developer":
                    roleQeury();
                    break;
                case "Developer":
                    roleQuery();
                    break;
                case "Lawyer":
                    roleQuery();
                    break;
                case "Go Back":
                    start();
                    break;
                    //consider sending back to previous menu
            }
        })
}


//---------------SELECTION: ADD EMPLOYEE-----------------------------------

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
            var query = "INSERT INTO employee.first_name, employee.last_name, role.title VALUES ?"
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

//---------SELECTION: REMOVE EMPLOYEE------------------------------------

function removeEmployee() {
    inquirer
        .prompt({
            name: "who",
            type: "input",
            message: "Who would you like to remove? (Search by last name)"
        })
        .then(function(employeeQuery, answer) {
            //search by last name
            //remove user from schema
            //return updated database
        });
}

//------------SELECTION: UPDATE ROLE---------------------------------------

function employeeQuery() {
    inquirer
        .prompt({
            name: "changeTitle",
            type: "input",
            message: "Who's information would you like to update? (Search by last name)"
        })
        .then(function(answer) {
            //search by last name
            var query = "SELECT * FROM employee where last_name=?";
            connection.query(query, [ {last_name: answer.lastname} ], function (err, res) {
                if (err) throw err;
                console.log(res[0])
                if (res[0] == undefined) {
                    console.log("No employee found by that name!")
                    start();
                }
                //update information in specific user
                updateRole();
            });
        });
            //return updated database     
}

function updateRole() {
    inquirer
        .prompt({
            name: "change",
            type: "list",
            message: "What is this employee's new role?",
            choices: [
                "Salesperson",
                "Lead Salesperson",
                "Developer",
                "Lead Developer",
                "Lawyer"
            ]
        })
        .then(function(answer) {
            switch(answer.change){
                case "Salesperson":
                    connection.query("UPDATE title WHERE department = ?", [1], function(err, res) {
                        if (err) throw err;
                        console.log("Employer updated!");
                        start();
                    });
                    break;
                case "Lead Salesperson":
                    connection.query("UPDATE title WHERE department = ?" [5], function(err, res) {
                        if (err) throw err;
                        console.log("Employer updated!");
                        start();
                    });
                    break;
                case "Developer":
                    connection.query("UPDATE title WHERE department = ?" [3], function(err, res) {
                        if (err) throw err;
                        console.log("Employer updated!");
                        start();
                    });
                    break;
                case "Lead Developer":
                    connection.query("UPDATE title WHERE department = ?" [2], function(err, res) {
                        if (err) throw err;
                        console.log("Employer updated!");
                        start();
                    });
                    break;
                case "Lawyer":
                    connection.query("UPDATE title WHERE department = ?" [4], function(err, res) {
                        if (err) throw err;
                        console.log("Employer updated!");
                        start();
                    });
                    break;
            }
        });
}

//----------------------------------------------------------------------

