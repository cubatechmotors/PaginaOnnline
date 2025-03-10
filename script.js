fetch("productos_destacados.json")
    .then(response => response.json())
    .then(data => {
        let productosContainer = document.getElementById("productos-container");
        productosContainer.innerHTML = "";

        data.forEach(producto => {
            let productoHTML = `
                <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <p>${producto.precio}</p>
                </div>
            `;
            productosContainer.innerHTML += productoHTML;
        });
    })
    .catch(error => console.error("Error al cargar productos:", error));
