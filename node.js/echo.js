var ws = require("websocket.io");

var server = ws.listen(8888, function(){
	console.log("WebSocket Server has started.");
});

server.on('connection', function(socket){
	
	socket.on('message', function(data){
		
		console.log('message ' + data);
		
		server.clients.forEach(function(client){
			client.send(data);
		});
		
	});
	
});
