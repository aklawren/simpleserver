var http = require('http');
var fs = require('fs');

const PORT = process.env.PORT || 8080;

function handleResponse(req, res){
   var path = req.url;
   var response = "hello world";
   
   switch(path){
      case "/testingCallback":
         response = "Thanks for calling me back!";
	 console.log("response is: " + response);
         break;
      default:
         break;
   }

   res.writeHead(200);
   res.end(response);
}

var server = http.createServer(handleResponse);

server.listen(PORT, function(){
   console.log("listening on PORT 8080");
});   
