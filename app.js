const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server);

const LISTEN_PORT = 8080;

app.get('/mobile', function(req, res) {
    app.use(express.static('Public/assets'));
    res.sendFile(__dirname + '/public/mobile.html');
});

app.get('/desktop', function(req, res) {
    app.use(express.static('Public/assets'));
    res.sendFile(__dirname + '/public/desktop.html');
});

socketIO.on('connection', function(socket){
    console.log(socket.id + " has connected!");

    socket.on('disconnect', function(data){
        console.log(socket.id + " has disconnected");
    });
    //socket = one client
    //socketIO.socekts = all cliets
    /*
    socket.on('red', function(data){
        console.log('red event heard');
        socketIO.sockets.emit('color_change', {r: 255, g: 0, b: 0});
    });*/
});

server.listen(LISTEN_PORT);
console.log('listening to port:' + LISTEN_PORT);