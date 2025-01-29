const axios = require("axios");

const genres = [
    "Accion", "Animacion", "Ciencia ficcion", "Fantasia", "Comedia", "Aventura",
    "Terror", "Drama", "Suspenso", "Melodrama", "Catastrofe", "Documentales"
];

const genreCheckBoxesContainer = document.getElementById("genreCheckBoxes");

let selectedGenre = [];

const handleCheckboxContainer = (event) => {
    if (event.target.checked) {
        selectedGenre.push(event.target.value);
    } else {
        selectedGenre = selectedGenre.filter((item) => item != event.target.value);
    }
};
genres.forEach((genre) => {
    const genreContainer = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = genre;
    checkbox.id = `genre-${genre}`; 
    checkbox.onchange = handleCheckboxContainer;

    const label = document.createElement("label");
    label.setAttribute("for", `genre-${genre}`);  
    label.innerText = genre;

    genreContainer.append(checkbox, label);
    genreCheckBoxesContainer.appendChild(genreContainer);
});

const movieForm = document.getElementById("movieForm");

const showError = (message) => {
    const errorMessageContainer = document.getElementById("error-message");
    errorMessageContainer.textContent = message; 
    errorMessageContainer.style.display = "block"; 
    errorMessageContainer.classList.add("show");

    window.scrollTo({
        top: errorMessageContainer.offsetTop - 50, 
        behavior: "smooth"
    });
};
const hideError = () => {
    const errorMessageContainer = document.getElementById("error-message");
    errorMessageContainer.style.display = "none"; 
};
const submitForm = async (event) => {
    event.preventDefault();

    hideError();

    const formData = new FormData(event.target);
    const { title, year, director, duration, rate, poster, description, trailer } = Object.fromEntries(formData);

    if (!title) {
        showError("El campo TITLE es requerido");
        return;
    }
    if (!year) {
        showError("El campo AÑO es requerido");
        return;
    }
    if (!director) {
        showError("El campo DIRECTOR es requerido");
        return;
    }
    if (selectedGenre.length == 0) {
        showError("Debes seleccionar al menos un Genero");
        return;
    }
    if (!duration) {
        showError("El campo DURACION es requerido");
        return;
    }
    if (!rate) {
        showError("El campo PUNTAJE es requerido");
        return;
    }
    if (!poster) {
        showError("El campo POSTER es requerido");
        return;
    }
    if (!description) {
        showError("El campo DESCRIPCION es requerido");
        return;
    }
    if (!trailer) {
        showError("El campo TRAILER es requerido");
        return;
    }
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
            genre: selectedGenre,
        });
        alert(res.data.message);
        
        movieForm.reset();
        selectedGenre = []; 

        document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => checkbox.checked = false);
    } catch (error) {
        console.error("Error:", error.response ? error.response : error.message);
        if (error.response && error.response.data && error.response.data.message) {
            showError(error.response.data.message); 
        } else {
            showError("Ocurrió un error al crear la película, intente de nuevo más tarde");
        }
    }
};
document.querySelectorAll("#movieForm input").forEach(input => {
    input.addEventListener("input", hideError);
});

movieForm.addEventListener("submit", submitForm);

const clearFormButton = document.getElementById("clearFormButton");

const clearForm = () => {
    movieForm.reset();
    selectedGenre = [];
    document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => checkbox.checked = false);
    
    hideError();
};

clearFormButton.addEventListener("click", clearForm);
