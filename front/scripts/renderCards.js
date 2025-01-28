const movieToHtml = (movie) => { 
    const container = document.createElement("div");
    container.classList.add("card", "bg-transparent", "border-0", "text-center");

    const image = document.createElement("img");
    image.src = movie.poster;
    image.alt = movie.title;
    image.classList.add("card-img-top");

    const title = document.createElement("h3");
    title.innerText = movie.title;
    title.classList.add("card-title", "text-light");

    const button = document.createElement("button");
    button.innerText = "Más información";
    button.classList.add("btn", "btn-outline-primary", "btn-sm");

    // Funcionalidad del botón para mostrar contenedor superpuesto
    button.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info-container");

        const infoTitle = document.createElement("h2");
        infoTitle.innerText = movie.title;

        const infoText = document.createElement("p");
        infoText.innerText = movie.description || "Descripción no disponible.";
        infoText.classList.add("info-text");

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("buttons-container");

        const closeButton = document.createElement("button");
        closeButton.innerText = "Cerrar";
        closeButton.classList.add("btn", "btn-danger");
        closeButton.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });

        const trailerButton = document.createElement("button");
        trailerButton.innerText = "Ver tráiler";
        trailerButton.classList.add("btn", "btn-primary");

        trailerButton.addEventListener("click", () => {
            if (movie.trailer) {
                const modal = document.createElement("div");
                modal.classList.add("modal-overlay");

                const iframe = document.createElement("iframe");
                iframe.src = `https://www.youtube.com/embed/${movie.trailer.split("v=")[1]}?autoplay=1`;
                iframe.classList.add("iframe-modal");
                modal.appendChild(iframe);

                const closeModalBtn = document.createElement("button");
                closeModalBtn.innerText = "Cerrar vídeo";
                closeModalBtn.classList.add("close-modal-btn");
                closeModalBtn.classList.add("btn", "btn-danger");
                closeModalBtn.addEventListener("click", () => {
                    iframe.src = "";
                    document.body.removeChild(modal);
                });
                modal.appendChild(closeModalBtn);

                document.body.appendChild(modal);
            } else {
                alert("Tráiler no disponible.");
            }
        });

        buttonsContainer.append(closeButton, trailerButton);
        infoContainer.append(infoTitle, infoText, buttonsContainer);
        overlay.appendChild(infoContainer);
        document.body.appendChild(overlay);
    });

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.append(title, button);

    container.append(image, cardBody);

    const colContainer = document.createElement("div");
    colContainer.classList.add("col");
    colContainer.appendChild(container);

    return colContainer;
};

// Función para agregar películas al HTML
const addToHTML = (data) => {
    const movieCardsContainer = document.getElementById("movieCardsContainer");
    const movieElements = data.map(movieToHtml);
    movieElements.forEach((movieElem) => movieCardsContainer.appendChild(movieElem));
};

// Evento para cerrar el modal cuando el usuario haga clic fuera del modal
window.addEventListener("click", (event) => {
    const modal = document.querySelector(".modal-overlay");
    if (modal && event.target === modal) {
        const iframe = modal.querySelector("iframe");
        iframe.src = "";
        document.body.removeChild(modal);
    }
});

module.exports = addToHTML;
