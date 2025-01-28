const { getAllMovies, createMovie } = require("../services/moviesService");

module.exports = {
    getAllMovies: async (_req, res) => {
        try {
            const movies = await getAllMovies();
            res.status(200).json(movies); 
        } catch (error) {
            console.error("Error al obtener películas:", error.message);
            res.status(500).json({
                message: "Error en el servidor al obtener las películas.",
            });
        }
    },
    createMovie: async (req, res) => { 
        try {
            const { title, year, director, duration, genre, rate, poster, description, trailer } = req.body;
           await createMovie({ title, year, director, duration, genre, rate, poster, description, trailer });
            res.status(201).json({ message: "Película creada exitosamente"});
        } catch (error) {
            console.error("Error al crear película:", error.message);
            res.status(500).json({
                message: "Ocurrió un error al crear la película.",
            });
        }
    },
};
