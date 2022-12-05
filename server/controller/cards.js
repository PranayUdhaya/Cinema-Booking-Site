/**
 *  Defining the CRUD functions that will be called in routes/cards.js
 */
// importing model
const Card = require("../models/cards");

// export createCard function
exports.createCard = async (req, res) => {

    let lastFour
    //Parse req.body.cardNumber to get last four digits. Assign to lastFour

    let newCard = new Card({
        userID: req.body.userId,
        cardNumber: req.body.cardNumber,
        cardLastFour: lastFour,
        expDate: req.body.expDate,
        securityCode: req.body.securityCode,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        type: req.body.type
    });    

    try  {
        await newCard.save();
    } catch (e) {
        console.log("here")
        console.log(e);
        return res.json(e);
    }
    return res.json(newCard);
};

// export deleteCard function
exports.deleteCard = async (req, res) => {

    try {
        let card = await Card.findByIdAndRemove({ _id: req.body.cardId });
        return res.json(card);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export findCards function
exports.findCards = async (req, res) => {

    try {
        const cards = Card.find({ userID: req.body.userId }).cursor();
        let arr = [];
        for (let doc = await cursor.next(); doc != null; doc  = await cursor.next()) {
            var decryptedCard = doc.decryptCard();
            var decryptedAddress = doc.decryptedAddress();
            let obj = {
                userID: doc.userID,
                cardNumber: doc.cardNumber,
                cardLastFour: decryptedCard,
                expDate: doc.expDate,
                securityCode: doc.securityCode,
                address: decryptedAddress,
                type: doc.type
            }
            arr.push(obj);
        }
        
        return res.json(arr);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};