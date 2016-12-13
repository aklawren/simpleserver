var Request = require("../models/request");

function get(callback){
  var host = "example.com";
  var port = "80";
  var path = "/";
  var headers = "";
  var callback = callback || (() => {});

  var onResponse = function(response){
    console.log("response is: " + response);
    //TODO: validate response here
    callback(response);
  }

  var getRequest = new Request(host, port, path, headers);
  getRequest.get(onResponse);
}

module.exports.get = get;
