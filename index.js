const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const port = 8080;

//import sequelize
const sequelize = require('./util/database');

// const Room = require('./models/room');
const Room = require('./models/room');



// import routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

//Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

// Define req.user
// app.use((req, res, next) => {
//     User.findByPk(1)
//         .then(user => {
//             req.user = user;
//             next();
//         })
//         .catch(err => {
//             console.log(error);
//         });
// });

app.get('/', (req, res) => res.send('you are good to go'))

// app.use(errorcontroller.getError404);


sequelize
    .sync({force: true})
    // .sync()
    .then(() => {
        Room.create({ roomType: 'Deluxe', numOfBed: 1, price: 200, availableRoom: 5})
        // console.log ('connected to sequelize')
    })
    .then(() => {
        Room.create({ roomType: 'FourMan', numOfBed: 4, price: 300, availableRoom: 9})
        console.log ('connected to sequelize')
    })
    .then(() => {
        app.listen(port, () => console.log(`connected to server at port: ${port}`))
    })
    .catch (err => console.log(err));

// sequelize
//     .sync({force: true})
//     // .sync()
//     .then(result => {
//         return User.findByPk(1)
//     // console.log(result);
//     })
//     .then(user => {
//         if (!user) {
//             return User.create({ name: 'Fisayo', email: 'test@test.com'})
//         }
//         return user;
//     })
//     // .then(user => {
//     //     return user.createCart();
//     // })
//     .then( cart => {
//         app.listen(port);
//     })
//     .catch(err => {
//         console.log(err);
//     });
