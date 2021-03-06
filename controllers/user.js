const Room = require('../models/room');
const Booking = require('../models/booking');
const io = require('../socket');

exports.postCheckAvailableRoom = (req, res, next) => {
    const numOfGuests = req.body.numOfGuest;

    Room.findAll()
        .then(rooms => {
            let availableRoom = [];
            for (let i = 0; i < rooms.length; i++) {
                let fetchedRooms = rooms[i].dataValues;
                if (fetchedRooms.availableRoom > 0 && fetchedRooms.numOfBed >= numOfGuests) {
                    availableRoom.push(fetchedRooms)
                };
            };
            return availableRoom;
        })
        .then(availableRoom => {
            res.json({
                error: false,
                code: 200,
                message: availableRoom
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postBookAvailableRoom = (req, res, next) => {
    const room = req.body.roomType
    const checkIn = req.body.checkIn
    const checkOut = req.body.checkOut

    // create a booking
    Booking.create({
        room: room,
        checkIn: checkIn,
        checkOut: checkOut
    })
    .then(() => {
        // find the booked room type
        let room = Room.findAll({
            attributes: ['id', 'roomType', 'availableRoom'],
            where: {roomType: room} })
        // store the relevant room data
        roomBooked = room[0].dataValues
        // send a real time response to the admin from socket.io
        io.getIO().emit('roomBooked', { action: 'booking-created', post: roomBooked})
        
        return roomBooked
    })
    .then(bookedRoom => {
        let result = bookedRoom[0].dataValues.availableRoom;

        // if today is not yet checkout date, reduce available room...
        // ...by one else booked room is now available
        if (Date.now() <= new Date(checkOut).getTime()) {
            // Update the database
            Room.update({
                availableRoom: result - 1
                },
                {
                attributes: ['id', 'roomType'],
                where: {roomType: room}
                }
            );
        } else {
            Room.update({
                availableRoom: result + 1
                },
                {
                attributes: ['id', 'roomType'],
                where: {roomType: room}
                })
        }
    })
    .then(() => {
        res.json({
            error: false,
            code: 200,
            message: 'Congrats, Room has been booked'
        });
    })
    .catch(err => {
        console.log(err);
    });
};