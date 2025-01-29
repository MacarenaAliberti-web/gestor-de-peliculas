const addToHTML = require("./renderCards");
const axios = require("axios");

const getDataMovie = async () => {
    try {
        const res = await axios.get("http://localhost:3000/movies");
        addToHTML(res.data); 
    } catch (error) {
        console.error("Error al obtener las películas:", error.message);
    } 
};

getDataMovie();


