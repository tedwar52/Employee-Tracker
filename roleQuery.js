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

function roleQuery(number) {
    this.number = number
}

roleQuery.prototype.runSearch = function() {
    var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name FROM employee JOIN role ON employee.role_id=role.id JOIN department ON role.department_id=department.id WHERE role.id = ?";
    
    connection.query(query,[], function (err, res) {
        if (err) throw err;
        console.table([], res);
    })
}

const leadSales = new roleQuery(5);
const sales = new roleQuery(1);
const leadDev = new roleQuery(2);
const dev = new roleQuery(3);
const law = new roleQuery(4);

module.exports = roleQuery;
