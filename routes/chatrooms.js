var express = require('express');
var router = express.Router();
var chatroomsController = require('../controllers/chatroomsController');


router.get('/', chatroomsController.index);

router.post('/room', chatroomsController.create)

router.get('/:room', chatroomsController.show)


module.exports = router;
