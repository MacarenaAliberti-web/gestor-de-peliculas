const movieToHtml = (movie) => {
    const container = document.createElement("div"); 
    container.classList.add("card", "bg-transparent", "border-0", "text-center");
   
    const image = document.createElement("img");
    image.src = movie.poster;
    image.alt = movie.title;
    image.classList.add("card-img-top");

    const title = document.createElement("h3");
    title.innerText = movie.title;
    title.classList.add("card-title", "text-light")

    const button = document.createElement("button");
    button.innerText = "Mas informacion";
    button.classList.add("btn", "btn-outline-primary", "btn-sm");
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardBody.append(title, button);
    container.append(image, cardBody);

    const colContainer = document.createElement("div");
    colContainer.classList.add("col");

    colContainer.appendChild(container);

    return colContainer;
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

