/**
 *  Defining the CRUD functions that will be called in routes/movies.js 
 */
// importing model
const Movie = require("../models/movies");

// export addMovie function
exports.addMovie = async (req, res) => {
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
            availability: req.body.availability,
            showings: req.body.showings,
            runtime: req.body.runtime
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
    };

    try {
        let movie = await Movie.findOneAndUpdate({title: title}, updatedMovie);
        return res.json(movie);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};

// export deleteMovie function
exports.deleteMovie = async (req, res) => {
    let title = req.body.title;

    try {
        let movie = await Movie.findOneAndRemove({title: title});
        return res.json({ message: "Movie deleted" });
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
};


// find currently showing movies
exports.findCurrentMovies = async (req, res) => {
    let filter = "Currently Showing";
    let currentMovies = await Movie.find( {availability: filter} );
    if (!currentMovies) {
        return res.json({ message: "Internal Error", status: 404 });
    }
    return res.json(currentMovies);
};

exports.find30CurrentMovies = async (req, res) => {
    //console.log("In find30Current")
    let filter = "Currently Showing";
    let currentMovies = await Movie.find( {availability: filter} ).limit(30);
    if (!currentMovies) {
        return res.json({ message: "Internal Error", status: 404 });
    }
    return res.json(currentMovies);
};

// find movies that are coming soon
exports.findFutureMovies = async (req, res) => {
    let filter = "Coming Soon";
    let futureMovies = await Movie.find( {availability: filter} );
    if (!futureMovies) {
        return res.json({ message: "Internal Error", status: 404 });
    }
    return res.json(futureMovies);
};

// find 30 movies that are coming soon
exports.find30FutureMovies = async (req, res) => {
    let filter = "Coming Soon";
    let futureMovies = await Movie.find( {availability: filter} ).limit(30);
    if (!futureMovies) {
        return res.json({ message: "Internal Error", status: 404 });
    }
    return res.json(futureMovies);
};

// find one movie by id
exports.findById = async (req, res) => {
    let id = req.body.movieId;
    let movie = await Movie.find({_id: id});
    if (!movie) {
        return res.json({ message: "Internal Error", status: 404 });
    }
    return res.json(movie);
};