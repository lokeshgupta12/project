const mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

module.exports = connection;