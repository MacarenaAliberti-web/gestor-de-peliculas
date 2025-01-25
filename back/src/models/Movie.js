const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String, 
    uniqueTitle: String,
    year: Number,
    director: String,
    duration: String,
    genre: [String],
    rate: Number,
    poster: String,
    description: String,
    trailer: String  
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;