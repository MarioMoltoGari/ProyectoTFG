// Función para desplegar y contraer el menú
function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    const buttonContainer = document.getElementById("menu-container");
    menu.classList.toggle("show");
    buttonContainer.classList.toggle("show");
}

// Función para mostrar el menú contextual
function showContextMenu(event) {
    event.preventDefault();
    const contextMenu = document.getElementById("context-menu");
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.display = "block";
}

// Función para ocultar el menú contextual
function hideContextMenu(event) {
    const contextMenu = document.getElementById("context-menu");
    if (event.target.closest('#context-menu') === null) {
        contextMenu.style.display = "none";
    }
}

// Agregar eventos a los enlaces de prueba
document.querySelectorAll('.test-link').forEach(link => {
    link.addEventListener('contextmenu', showContextMenu);
});

// Ocultar el menú contextual al hacer clic en cualquier lugar de la página
document.addEventListener('click', hideContextMenu);