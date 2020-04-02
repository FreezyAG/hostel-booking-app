const express = require('express');

const roomController = require('../controllers/room');

const router = express.Router();

// user check available rooms
router.post('/roomcheck', roomController.postCheckAvailableRoom);

// book room
router.post('/roombooking', roomController.postBookAvailableRoom);

module.exports = router;