const axios = require("axios");

const genres = ["Accion", "Animacion", "Ciencia ficcion", "Fantasia", "Comedia", "Aventura", "Terror", "Drama", "Suspenso", "Melodrama", "Catastrofe", "Documentales"];

const genreCheckBoxesContainer = document.getElementById("genreCheckBoxes"); 

let selectedGenre = [];

const handleCheckboxContainer = (event) => {
    if (event.target.checked) {
        selectedGenre.push(event.target.value);
    } else {
        selectedGenre = selectedGenre.filter((item) => item != event.target.value);
    }
    console.log(selectedGenre);
};

genres.forEach((genre) => {
    const genreContainer = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = genre;
    checkbox.id = `genre-${genre}`;

checkbox.onchange = handleCheckboxContainer;

    const label = document.createElement("label");
    label.innerText = genre;

    genreContainer.append(checkbox, label);
    genreCheckBoxesContainer.appendChild(genreContainer);
});

const movieForm = document.getElementById("movieForm");

const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {title, year, director, duration, rate, poster, description, trailer} = Object.fromEntries(formData);

    if (!title) {
        alert("El campo TITLE es requerido");
        return;
    }

    if (!year) {
        alert("El campo AÑO es requerido");
        return;
    }

    if (!director) {
        alert("El campo DIRECTOR es requerido");
        return;
    }

    if(selectedGenre.length == 0){
        alert("Debes seleccionar al menos un Genero");
        return;
    }

    if (!duration) {
        alert("El campo DURACION es requerido");
        return;
    }

    if (!rate) {
        alert("El campo PUNTAJE es requerido");
        return;
    
    }

    if (!poster) {
        alert("El campo POSTER es requerido");
        return;
    }
    if (!description) {
        alert("El campo DESCRIPCION es requerido");
        return;
    }
    if (!trailer) {
        alert("El campo TRAILER es requerido");
        return;
    }
console.log({title, year, director, duration, rate, poster, description, trailer, genre:selectedGenre});
try {
    const res = await axios.post("http://localhost:3000/movies", {
     title, 
     year, 
     director, 
     duration, 
     rate, 
     poster, 
     description, 
     trailer, 
     genre:selectedGenre,
    });
    alert(res.data.message);
} catch (error) {
    console.error(error.message);
    alert("Ocurrio un error al crear la pelicula, intente de nuevo mas tarde");
}
};

movieForm.addEventListener("submit",submitForm);


const clearFormButton = document.getElementById("clearFormButton");

const clearForm = () => {
    movieForm.reset();
};

clearFormButton.addEventListener("click", clearForm);