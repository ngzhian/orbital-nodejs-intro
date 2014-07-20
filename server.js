var http = require('http');

var requestHandler = function(request, response) {
  console.log('Received request');
}

var server = http.createServer(requestHandler);

server.listen(8000)
console.log('Server listening on port 8000');
