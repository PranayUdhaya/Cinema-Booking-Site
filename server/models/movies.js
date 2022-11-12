const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const MovieSchema = mongoose.Schema({
    title: String,
    category: String,
    ageRating: String,
    director: String,
    producers: [String],
    cast: [String],
    reviewScore: Number,
    synopsis: String
});

module.exports = mongoose.model("Movie", MovieSchema);

/*// connecting to mongoDB
const { MongoClient } = require('mongodb');

// main function to connect to URI and run tests of the functions
async function main() {
    
    const uri = "mongodb+srv://Admin:Admin@cluster0.1dx8tdy.mongodb.net/?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
        await insertMovie(client, {
            title: "Black Adam",
            category: ["action", "superhero"],
            ageRating: "PG-13",
            director: "Jaume Collet-Serra",
            producers: ["Dwayne Johnson", "Dany Garcia", "Hiram Garcia", "Beau Flynn"],
            cast: ["Dwayne Johnson", "Aldis Hodge", "Noah Centineo", "Sarah Shahi", "Marwan Kenzari", "Quintessa Swindell"],
            reviewScore: 39,
            synopsis: "Nearly 5,000 years after he was bestowed with the almighty powers of the ancient gods--and imprisoned just as quickly--Black Adam (Dwayne Johnson) is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
        });

    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }

}

main().catch(console.error);

// list databases (test function)
async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases();

    console.log("Databases");
    databaseList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

// function to insert a new movie into the collection
async function insertMovie(client, newMovie) {
    const result = await client.db("CinemaDB").collection("Movies").insertOne(newMovie);

    console.log(`New movie created with the id: ${result.insertedId}`);
    
}

// function to search for a movie by name
async function findMovie(client, movieName) {
    const result = await client.db("CinemaDB").collection("Movies").findOne({title: movieName});

    if (result) {
        console.log(`Found a movie with the name '${movieName}'`);
        console.log(result)
    } else {
        console.log(`No movie found with the name '${movieName}'`);
    }
}

// function to delete a movie
async function deleteMovie(client, movieName) {
    const result = await client.db("CinemaDB").collection("Movies").deleteOne({title: movieName});

    if (result) {
        console.log(`Deleted a movie with the name '${movieName}'`);
        console.log(result)
    } else {
        console.log(`No movie found with the name '${movieName}'`);
    }
} */