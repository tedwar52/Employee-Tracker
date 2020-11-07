const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
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

const table = cTable.getTable(
    {
        //first_name: "SELECT first_name FROM employee",
        //last_name: "SELECT last_name FROM employee",
        //title: "SELECT title FROM role",
        //department: "SELECT name FROM department",
        //salary: "SELECT salary FROM role"
    }
);

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
   //1 var query = "SELECT * FROM employee"
   
    //2 var query = "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee, role, department "
    //4 query+= "ON (department.id = role.department_id, role.id = employee.role_id)";
    //3 query+= "WHERE employee.role_id = role.id, role.department_id = department.id";
    //5 query+= "ON empoloyee.role_id = role.id, role.department_id = department.id"

    //6 var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee JOIN role ON employee.role_id=role.id";

    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name FROM employee JOIN role ON employee.role_id=role.id JOIN department ON role.department_id=department.id"; 


    //---------NOTES-----------
        //running just query 1 returns a table with only the employee values
        //running just query 2 returns a table repeating ton mixing all the variables (not matched in lines)
        //running query2&3 returns nothing
        //running query2&4 returns nothing
        //running query2&5 returns nothing
        //running query 6 RETURNS THE RIGHT TABLE (only two combined)!!
        //running query 7 returns correct table... but after logging the top of the table (labels)

    
    //connection.query(query, function(err, res) {
       // if (err) throw err;
       // for (var i = 0; i < res.length; i++) {
        //    console.log(res)
       // }
        //console.log(query.sql);
   // }); 
    //console.log(table.query)

    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table([], res);

        //--------NOTES----------
            //running the console.table in the for loop returns everything mismatched (aka taylor runs 15 times with each possible combination) 10 times
            //running the console.table with a loop, but outside of it runs the same as the next scenario
            //running the console.table without a loop returns everything mismatched (aka taylor runs 15 with each possible combination)

            //conclusion: my FK aren't lining up. Need to assign to ids. No loop needed
       
    })

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

//NOTES FOR IMPROVEMENT:

//consider making employee query a constructor of sorts to be used for updating roles & deleting employees...
//new employeeQuery("last_name")

//consider making update role a constructor of sorts to be called in the switch/case
//case "Lawyer": new newRole(4)

//display updated tables after updating, adding, and removing employees
//end of each function just call viewEmployees();

//HOW TO OVERLAP THIRD TABLE???

//HOW TO RETURN TABLE