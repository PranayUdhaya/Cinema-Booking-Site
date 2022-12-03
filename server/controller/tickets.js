/**
 *  Defining the CRUD functions that will be called in routes/tickets.js
 */
// importing model
const Ticket = require("../models/tickets");

// export createTicket function
exports.createTicket = async (req, res) => {

    let newTicket = new Ticket({
        showingID: req.body.shwoingID,
        email: req.body.email,
        seat: req.body.seat,
        status: req.body.status
    });    

    try  {
        await newTicket.save();
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
    return res.json(newShowing);
};

// export deleteTicket function
exports.deleteTicket = async (req, res) => {

    try {
        let ticket = await Ticket.findByIdAndRemove({ _id: req.body.ticketID });
        return res.json(ticket);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export findTickets function
exports.findTickets = async (req, res) => {

    try {
        let orderHistory = await Ticket.find({email: req.body.email});
        return res.json(orderHistory);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};