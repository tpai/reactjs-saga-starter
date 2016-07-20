var fallback = require('express-history-api-fallback');
var express = require('express');
var path = require('path');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 8080;

var root = path.resolve(__dirname, './www');
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'www', 'index.html'))
});

http.listen(port, function() {
    console.log("Listening to http://localhost:" + port)
});
