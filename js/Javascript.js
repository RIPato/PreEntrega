/**
 * CONFIGURACIÓN GLOBAL DEL TÍTULO
 * Esta función establece el título que aparecerá en la pestaña del navegador.
 */
function configurarTitulo() {
    const tituloGlobal = "Proyecto de Impresión 3D - RS 3D";
    document.title = tituloGlobal;
}

/**
 * CARGA DEL ENCABEZADO (Modo Local / Sin Fetch)
 * Inyecta el contenido de la variable 'encabezadoHTML' definida en encabezado.js
 */
function cargarEncabezado() {
    console.log("Iniciando carga de encabezado...");
    try {
        // Verificamos si la variable existe (viene del archivo encabezado.js)
        if (typeof encabezadoHTML !== 'undefined') {
            document.body.insertAdjacentHTML('afterbegin', encabezadoHTML);
            console.log("Encabezado insertado correctamente (Modo Local)");
        } else {
            throw new Error("La variable 'encabezadoHTML' no está definida. Revisa encabezado.js");
        }
    } catch (error) {
        console.error("Error en Encabezado:", error);
    }
}

/**
 * CARGA DEL FOOTER (Modo Local / Sin Fetch)
 * Inyecta el contenido de la variable 'piePaginaHTML' definida en pie_pagina.js
 */
function cargarFooter() {
    console.log("Iniciando carga de footer...");
    try {
        // Verificamos si la variable existe (viene del archivo pie_pagina.js)
        if (typeof piePaginaHTML !== 'undefined') {
            document.body.insertAdjacentHTML('beforeend', piePaginaHTML);
            console.log("Footer insertado correctamente (Modo Local)");
        } else {
            throw new Error("La variable 'piePaginaHTML' no está definida. Revisa pie_pagina.js");
        }
    } catch (error) {
        console.error("Error en Footer:", error);
    }
}

/**
 * CARGA DEL FORMULARIO DE CONTACTO (Modo Asíncrono / Fetch)
 * Nota: Esta función seguirá requiriendo un servidor (o GitHub) para funcionar,
 * a menos que también conviertas el formulario a un archivo .js
 */
async function cargarContacto() {
    console.log("Intentando cargar el formulario...");
    try {
        // Intentamos buscar el archivo. Si es doble clic (file://), esto fallará.
        const respuesta = await fetch('./form/form_contacto_001.html'); 
        
        if (!respuesta.ok) throw new Error("No se pudo encontrar form_contacto_001.html");
        
        const html = await respuesta.text();
        const contenedor = document.getElementById('seccion-contacto');
        
        if (contenedor) {
            contenedor.innerHTML = html;
            console.log("Formulario cargado con éxito");
        } else {
            console.error("No se encontró el div 'seccion-contacto' en el HTML");
        }
    } catch (error) {
        console.warn("Error cargando contacto (Fetch): Probablemente estés en modo local (doble clic).");
        // Opcional: Mensaje de respaldo si no hay servidor
        const contenedor = document.getElementById('seccion-contacto');
        if (contenedor) {
            contenedor.innerHTML = '<p style="color: #888;">Formulario disponible en servidor o GitHub.</p>';
        }
    }
}