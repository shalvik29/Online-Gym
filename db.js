var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SiSha+1629',
    database: 'gym'
  });  

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;