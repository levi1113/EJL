// app.js - menú hamburguesa y resaltado de enlace activo
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Resaltar enlace activo en desktop (opcional, ya tiene clase active en cada HTML)
    // Cerrar menú móvil al hacer clic en un enlace
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});