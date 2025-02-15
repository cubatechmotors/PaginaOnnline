document.addEventListener("DOMContentLoaded", function () {
    const btnCategorias = document.getElementById("btnCategorias");
    const btnOfertas = document.getElementById("btnOfertas");

    // Alternar flechas en PC para indicar despliegue
    btnCategorias.addEventListener("click", function () {
        this.innerHTML = this.innerHTML.includes("▶") ? "Categorías ◀" : "Categorías ▶";
    });

    btnOfertas.addEventListener("click", function () {
        this.innerHTML = this.innerHTML.includes("▶") ? "Ofertas ◀" : "Ofertas ▶";
    });
});
// Cargar productos desde JSON
fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        let productosContainer = document.getElementById("productos-container");
        productosContainer.innerHTML = "";

        data.forEach(producto => {
            let productoHTML = `
                <div class="producto" onclick="mostrarDetalles('${producto.imagen}', '${producto.nombre}', '${producto.descripcion}', '${producto.precio}')">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="precio">${producto.precio}</p>
                    <button class="btn-comprar">Consultar</button>
                </div>
            `;
            productosContainer.innerHTML += productoHTML;
        });
    })
    .catch(error => console.error("Error al cargar productos:", error));

// Función para mostrar detalles del producto en un modal
function mostrarDetalles(imagen, nombre, descripcion, precio) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-img").src = imagen;
    document.getElementById("modal-title").innerText = nombre;
    document.getElementById("modal-desc").innerText = descripcion;
    document.getElementById("modal-price").innerText = precio;
    document.getElementById("modal-whatsapp").href = `https://wa.me/+5359449321?text=Hola, quiero más información sobre ${nombre}`;
    
    modal.style.display = "flex";
}

// Cerrar modal
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

window.onclick = function (event) {
    if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
};

// Slider de imágenes
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000); // Cambia cada 3 segundos
