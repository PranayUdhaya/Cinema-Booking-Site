/**
 *  Defining the cards schema for the database
 *  Exports the schema as "Card" so that it may be used in other files
 */

const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
 
const CardSchema = mongoose.Schema({
    userID: ObjectId,
    cardNumber: String,
    expDate: String,
    securityCode: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    type: String
});
 
module.exports = mongoose.model("Card", CardSchema);