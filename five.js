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
    var sql = "insert into customers (name,address) values ('Company Inc','Highway 37')";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("1 Record Inserted");
    })
})