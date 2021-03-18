var express = require('express');
var router = express.Router();
var chatroomController = require('../controllers/chatroomController');


router.get('/', chatroomController.show);

router.post('/room',chatroomController.createRoom)

router.get('/:room',chatroomController.room)


module.exports = router;
