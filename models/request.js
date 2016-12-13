var Requester = require("../service/requester");

function Request(host, port, path, headers) {
  this.host = host;
  this.port = port;
  this.path = path;
  this.headers = headers;
}

Request.prototype.get = function(callback){
  var callback = callback || "";
  console.log("checking callback value: " + callback);

   var options = {
     host: this.host,
     port: this.port,
     path: this.path,
     headers: this.headers,
     method: "GET"
   };
   console.log("calling get with: " + JSON.stringify(options));
   Requester.send(options, callback);
}

module.exports = Request;

//TODO: turn this into a proper class
// class Request {
//
//   /*options = {
//    * host: "",
//    * port: "",
//    * path: "",
//    * headers: ""
//    * }
//    */
//
//    constructor(host, port, path, headers){
//       this.host = host;
//       this.port = port;
//       this.path = path;
//       this.headers = headers;
//     //  this.options.host = host || "";
//     //  this.options.port = port || "";
//     //  this.options.path = path || "";
//     //  this.options.headers = headers || "";
//    }
//    get(callback){
//      var callback = callback || (() => {});
//      var options = {
//        host: this.host,
//        port: this.port,
//        path: this.path,
//        headers: this.headers,
//        method: "GET"
//      };
//      Requester.send(options, callback)
//    }
// }
