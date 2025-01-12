const { Router } = require("express");
const { getAllMovies } = require("../controllers/moviesControllers");


const moviesRouter = Router();

moviesRouter.get("/",getAllMovies);

module.exports = moviesRouter;