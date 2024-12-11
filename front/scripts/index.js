const movieToHtml = (movie) => {
    const container = document.createElement("div"); //crear const para q la funcion transforme las movies en html 
    const image = document.createElement("img");
    const title = document.createElement("h3");
    const button = document.createElement("button");
    
    container.classList.add("movie-card");
    image.src = movie.poster;
    image.alt = movie.title;
    title.innerText = movie.title;
    button.innerText = "Mas informacion";

    container.append(image, title, button);

    return container;
};

const addToHTML = (data) => {
    const movieCardsContainer = document.getElementById("movieCardsContainer"); //Pedirlo mediante el DOM

    const movieElements = data.map(movieToHtml);

    movieElements.forEach((movieElem) => movieCardsContainer.appendChild(movieElem)); 
        
};


const getDataMovie = () => {
    $.get("https://students-api.up.railway.app/movies", (data, status) => {
    addToHTML(data);

    });
};

getDataMovie();

