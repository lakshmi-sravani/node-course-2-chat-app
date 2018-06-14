 
const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');


const publicPath = path.join(__dirname, '../public')
// console.log(__dirname + '/../public');
// console.log();
var app = express();
var server = http.createServer(app);
var io = socketIo(server);


app.use(express.static(publicPath));

io.on('connection', (socket) =>{
console.log('new user connected');

socket.emit('newMessage',{
    from:'john',
    text:'c u then',
    createAt:123123
});
socket.on('createMessage',(message) =>{
    console.log('createMessage',message)
});
socket.on('disconnect', () =>{
            console.log('disconnected from server');
        });
});

server.listen(3000, () => {
    console.log('Server is up on port 3000');
});
