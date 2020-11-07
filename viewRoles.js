var mysql = require("mysql");
var inquirer = require("inquirer");
//var viewDepartments = require("./index")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hello152",
    database: "work_db"
});

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

function roleQuery() {
    var query = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name ";
    query += "FROM employee INNER JOIN role ON (employee.role_id = role.id) ";
    query += "WHERE role.title = ?";

    connection.query(query, answer.role, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res)
        }
    });
}

module.export = viewRoles();