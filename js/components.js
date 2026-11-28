
/* Insert the same navigation on every page */

const header = document.querySelector("#site-header");

header.innerHTML = `
    <header class="site-header">
        <a href="index.html" class="logo">
            DR. MARTENS
        </a>

        <nav class="site-nav" aria-label="Main navigation">
            <a href="index.html">HOME</a>
            <a href="about.html">ABOUT</a>
            <a href="shop.html">SHOP</a>
            <a href="contact.html">CONTACT</a>
        </nav>
    </header>
`;

/* Insert the same footer on every page */

const footer = document.querySelector("#site-footer");

footer.innerHTML = `
    <footer class="site-footer">
        <p>DR. MARTENS | BUILT TO STAND OUT.</p>
        <p>Student project for educational purposes.</p>
    </footer>
`;
