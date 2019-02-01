const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server);

const LISTEN_PORT = 8080;

app.get('/color', function(req, res) {
    res.sendFile(__dirname + '/public/color.html');
});

app.get('/controller', function(req, res) {
    res.sendFile(__dirname + '/public/controller.html');
});


server.listen(LISTEN_PORT);
console.log('listening to port:' + LISTEN_PORT);