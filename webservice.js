var http = require('http');
var server=http.createServer(function(request, response){
       console.log('Knock knock.');
       response.writeHead( 
              200, {"Content-Type": "application/json"});
       var data = { 'message' : 'Hello Honey!!!' };
       response.end(JSON.stringify(data) + '\n');
});

server.listen(8888);
console.log('I love you.');

