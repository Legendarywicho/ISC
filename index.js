

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('./index.html', function(err,file){
        response.end(file);
    });
});

    server.listen(8000);