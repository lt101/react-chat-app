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

let coolRoomIds = []
let cozyRoomIds = []
let niceRoomIds = []

function addParticipant(room, socketID) {
    if(room === 'cool room') coolRoomIds.push(socketID)
    if(room === 'cozy room') cozyRoomIds.push(socketID)
    if(room === 'nice room') niceRoomIds.push(socketID)
}

// function searchRoom(socketID) {
//     coolRoomIds.forEach(id => { if (id === socketID) return 'cool room'})
//     cozyRoomIds.forEach(id => { if (id === socketID) return 'cozy room'})
//     niceRoomIds.forEach(id => { if (id === socketID) return 'nice room'})
// }

io.on('connection', socket => {
    console.log(`new connection from client: ${socket.id}`);

    socket.on('join-room', newRoom => {
        // addParticipant(newRoom, socket.id)
        console.log(`${socket.id} has joined ${newRoom}`)
        socket.join(newRoom)
    })

    socket.on('send-message', (message) => {
        // socket.broadcast.emit('receive-message', message)
        // socket.emit('receive-message', message)
        socket.to("cool room").emit('receive-message', message.text)
        console.log(`${JSON.stringify(message.text)} has been sent from server to room ${message.selectedRoom}`)
    })

    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} disconnected`)
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));