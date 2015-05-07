var port = 6554;
var http = require("http");
var auth = require("http-auth");
var basic = auth.basic({
  realm: "Private area"
  ,file: __dirname + "/htpasswd"
} );
  console.log( __dirname + "/htpasswd");
// Creating new HTTP server. 
var server = http.createServer(basic, function(req, res) {
  res.end("Welcome to private area - " + req.user + "!");
});
 
server.listen(port, "0.0.0.0");
console.log("Server is listening. http://127.0.0.1:" + port +"/");
