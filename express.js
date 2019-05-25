const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { Client } = require('tplink-smarthome-api');
const client = new Client();

app.use(express.static(__dirname +'/'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname, '/index.html')
});

io.on('connection', function (socket) {
    console.log('A client has connected');
    socket.on('on', function() {
        io.emit('on')
        on()
    });

    socket.on('off', function () {
        io.emit('off')
        off()
    });
});

const bulb = client.getBulb({ host: '192.168.1.42' });

function on() {
    bulb.setPowerState(true);
}

function off() {
    bulb.setPowerState(false);
}

server.listen(4200);