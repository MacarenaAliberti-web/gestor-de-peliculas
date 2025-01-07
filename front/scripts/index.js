const addToHTML = require("./renderCards");

const getDataMovie = () => {
    $.get("https://students-api.up.railway.app/movies", (data, status) => {
    addToHTML(data);

    });
};

getDataMovie();

