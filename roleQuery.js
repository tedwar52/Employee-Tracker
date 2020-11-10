const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hello152",
    database: "work_db"
});

connection.connect(function(err) {
    if (err) throw err;
})

function roleQuery(choice) {
    this.answer = choice
}

roleQuery.prototype.printStats = function() {
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name FROM employee JOIN role ON employee.role_id=role.id JOIN department ON role.department_id=department.id WHERE role.title = ?";
    
    connection.query(query, { choice }, function (err, res) {
        if (err) throw err;
        console.table([], res);
    })
}

const leadSales = new roleQuery("Lead Salesperson");
const sales = new roleQuery("Salesperson");
const leadDev = new roleQuery("Lead Developer");
const dev = new roleQuery("Developer");
const law = new roleQuery("Lawyer");

module.export = roleQuery;
