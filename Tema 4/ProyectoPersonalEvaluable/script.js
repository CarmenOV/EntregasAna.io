// Desplazamiento suave al formulario de contacto
function mostrarContacto() {
    const contactoSeccion = document.getElementById('contacto');
    if (contactoSeccion) {
        contactoSeccion.scrollIntoView({ behavior: 'smooth' });
    }
}
