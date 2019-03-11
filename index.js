var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response){
    response.setHeader('Content-Type', 'text/html; charset = utf-8');
    if(request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data){
            if (err) {
                response.statusCode = 500;
                response.write('Something went wrong...');
            } else {
                response.statusCode = 200;
                response.write(data);
            }
            response.end();
        })

    } else {
		fs.readFile('404.jpg', function(err, data) {
		  if (err) {
            response.statusCode = 500;
            response.write('Something went wrong...');
		  } else {
		    response.writeHead(200, {'Content-Type': 'image/jpeg'});
		    response.end(data);
		  }
		});
    }	
})

server.listen(8080);