const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


router.post('/add-room', adminController.postAddRoom);

router.post('/delete', adminController.postDeleteRoom);

module.exports = router;