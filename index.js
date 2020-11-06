const mysql = require("mysql");
const inquirer = require("inquirer");
const console = require("console.table");

const log = (msg) => console.log(msg);

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
                viewDepartments();
                break;
            case "View all employees by role":
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
    connection.query("SELECT * FROM employee", (err, result) => {
        if (err) {
            log(err);
        }
        log(result);
    });
    start();
}