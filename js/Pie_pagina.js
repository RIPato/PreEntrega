// pie_pagina.js
async function cargarFooter() {
    try {
        const respuesta = await fetch('pie_pagina.html');
        if (!respuesta.ok) throw new Error("No se pudo cargar el pie de página");
        
        const html = await respuesta.text();
        
        // Insertamos el contenido al final del body
        document.body.insertAdjacentHTML('beforeend', html);
    } catch (error) {
        console.error("Error cargando el footer:", error);
    }
}

// Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", cargarFooter);