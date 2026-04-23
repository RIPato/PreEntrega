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