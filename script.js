// Función para desplegar y contraer el menú
function toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    const dropdownMenu = document.getElementById('dropdown-menu');
    menuContainer.classList.toggle('show');
    dropdownMenu.classList.toggle('show');
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

function openModal() {
    document.getElementById('login-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Agregar evento al botón de iniciar sesión para abrir el modal
document.querySelector('.login-button').addEventListener('click', openModal);

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById('login-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}