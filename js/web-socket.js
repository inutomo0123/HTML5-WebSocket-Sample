$(document).ready(function(){
	
	connection = null;
	
	$("button#instantiation").click(function(){
		connection = new WebSocket("ws://" + location.host + ":8888/");
		
		connection.onopen = function(){
			console.log("open");
		}
		
		connection.onclose = function(){
			console.log("close");
		}
		
		connection.onmessage = function(event) {
			console.log("message " + event.data);
			
			$("ol#messages").prepend('<li>' + event.data + '</li>');
		}
		
		connection.onerror = function(error) {
			console.log("error " + error);
		}
	});
	
	$("button#send").click(function(){
		var message = $("input:text#message").val();
		
		connection.send(message);
	});
	
	$("button#close").click(function(){
		connection.close();
	});
	
});

