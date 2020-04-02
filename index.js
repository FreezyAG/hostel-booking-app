const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const port = 8080;
const errorcontroller = require('./controllers/error');

//import sequelize
const sequelize = require('./util/database');

// import room model
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

// wrong route controller
app.use(errorcontroller.getError404);


sequelize
    .sync({force: true})
    // .sync()
    .then(() => {
        app.listen(port, () => console.log(`connected to server at port: ${port}`))
    })
    .catch (err => console.log(err));
