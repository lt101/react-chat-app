const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {origin: "http://localhost:3000"}
});

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', socket => {
    console.log(`new connection from client: ${socket.id}`);

    socket.on('join-room', newRoom => {
        socket.join(newRoom)
        console.log(`${socket.id} has joined ${newRoom}`)
    })

    socket.on('send-message', (messageInfo) => {
        socket.to(messageInfo.room).emit('receive-message', messageInfo)
        console.log(`${JSON.stringify(messageInfo)} has been sent from server to room ${messageInfo.room}`)
    })

    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} disconnected`)
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));