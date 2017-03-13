var http = require('http');
var fs = require('fs');
var request = require('request');

var url = "https://www.netdirectautosales.com/inventory/";


request(url, function(error, response, html) {
    //console.log("html:", html); // Print the HTML for the Google homepage.
    console.log('error:', error); // Print the error if one occurred 
 	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
      
});


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Check out the console for the results. In the command line. Not over there ----->>>>');
}).listen(3000, "127.0.0.1");
    
console.log('Server running at http://127.0.0.1:3000/');