var http=require('http');
var url=require('url');

var server=http.createServer(function(req, resp){
	//parsejemla url a traves de objurl
	var objurl=url.parse(req.url);
	console.log('Path: '+objurl.path);
	console.log('PATHNAME: '+objurl.pathname);
	console.log('QUERY: '+objurl.query);
	resp.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
	resp.write('<!DOCTYPE html> <html><head></head>')
	resp.write('<body><h1>hola mon</h1>');
	resp.write('<h2>'+objurl.pathname+'</h2>');
	resp.write('</body></html>');
	resp.end();
});

server.listen(3000); //mayores de 1024 para no inferir con servicios de la maquina
console.log('Servidor iniciat');