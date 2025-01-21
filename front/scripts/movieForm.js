const genres = ["Accion", "Comedia", "Aventura", "Terror", "Drama", "Suspenso"];

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

const submitForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {title, year, director, duration, rate, poster} = Object.fromEntries(formData);

    if (!title) {
        alert("El campo TITLE es requerido");
    }

    if (!year) {
        alert("El campo AÑO es requerido");
    }

    if (!director) {
        alert("El campo DIRECTOR es requerido");
    }

    if(selectedGenre.length == 0){
        alert("Debes seleccionar al menos un Genero");
    }

    if (!duration) {
        alert("El campo DURACION es requerido");
    }

    if (!rate) {
        alert("El campo PUNTAJE es requerido");
    
    }

    if (!poster) {
        alert("El campo POSTER es requerido");
    }

};

movieForm.addEventListener("submit",submitForm);


const clearFormButton = document.getElementById("clearFormButton");

const clearForm = () => {
    movieForm.reset();
};

clearFormButton.addEventListener("click", clearForm);