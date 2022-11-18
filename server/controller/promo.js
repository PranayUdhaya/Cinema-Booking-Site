/**
 *  Defining the CRUD functions that will be called in routes/promo.js 
 */
// importing model
const promo = require("../models/promo");
const Promo = require("../models/promo");

// export addMovie function
exports.addPromo = async (req, res) => {
    let title = req.body.title;
    let promo = await Promo.findOne({ title });
    if (!promo) {
        let newPromo = new Promo({
            title: req.body.title,
            category: req.body.category,
            picture: req.body.picture,
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

