// layout.js

// Función para el encabezado
async function cargarEncabezado() {
    try {
        const respuesta = await fetch('encabezado.html');
        if (!respuesta.ok) throw new Error("No se pudo cargar el encabezado");
        const html = await respuesta.text();
        document.body.insertAdjacentHTML('afterbegin', html);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Función para el pie de página
async function cargarFooter() {
    try {
        const respuesta = await fetch('pie_pagina.html');
        if (!respuesta.ok) throw new Error("No se pudo cargar el pie de página");
        const html = await respuesta.text();
        document.body.insertAdjacentHTML('beforeend', html);
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarEncabezado();
    cargarFooter();
});