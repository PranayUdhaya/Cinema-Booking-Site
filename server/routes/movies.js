/**
 *  Writing all the different api requests that can be used to modify the movies collection
 *  Using the schema that was defined in the models/movies file
 */

 const express = require("express");
 const movieController = require("../controller/movies");
 const router = express.Router();
 
 // This request will add a new movie to the movies database
 router.post("/movies/add", movieController.addMovie);
 router.post("/movies/edit", movieController.editMovie);
 
 module.exports = router;