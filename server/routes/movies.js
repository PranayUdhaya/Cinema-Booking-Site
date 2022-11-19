/**
 *  Writing all the different api requests that can be used to modify the movies collection
 *  Using the controller and defined methods in controllers/movies
 */

 const express = require("express");
 const movieController = require("../controller/movies");
 const router = express.Router();
 
 // This request will add a new movie to the movies
 router.post("/movies/add", movieController.addMovie);

 // This request will edit a movie in the movies collection
 router.post("/movies/edit", movieController.editMovie);

 // This request will find the movies that are currently showing
 router.post("/movies/edit", movieController.findCurrentMovies);

 // This request will find the movies that are coming soon
 router.post("/movies/edit", movieController.findFutureMovies);
 
 module.exports = router;