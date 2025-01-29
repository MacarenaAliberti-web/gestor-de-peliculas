const Movie = require('../models/Movie');

module.exports = {
    getAllMovies: async () => {
        try {
            return await Movie.find();
        } catch (error) {
            throw new Error(`Error al obtener las películas: ${error.message}`);
        }
    },
    createMovie: async (movie) => {  
        try {
            return await Movie.create(movie);
        } catch (error) {
            throw new Error(`Error al crear la película: ${error.message}`);
        }
    },
};

