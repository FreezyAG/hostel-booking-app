const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-room 
router.post('/add-room', adminController.postAddRoom);

// /admin/edit-room
router.post('/edit-room', adminController.postEditRoom);

// /admin/delete-room
router.post('/delete-room', adminController.postDeleteRoom);

module.exports = router;