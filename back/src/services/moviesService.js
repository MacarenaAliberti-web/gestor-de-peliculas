/*class Movie {
  constructor (title, poster, director) {
    if (!title || !poster || !director) {
      throw new Error(
        'Las propiedades title, poster y director son obligatorias'
      )
    }
    this.title = title
    this.poster = poster
    this.director = director
  }
}
  const movieService  = {
  getMovies: async () => {
    try {
      const response = await fetch('https://students-api.up.railway.app/movies')
      const data = await response.json()
      const moviesList = data.map(
        movie => new Movie(movie.title, movie.poster, movie.director)
      )
      return moviesList
    } catch (error) {
      console.error(error)
      throw new Error('Error al obtener las películas')
    }
  }
}
*/  
const Movie = require('../models/Movie');

module.exports = {
    getAllMovies: async () => {
        return await Movie.find();
    },
  };