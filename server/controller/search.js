/**
 *  Defining the CRUD functions that will be called in routes/movies.js 
 */
// importing model
const Movies = require("../models/movies");

exports.search = async (req, res) => {
    
    try {
        movies = await search(req.body.title, req.body.category, req.body.availibility)
        return res.json(movies);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }
    
}

async function search(titleSearch, genreSearch, availibilitySearch) {
    const searchList = await client.db("CinemaDB").collection("Movies");
    if (titleSearch != "") {
        searchList = getTitle(searchList, titleSearch);
    }
    if (genreSearch != "") {
        searchList = getGenre(searchList, genreSearch);
    }
    if (availibilitySearch != "All Movies") {
        searchList = getAvailibility(searchList, availibilitySearch);
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

async function getAvailibility(list, availibilitySearch) {
    const result = list.find({availibility: availibilitySearch});
    
    return result;
}

