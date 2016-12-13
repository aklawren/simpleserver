var http = require("http");

exports.send = function(options, callback){
  var callback = callback || (() => {});
  console.log("checking callback value: " + callback);

  var responseHandler = (response) => {
     var str = '';

     response.on('data', (chunk) => {
       str += chunk;
     });

     response.on('end', () => {
        callback(str);
     });
  }

  var req = http.request(options, responseHandler);

  req.on('error', (err) => {
    throw new Error("Request failed.");
  });
  req.end();
}
