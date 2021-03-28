module.exports = (io, rooms)=> {
    io.on('connection', socket => { 
        socket.on('new-user', (room, name) => {
        console.log('user connected')
        socket.username = name;
        socket.room = room
        socket.join(room)
        rooms[room].users[socket.id] = name
        socket.broadcast.to(room).emit('user-connected', name)
        })

        socket.on('send-chat-message', (room, message) => {
          socket.broadcast.to(room).emit('chat-message', { message: message, name: rooms[room].users[socket.id] })
        })
        socket.on('disconnect', () => {
          getUserRooms(socket).forEach(room => {
            socket.broadcast.to(room).emit('user-disconnected', rooms[room].users[socket.id])
            delete rooms[room].users[socket.id]
          })
        })
      })
      
      function getUserRooms(socket) {
        return Object.entries(rooms).reduce((names, [name, room]) => {
          if (room.users[socket.id] != null) names.push(name)
          return names
        }, [])
      }
      
}  
