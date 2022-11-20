/**
 *  Defining the CRUD functions that will be called in routes/promo.js 
 */
// importing model
const { findOne } = require("../models/promo");
const Promo = require("../models/promo");
const { promoEmail } = require("./users");
const User = require("../models/users");
const sendEmail = require("../utils/sendEmail");

// export addMovie function
exports.addPromo = async (req, res) => {
    let promo = await Promo.findOne({code: req.body.code});
    
    if (!promo) {
        let newPromo = new Promo({
            descriptor: req.body.descriptor,
            discount: req.body.discount,
            code: req.body.code,
            sentEmail: false,
        })
        try {
            await newPromo.save();
            return res.json(newPromo);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    } else {
        return res.json({ message: "Promotion already exists", status: 400 })
    }
};

exports.sendPromo = async (req, res) => {
    let promoId = req.body.id;
    let promotion = await Promo.findOne({_id: promoId});

    try {
        //finds users who want promotional emails and puts them in an array
        const promoUsers = [];
        const cursor = User.find({promo: true});
        const cursorArray = await cursor.exec()
        
        //pushes all the users emails into an array
        cursorArray.forEach((result) => { 
            promoUsers.push(result.email);
        });

        //sends each email in the array a promotional email
        if (promoUsers.length > 0) {
            promoUsers.forEach(async (result) => {
                try {
                    await sendEmail(result, "Promotional Email", `Check out our new promotion!\n${promotion.descriptor}\nUse code ${promotion.code}`);
                } catch (e) {
                    console.log(`Promotional email could not be sent to ${result}`);
                    console.log(e);
                }
            })
        }
        
        promotion.sentEmail = true;
        await promotion.save();
        return res.json({message: "sent"});
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

exports.findPromos = async (req, res) => {
    let currentPromos = await Promo.find({});
    if (!currentPromos) {
        return res.json({ message: "Internal Error", status: 404 });
    }

    return res.json(currentPromos);
}