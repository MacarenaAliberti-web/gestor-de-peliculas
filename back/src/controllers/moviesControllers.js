const { getAllMovies } = require("../services/moviesService");

module.exports = {
    getAllMovies: (_req, res) => {
        try { 
          const movies = getAllMovies();
          res.status(200).json(movies);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Error en el servidor",
            });
        }
    },
};