const io = require('socket.io')(5000, {
    cors: { origin: "*"}
});

io.on('connection', socket => {
    console.log('new connection')
})

