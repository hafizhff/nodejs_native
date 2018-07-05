var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "mydb",
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "create table customers(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), address text)";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table Created");
    })
})