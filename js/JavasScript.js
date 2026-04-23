// layout.js

async function cargarEncabezado() {
    console.log("Iniciando carga de encabezado...");
    try {
        const respuesta = await fetch('Encabezado_pie/encabezado.html');
        if (!respuesta.ok) throw new Error("No se encontró encabezado.html");
        const html = await respuesta.text();
        document.body.insertAdjacentHTML('afterbegin', html);
        console.log("Encabezado insertado correctamente");
    } catch (error) {
        console.error("Error en Encabezado:", error);
    }
}

async function cargarFooter() {
    console.log("Iniciando carga de footer...");
    try {
        const respuesta = await fetch('Encabezado_pie/pie_pagina.html');
        if (!respuesta.ok) throw new Error("No se encontró pie_pagina.html");
        const html = await respuesta.text();
        document.body.insertAdjacentHTML('beforeend', html);
        console.log("Footer insertado correctamente");
    } catch (error) {
        console.error("Error en Footer:", error);
    }
}
// carga el primer formulario de contacto en la sección correspondiente
// Añade esto a js/encabezado_pie.js

async function cargarContacto() {
    console.log("Intentando cargar el formulario...");
    try {
        // CORRECCIÓN: Quitamos el doble .html
        const respuesta = await fetch('form/form_contacto_001.html'); 
        
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
        console.error("Error cargando contacto:", error);
    }
}