const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {origin: "http://localhost:3000"}
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Run when client connects
io.on('connection', socket => {
    console.log('new connection')
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));