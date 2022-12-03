/**
 *  Defining the tickets schema for the database
 *  Exports the schema as "Ticket" so that it may be used in other files
 */

const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({
    showingID: ObjectId,
    email: String,
    seat: Number,
    status: String
});

module.exports = mongoose.model("Ticket", TicketSchema);