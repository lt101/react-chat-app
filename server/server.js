const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {origin: "http://localhost:3000"}
});


let connectedUsers = []

function addToUsers(socketId, loginInfo) {
    connectedUsers.push({   
        socket: socketId,
        username: loginInfo.userName, 
        room: loginInfo.room
    })
} 

function findRoomUsers(room) {
    let usersOfRoom = []
    connectedUsers.forEach((user) => {
        if(user.room === room) {
            usersOfRoom.push(user.username)
        }
    })
    return usersOfRoom
}

io.on('connection', socket => {
    console.log(`new connection from client: ${socket.id}`);

    socket.on('join-room', loginInfo => {
        addToUsers(socket.id, loginInfo)
        const usersOfRoom = findRoomUsers(loginInfo.room)
        socket.join(loginInfo.room)
        socket.to(loginInfo.room).emit('update-rooms', usersOfRoom)
        socket.emit('update-rooms', usersOfRoom)
    })

    socket.on('send-message', (messageInfo) => {
        socket.to(messageInfo.room).emit('receive-message', messageInfo)
        socket.emit('receive-message', messageInfo)
    })

    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} disconnected`)
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));