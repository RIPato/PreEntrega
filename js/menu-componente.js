class MiMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="banner"></div>
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

// Aquí defines cómo se llamará tu etiqueta personalizada
customElements.define('mi-menu', MiMenu);