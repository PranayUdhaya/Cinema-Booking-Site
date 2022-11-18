/**
 *  Defining the CRUD functions that will be called in routes/promo.js 
 */
// importing model
const promo = require("../models/promo");
const Promo = require("../models/promo");
const { promoEmail } = require("./users");

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

exports.editPromo = async (req, res) => {
    let title = req.body.title;
    let updatedMovie = {
        title: req.body.title,
        category: req.body.category,
        picture: req.body.picture,
    }
    try {
        let movie = await Movie.findOneAndUpdate(title, updatedMovie);
        return res.json(movie);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

exports.sendPromo = async (req, res) => {
    let title = req.body.title;
    let updatedMovie = {
        sentEmail: true,
    }
    try {
        let movie = await Movie.findOneAndUpdate(title, updatedMovie);
        await promoEmail;
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};