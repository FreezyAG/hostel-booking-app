const express = require('express');

const roomController = require('../controllers/room');

const router = express.Router();


router.post('/post', roomController.postCheckAvailableRoom);

router.post('/booking', roomController.postBookAvailableRoom);

module.exports = router;