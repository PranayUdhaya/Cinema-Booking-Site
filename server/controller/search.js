/**
 *  Defining the search function
 */
// importing model
const Movies = require("../models/movies");

// defining search function which will be called in routes/search
exports.search = async (req, res) => {
    
    try {
        console.log(req.body.title, req.body.category, req.body.availability)
        movies = await search(req.body.title, req.body.category, req.body.availability)
        return res.json(movies);
    } catch (e) {
        console.log(e);
        return res.json(e);
    }

};

// building the query based off of user inputs in each search bar
async function search(titleSearch, genreSearch, availabilitySearch) {
    console.log(titleSearch);
    console.log(genreSearch);
    console.log(availabilitySearch);
    let searchList;
    if (availabilitySearch == "all") {
        searchList = await Movies.find({title: {$regex: titleSearch}, category: {$regex: genreSearch}});
    } else {
        searchList = await Movies.find({title: {$regex: titleSearch}, category: {$regex: genreSearch}, availability: {$regex: availabilitySearch, $options: "i"}});
    }
    console.log(searchList);
    return searchList;
    /*if (titleSearch != "") {
        searchList = getTitle(searchList, titleSearch);
    }
    if (genreSearch != "") {
        searchList = getGenre(searchList, genreSearch);
    }
    if (availabilitySearch != "All") {
        searchList = getAvailability(searchList, availabilitySearch);
    }*/
}

async function getTitle(list, titleSearch) {
    console.log("This is list in getTitle:\n" + list);
    let result = await list.find({});
    
    return result;
}

async function getGenre(list, genre) {
    const result = list.find({category: genre});
    
    return result;
}

async function getAvailability(list, availabilitySearch) {
    const result = list.find({availability: availabilitySearch});
    
    return result;
}

