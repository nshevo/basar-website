//const rooms = {}

var show = (req, res, next) => {
    const rooms=req.app.get('rooms');
    console.log("chatrooms loading...")
    res.render('roomSelection', {rooms: rooms,response: res});
}

var rooms =(req, res) => {
    const rooms=req.app.get('rooms');
    const io=req.app.get('io');
    rooms[req.body.room] = { users: {} }
    res.redirect(`/chatrooms/${req.body.room}`)
    console.log('Rooms', rooms)
    console.log(req.body.room)
    // Send message that new room was created
    io.emit('room-created', req.body.room)
  }

  var room = (req, res) => {
    res.render('room', { roomName: req.params.room ,response: res})
}

module.exports = {
    show,
    rooms,
    room
}