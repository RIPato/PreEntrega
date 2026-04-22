// pie-pagina.js
document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer>
        <p>© 2026 My Aplicacion. All rights reserved.</p>
    </footer>
    <iframe data-testid="embed-iframe" style="border-radius:12px"
        src="https://open.spotify.com/embed/track/2xPQjEJca0tRpvNxj0RP0f?utm_source=generator" width="40%" height="150"
        frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
    </iframe>
    `;

    // Insertamos el contenido al final del body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});