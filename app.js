var http = require('http');  // Add HTTP module
var myServer = http.createServer(function(request,response){
	response.writeHead(200,{"content-Type": "text/html"});
	response.write("<h1>THis is node website</h1>");
}) // Create Server

myServer.listen("3000");
console.log("Open page http://localhost:3000")