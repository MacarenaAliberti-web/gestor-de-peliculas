const movieToHtml = (movie) => { 
    const container = document.createElement("div");
    container.classList.add("card", "bg-transparent", "border-0", "text-center");
    container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

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
        // Crear un contenedor superpuesto
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";  // Cambiar a fixed para que cubra toda la pantalla
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "1000";

        const infoContainer = document.createElement("div");
        infoContainer.style.backgroundColor = "white";
        infoContainer.style.padding = "20px";
        infoContainer.style.borderRadius = "10px";
        infoContainer.style.width = "80%";
        infoContainer.style.maxWidth = "500px";
        infoContainer.style.textAlign = "center";
        infoContainer.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";

        const infoTitle = document.createElement("h2");
        infoTitle.innerText = movie.title;

        const infoText = document.createElement("p");
        infoText.innerText = movie.description || "Descripción no disponible.";
        infoText.style.color = "#333";

        const buttonsContainer = document.createElement("div");
        buttonsContainer.style.display = "flex";
        buttonsContainer.style.justifyContent = "space-between";
        buttonsContainer.style.marginTop = "20px";

        const closeButton = document.createElement("button");
        closeButton.innerText = "Cerrar";
        closeButton.classList.add("btn", "btn-danger");
        closeButton.addEventListener("click", () => {
            // Eliminar el contenedor superpuesto
            document.body.removeChild(overlay);
        });

        const trailerButton = document.createElement("button");
        trailerButton.innerText = "Ver tráiler";
        trailerButton.classList.add("btn", "btn-primary");
       

        trailerButton.addEventListener("click", () => {
            // Verifica si el tráiler está disponible
            if (movie.trailer) {
                const modal = document.createElement("div");
                modal.style.position = "fixed"; // Asegura que se quede en el mismo lugar
                modal.style.top = "0"; // Para que ocupe toda la pantalla
                modal.style.left = "0"; // Para que ocupe toda la pantalla
                modal.style.width = "100%"; // Todo el ancho de la pantalla
                modal.style.height = "100%"; // Toda la altura de la pantalla
                modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Fondo oscuro
                modal.style.display = "flex";
                modal.style.justifyContent = "center"; // Centrado horizontal
                modal.style.alignItems = "center"; // Centrado vertical
                modal.style.zIndex = "2000"; // Asegura que esté por encima de otros elementos
        
                const iframe = document.createElement("iframe");
                iframe.src = `https://www.youtube.com/embed/${movie.trailer.split("v=")[1]}?autoplay=1`;
                iframe.width = "960"; // Ancho más pequeño
                iframe.height = "540"; // Alto más pequeño
                iframe.style.border = "none"; // Sin borde
                iframe.style.maxWidth = "50%"; // Asegura que el iframe no sea demasiado grande
                iframe.style.maxHeight = "50%"; // Asegura que el iframe no se pase del tamaño de la pantalla
                iframe.style.objectFit = "cover"; // Para que ocupe toda el área disponible sin distorsionarse
                modal.appendChild(iframe);
        
                // Botón para cerrar el modal
                const closeModalBtn = document.createElement("button");
                closeModalBtn.innerText = "Cerrar vídeo";
                closeModalBtn.classList.add("btn", "btn-danger");
                closeModalBtn.style.position = "absolute";
                closeModalBtn.style.top = "20px";
                closeModalBtn.style.right = "20px";
                closeModalBtn.addEventListener("click", () => {
                    iframe.src = ""; // Detener el video
                    document.body.removeChild(modal); // Cerrar el modal
                });
                modal.appendChild(closeModalBtn);
        
                document.body.appendChild(modal); // Agregar el modal al body
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
    const modal = document.querySelector("div[style*='z-index: 2000']");
    if (modal && event.target === modal) {
        const iframe = modal.querySelector("iframe");
        iframe.src = ""; // Detener el video
        document.body.removeChild(modal); // Cerrar el modal
    }
});

module.exports = addToHTML;