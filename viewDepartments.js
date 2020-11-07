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
                    viewDPTS();
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

function viewDPTS() {
    var query = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name ";
    query += "FROM employee INNER JOIN role ON (employee.role_id = role.id) ";
    query += "WHERE department.name = ?";

    connection.query(query, answer.role, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res)
        }
    });
}

module.exports = viewDepartments();