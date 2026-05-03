const piePaginaHTML = `
<footer>
    <div style="background-color: #222; text-align: center; border-top: 1px solid #222; padding-top: 20px; font-size: 12px; color: #666;">
        <p>© 2026 Trabajo de PreEntrega. Todos los derechos reservados. | Diseñado con RIPato <span style="color: #007bff;">&hearts;</span> para el futuro.</p>
    </div>
</footer>
`;

function cargarFooter() {
    // Insertamos el código al final del body
    document.body.insertAdjacentHTML('beforeend', piePaginaHTML);
    console.log("Footer inyectado sin fetch (compatible con doble clic)");
}