const { Router } = require("express");
const { getAllMovies, createMovie } = require("../controllers/moviesControllers");
const validateMovie = require("../middlewares/validateMovie");

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.post("/", validateMovie, createMovie);

module.exports = moviesRouter;

