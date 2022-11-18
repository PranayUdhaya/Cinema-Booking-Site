/**
 *  Defining the CRUD functions that will be called in routes/movies.js 
 */
// importing model
const movies = require("../models/movies");
const Movie = require("../models/movies");

// export addMovie function
exports.addMovie = async (req, res) => {
    console.log("In addMovie function, within controller/movies.js")
    let title = req.body.title;
    let movie = await Movie.findOne({ title });
    if (!movie) {
        let newMovie = new Movie({
            title: req.body.title,
            category: req.body.category,
            ageRating: req.body.ageRating,
            director: req.body.director,
            producer: req.body.producer,
            cast: req.body.cast,
            synopsis: req.body.synopsis,
            picture: req.body.picture,
            trailer: req.body.trailer,
        })
        try {
            await newMovie.save();
            return res.json(newMovie);
        } catch (e) {
            console.log(e);
            return res.json(e);
        }
    } else {
        return res.json({ message: "Movie already exists", status: 400 })
    }

};


// export editMovie function
exports.editMovie = async (req, res) => {
    let title = req.body.title;
    let updatedMovie = {
        title: req.body.title,
        category: req.body.category,
        ageRating: req.body.ageRating,
        director: req.body.director,
        producer: req.body.producer,
        cast: req.body.cast,
        synopsis: req.body.synopsis
    }
    try {
        let movie = await Movie.findOneAndUpdate(title, updatedMovie);
        return res.json(movie);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// find currently showing movies
exports.findCurrentMovies = async (req, res) => {
    let filter = "now playing";
    let currentMovies = await movies.find( {availability: filter} );
    if (!currentMovies) {
        return res.json({ message: "Internal Error", status: 404 });
    }
    return res.json(currentMovies);
}

// find movies that are coming soon
exports.findFutureMovies = async (req, res) => {
    let filter = "coming soon";
    let currentMovies = await movies.find( {availability: filter} );
    if (!currentMovies) {
        return res.json({ message: "Internal Error", status: 404 });
    }
    return res.json(currentMovies);
}

