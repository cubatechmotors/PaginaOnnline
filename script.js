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
