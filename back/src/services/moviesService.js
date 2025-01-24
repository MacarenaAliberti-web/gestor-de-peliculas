//class Movie { 
//  constructor (title, poster, director) { 
//    if (!title || !poster || !director) { 
//      throw new Error( 'Las propiedades title, poster y director son obligatorias' )
//     } 
//     this.title = title 
//     this.poster = poster 
//     this.director = director 
//    } 
//  } 
  
const Movie = require('../models/Movie');

module.exports = {
    getAllMovies: async () => {
        return await Movie.find();
    },
  };