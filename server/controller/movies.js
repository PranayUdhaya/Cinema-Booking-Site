/**
 *  Defining the CRUD functions that will be called in routes/movies.js 
 */
// importing model
const Movie = require("../models/movies");

// export addMovie function
exports.addMovie = async (req, res) => {
    let newMovie = new Movie({
        title: req.body.title,
        category: req.body.category,
        ageRating: req.body.ageRating,
        director: req.body.director,
        producer: req.body.producer,
        cast: req.body.cast,
        synopsis: req.body.synopsis
    })
    try {
        await newMovie.save();
        return res.json(newMovie);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};


// export editMovie function
exports.editMovie = async (req, res) => {
    let updateMovie = new Movie({
        title: req.body.title,
        category: req.body.category,
        ageRating: req.body.ageRating,
        director: req.body.director,
        producer: req.body.producer,
        cast: req.body.cast,
        synopsis: req.body.synopsis
    })
    try {
        await newMovie.save();
        return res.json(newMovie);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};
