/* =============================================
   SHARED SCRIPT — Jorge Alvarez Portfolio
   ============================================= */

(function () {
    'use strict';

    // ----- Navbar scroll state -----
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 16);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ----- Active nav link by current page filename -----
    const navLinks = [...document.querySelectorAll('.nav-menu a')];
    if (navLinks.length) {
        const path = window.location.pathname;
        const file = path.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const linkFile = href.split('/').pop();
            const isHome = (linkFile === 'index.html' || linkFile === '') &&
                           (file === 'index.html' || file === '');
            const isMatch = isHome || linkFile === file;
            link.classList.toggle('active', isMatch);
        });
    }
})();
