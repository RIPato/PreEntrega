async function cargarEncabezado() {
    try {
        const respuesta = await fetch('encabezado.html');
        if (!respuesta.ok) throw new Error("No se pudo cargar el archivo html");
        
        const html = await respuesta.text();
        
        // Insertamos el contenido justo al principio del body
        document.body.insertAdjacentHTML('afterbegin', html);
        
    } catch (error) {
        console.error("Error cargando el encabezado:", error);
    }
}

// Ejecutar la función cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", cargarEncabezado);