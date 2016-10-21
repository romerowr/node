var http=require('http');
var servidor=http.createServer(function(request, response){
	response.writeHead(200, {'Content-T':'text/plain'});
	response.write('<h1>Hello world</h1>');
	response.end();
});

servidor.listen(8888);
console.log('Servidor iniciadorrrrg');