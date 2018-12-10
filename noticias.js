var http = require('http')

var server = http.createServer(function (req, res) {
	res.end("<html><body>Portal de notícias</body></html>")
}).listen(3000)

server.listen(3000)