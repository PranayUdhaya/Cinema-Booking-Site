/**
 *  Defining the CRUD functions that will be called in routes/cards.js
 */
// importing model
const Card = require("../models/cards");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// utilizing bcrypt to hash a passed in parameter val
const hashVal = async function(val) {
    const hashedval = await bcrypt.hash(val, 10)
    return hashedval;
}


// export createCard function
exports.createCard = async (req, res) => {
    
    let numDocs;
    var query = Card.find({ userID: req.body.userId });
    query.count(function (err, count) {
        if (err) {
            return res.json.status(200);
        }
        else {
            numDocs = count;
        }
    });

    if (numDocs >= 3) {
        return res.json({message: "You already have three cards!"});
    }

    const hashedCard = await hashVal(req.body.cardNumber);
    const hashedcvc = await hashVal(req.body.securityCode);
    console.log("card: " + hashedCard);
    console.log("cvc: " + hashedcvc);
    let lastFour = req.body.cardNumber.substring(15);

    // generate 16 bytes of random data
    const initVector = crypto.randomBytes(16);

    // secret key generate 32 bytes of random data
    const securityKey = crypto.randomBytes(32);

    let newCard = new Card({
        userID: req.body.userId,
        cardNumber: hashedCard,
        cardLastFour: lastFour,
        expDate: req.body.expDate,
        securityCode: hashedcvc,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        type: req.body.type,
        vect: initVector,
        key: securityKey
    });

    try  {
        await newCard.save();
        return res.json(newCard);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
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
        for (let doc = await cards.next(); doc != null; doc  = await cards.next()) {
            console.log(doc);
            var decryptedCard = doc.decryptCard();
            var decryptedAddress = doc.decryptAddress();
            let obj = {
                userID: doc.userID,
                cardLastFour: decryptedCard,
                expDate: doc.expDate,
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