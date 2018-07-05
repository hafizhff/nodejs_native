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
    var sql = "select * from customers";
    con.query(sql, function(err, result,fields){
        if(err) throw err;
        console.log(result);
    })
})