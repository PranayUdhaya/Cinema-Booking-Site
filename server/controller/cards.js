/**
 *  Defining the CRUD functions that will be called in routes/tickets.js
 */
// importing model
const Card = require("../models/cards");

// export createCard function
exports.createCard = async (req, res) => {

    let newCard = new Card({
        userID: req.body.userID,
        cardNumber: req.body.cardNumber,
        expDate: req.body.expDate,
        securityCode: req.body.securityCode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    });    

    try  {
        await newCard.save();
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
    return res.json(newCard);
};

// export deleteCard function
exports.deleteCard = async (req, res) => {

    try {
        let card = await Card.findByIdAndRemove({ _id: req.body.cardID });
        return res.json(card);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export findCards function
exports.findCards = async (req, res) => {

    try {
        let cards = await Ticket.find({userID: req.body.userID});
        return res.json(cards);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};