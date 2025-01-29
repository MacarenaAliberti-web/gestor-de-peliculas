const { Router } = require("express");
const { getAllMovies, createMovie } = require("../controllers/moviesControllers");
const validateMovieData = require("../middlewares/validateMovieData");

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.post("/", validateMovieData, createMovie);

module.exports = moviesRouter;

