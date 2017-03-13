var http = require('http');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var url = "https://www.netdirectautosales.com/inventory/";
var makeDataArray = [];
var totalCount;

request(url, function(error, response, html) {
    //console.log("html:", html); // Print the HTML for the Google homepage.
    console.log('error:', error); // Print the error if one occurred 
 	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    if(!error && response.statusCode == 200){
    	var $ = cheerio.load(html);
    	$('.filter-option-make').each(function(i,element){
    		var el = $(this);
    		//console.log(el)
    		//console.log(element)
    		var makeData = {
    			name: element.attribs['data-option'],
    			count: element.children[2].prev.children[0].data

    		}
    		console.log(makeData.name);
    		console.log(makeData.count);
    		makeDataArray.push(makeData);
    	})
    	$('#page-count').each(function(i,element){
    		console.log("page-count: ", element.children[0].data)
    		totalCount = element.children[0].data;
    		totalCount = totalCount.slice(1); //cuts off the first "("
    		//splits the totalCount string into an array at the space, isolates
    		//the number, then converts it from a string into a number.
    		totalCount = Number(totalCount.split(" ")[0]); 
    		console.log("totalCount type: ", typeof totalCount)
    		console.log("new totalCount: ", totalCount)
    	})
    	console.log("Total vehicles:", totalCount)
    	for(var i = 0; i < makeDataArray.length; i++){
    		var count;
    		if(makeDataArray[i].count > 12){
    			count = 12
    		}
    		else{
    			count = makeDataArray[i].count
    		}
    		console.log(makeDataArray[i].name + ": " + count) 
    		
    	}
    }
    console.log("makeDataArray: ", makeDataArray);  
});


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Check out the console for the results. In the command line. Not over there ----->>>>');
}).listen(3000, "127.0.0.1");
    
console.log('Server running at http://127.0.0.1:3000/');