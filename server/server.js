require("dotenv").config({ path: "./config.env" });
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.ATLAS_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Successfully connected to MongoDB');
});

const app = express();

app.use(express.json());

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
});
