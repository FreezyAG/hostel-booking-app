const Room = require('../models/room');


exports.postAddRoom = (req, res, next) => {
    Room.create({
        roomType: req.body.roomType,
        numOfBed: req.body.numOfBed,
        price: req.body.price,
        availableRoom: req.body.availableRoom
    })
    .then(result => {
        console.log('Room Created')
        res.send('Room Created')
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postDeleteRoom = (req, res, next) => {
    const room = req.body.roomType
    Room.destroy({
        attributes: ['id', 'roomType',],
        where: {roomType: room} })
        .then(() => {
            console.log('Room deleted')
            res.send('Room deleted')
        })
        .catch(err => {
            console.log(err);
        })
};