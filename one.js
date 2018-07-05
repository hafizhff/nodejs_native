var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Wordl');
}).listen(800);