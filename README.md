# hostel-booking-app
Backend API that manages the booking of hostel rooms

Once downloaded

Run 'npm install' on the terminal to install dependencies

To connect to the postgresDB using Sequelize

    In the 'database.js' file in the 'util' folder provide the appropriate input in the following fields
    const sequelize = new Sequelize('schema-name', 'username', 'password', {
    dialect: 'postgres', 
    host: 'localhost'
    });

The model saves the bookings and available rooms to the server

For the Client 

    To check available room and price http://localhost:8080/roomcheck => POST
    Sample JSON input
        {
            req.body.numOfGuests: INTEGER
        }  

    To book the available room http://localhost:8080/roombooking => POST
        Sample JSON input
        {
            req.body.roomType:  STRING => Room type - Deluxe, Mixed Dorm etc.
            req.body.checkIn:   DATE => YYYY-MM-DD format
            req.body.checkOut:  DATE => YYYY-MM-DD format
        } 

For the Admin

    To add room with its configuration and details http://localhost:8080/add-room => POST 
        Sample JSON input
            {
                req.body.roomType:  STRING => Room type - Deluxe, Mixed Dorm etc.
                req.body.numOfBed:   INTEGER
                req.body.price:  DOUBLE
                req.body.availableRoom:  INTEGER
            } 

    To edit room details http://localhost:8080/edit-room => POST
        Sample JSON input
            {
                req.body.roomType:   STRING => Room type - Deluxe, Mixed Dorm etc.
                req.body.numOfBed:   INTEGER
                req.body.price:      DOUBLE
                req.body.availableRoom:  INTEGER
            } 

    To delete room details http://localhost:8080/delete-room => POST
        Sample JSON input
        {
            req.body.roomType: STRING
        } 

    Once a booking is made, socket.io sends a response to the admin
        Admin API is "ws://localhost:8080/booking/to/ws"