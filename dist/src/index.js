// Obtener el modal
const modal = document.getElementById("modal");

// Obtener el botón que abre el modal
const openModalBtn = document.getElementById("openModalBtn");

// Obtener el botón que cierra el modal
const closeModalBtn = document.getElementById("closeModalBtn");

// Cuando el usuario haga clic en el botón "VER INFORMACIÓN", abrir el modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en el botón de cerrar (x), cerrar el modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}