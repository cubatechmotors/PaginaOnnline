document.getElementById("btnCategorias").addEventListener("click", function() {
    let menu = document.getElementById("categoriasMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
