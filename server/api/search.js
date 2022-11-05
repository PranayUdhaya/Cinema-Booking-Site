const { MongoClient } = require('mongodb');


async function main() {
    
    const uri = "mongodb+srv://Admin:Admin@cluster0.1dx8tdy.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);



    } catch (e) {
        console.error(e);
    } finally {
        client.close();
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

