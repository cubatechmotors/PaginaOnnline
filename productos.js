fetch("productos_adicionales.json")
    .then(response => response.json())
    .then(data => {
        let productosLista = document.getElementById("productos-adicionales");
        productosLista.innerHTML = "";

        data.forEach(producto => {
            let productoHTML = `
                <div class="producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <p>${producto.precio}</p>
                </div>
            `;
            productosLista.innerHTML += productoHTML;
        });
    })
    .catch(error => console.error("Error al cargar productos:", error));
