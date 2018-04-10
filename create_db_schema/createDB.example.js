const mysql = require("mysql")

var tableArray = require("./queryForNewTable")

var con = mysql.createConnection({
    host: "{{MYSQL_HOST}}",
    user: "{{MYSQL_USER}}",
    password: "{{MYSQL_PASSWORD}}"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected")
    con.query("CREATE DATABASE IF NOT EXISTS mydb", function(err, result) {
        if (err) throw err;
        con.query('USE mydb', function(err) {
            if (err) throw err;
            for (var i in tableArray) {
                con.query(tableArray[i], function(err) {
                    if (err) throw err;
                });
            }
        });
    })
});