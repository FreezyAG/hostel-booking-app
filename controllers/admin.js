const Room = require('../models/room');

exports.postAddRoom = (req, res, next) => {
    Room.create({
        roomType: req.body.roomType,
        numOfBed: req.body.numOfBed,
        price: req.body.price,
        availableRoom: req.body.availableRoom
    })
    .then(result => {
        console.log('Room Created');
        res.json({
            error: false,
            code: 200,
            message: 'Room Created'
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postEditRoom = (req, res, next) => {
    const updatedRoomType = req.body.roomType;
    const updatedNumOfBed = req.body.numOfBed;
    const updatedPrice = req.body.price;
    const updatedAvailableRoom = req.body.availableRoom;
    Room.update({
        roomType: updatedRoomType,
        numOfBed: updatedNumOfBed,
        price: updatedPrice,
        availableRoom: updatedAvailableRoom
        },
        {
        attributes: ['id', 'roomType'],
        where: {roomType: updatedRoomType}
        }
    )
    .then(result => {
        console.log('Room Updated')
        res.json({
            error: false,
            code: 200,
            message: 'Room Updated'
        });
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
            console.log('Room deleted');
            res.json({
                error: false,
                code: 200,
                message: 'Room deleted'
            });
        })
        .catch(err => {
            console.log(err);
        })
};