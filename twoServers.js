var http = require('http');

var nicePORT = 7000;

var meanPORT = 7500;

function niceHandleRequest(request, response){
	response.end("Oh wow, looking good");
}

function meanHandleRequest(request, response){
	response.end("Yikes, go away");
}

var niceServer = http.createServer(niceHandleRequest);

var meanServer = http.createServer(meanHandleRequest);

niceServer.listen(nicePORT, function(){
	console.log("Server listening on: http://localhost:%s", nicePORT);
});

meanServer.listen(meanPORT, function(){
	console.log("Server listening on: http://localhost:%s", meanPORT);
});