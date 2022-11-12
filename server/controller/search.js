/**
 *  Defining the CRUD functions that will be called in routes/users.js 
 */
// importing model
const Movies = require("../models/movies");

exports.search = async (req, res) => {
    
    try {
        movies = await search(req.body.title, req.body.category, req.body.ageRating, req.body.director, req.body.producer, req.body.cast, req.body.reviewScore)
        return res.json(movies);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
    
}

async function search(titleSearch, genreSearch, ageRatingSearch, directorSearch, producerSearch, castSearch, reviewScoreMinimum) {
    const searchList = await client.db("CinemaDB").collection("Movies");
    if (titleSearch != "") {
        searchList = getTitle(searchList, titleSearch);
    }
    if (genreSearch != "") {
        searchList = getGenre(searchList, genreSearch);
    }
    if (ageRatingSearch != "") {
        searchList = getAgeRating(searchList, ageRatingSearch);
    }
    if (directorSearch != "") {
        searchList = getDirector(searchList, directorSearch);
    }
    if (producerSearch != "") {
        searchList = getProducer(searchList, producerSearch);
    }
    if (castSearch != "") {
        searchList = getCast(searchList, castSearch);
    }
    if (reviewScoreMinimum != "") {
        searchList = getMinScore(searchList, reviewScoreMinimum);
    }
}

async function getTitle(list, titleSearch) {
    const result = list.find({title: {$regex: titleSearch}});
    
    return result;
}

async function getGenre(list, genre) {
    const result = list.find({category: genre});
    
    return result;
}

async function getAgeRating(list, searchedAgeRating) {
    const result = list.find({ageRating: searchedAgeRating});
    
    return result;
}

async function getDirector(list, searchedDirector) {
    const result = list.find({director: searchedDirector});
    
    return result;
}

async function getProducer(list, searchedProducer) {
    const result = list.find({producer: searchedProducer});
    
    return result;
}

async function getCast(list, searchedCast) {
    const result = list.find({cast: searchedCast});
    
    return result;
}

async function getMinScore(list, minScore) {
    const result = list.find({reviewScore: {$gte: minScore}});
    
    return result;
}

