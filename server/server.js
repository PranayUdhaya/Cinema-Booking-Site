// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
// get MongoDB driver connection
const dbo = require('./db/conn');

const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
//app.use(require('./routes/record'));

// Global error handling
app.use(function (err, _req, res) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }

    // start the Express server
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});


// require('dotenv').config();
// const express = require("express");
// const app = express();
// const path  = require('path');
// const PORT = process.env.PORT || 5000;
// const cors = require('cors');
// const corsOptions = require('./config/corsOptions');
// const connect = require('./db/conn')

// app.use(express.json());

// app.use(cors(corsOptions));

// app.use('/', express.static(path.join(__dirname, '/public')));

// app.use('/', require('./routes/root'));

// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'))
//     } else if (req.accepts('json')) {
//         res.json({message: '404 Not Found'})
//     } else {
//         res.type('txt').send('404 Not Found')
//     } 
// });

// app.listen(PORT, () => {
//     connect.connectDB();
//     console.log(`Server running on port ${PORT}`)
// });




// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.log(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });