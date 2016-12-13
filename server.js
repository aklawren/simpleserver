var http = require('http');
var ExampleService = require('./service/exampleService');
const PORT = process.env.PORT || 8080;

function handleResponse(req, res){
   var method = req.method;
   var path = req.url;
   var response = "hello world";

   //error handling for request
   req.on('error', function(err) {
     console.error(err);
     res.status = 400;
     res.end();
   });
   //error handling for response? <- when would this happen?
   res.on('error', function(err){
     console.error(err);
   });

   //begin rough routing <- not using express for now
   if(method == 'GET' && path == '/'){
     res.statusCode = 200; //TODO: is there any difference between statusCode & writeHead?
     res.end(response);
   }
   if(method == 'GET' && path == '/info'){
     res.statusCode = 200;
     res.end("TBD...");
   }
   if(method == 'GET' && path == '/customService'){
     ExampleService.get(function(response){
       res.statusCode == 200;
       res.end(response);
     });
   }
   else{
     res.statusCode = 404;
     res.end();
   }
}

var server = http.createServer(handleResponse);

server.listen(PORT, function(){
   console.log("listening on PORT " + PORT);
});
