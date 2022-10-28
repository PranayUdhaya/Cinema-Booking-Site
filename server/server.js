// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
// get MongoDB driver connection
const dbo = require('./db/conn');

const corsOptions = require('./config/corsOptions');
const PORT = process.env.PORT || 5000;
const app = express();


const users = require('./routes/users');

app.use(cors(corsOptions));
app.use(express.json());
app.use('/users', users);

// Global error handling
<<<<<<< Updated upstream
app.use(function (err, res, _req) {
=======
app.use(function (err, res, _req, next) {
>>>>>>> Stashed changes
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
