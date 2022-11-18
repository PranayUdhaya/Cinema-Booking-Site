/**
 *  Defining the promo schema for the database
 *  When each user is created all of these keys will be filled with some value
 *  Exports the schema as "Promo" so that it may be used in other files
 */

 const { ObjectId } = require("mongodb");
 const mongoose = require("mongoose");
  
  const promoSchema = mongoose.Schema({
    title: String,
    category: [String],
    picture: String,
    availability: String,
    sentEmail: false,
  });

module.exports = mongoose.model("Promo", promoSchema);