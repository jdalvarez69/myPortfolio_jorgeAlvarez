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

    // ----- Page exit transition for internal navigation -----
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.addEventListener('click', function (e) {
            var anchor = e.target.closest('a');
            if (!anchor) return;

            var href = anchor.getAttribute('href');
            if (!href) return;

            // Skip modifier-key clicks (Cmd/Ctrl/Shift/Alt = new-tab intent)
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

            // Skip target="_blank" or any non-self target
            var tgt = anchor.getAttribute('target');
            if (tgt && tgt !== '_self') return;

            // Only intercept simple relative .html page links
            // This excludes: mailto:, https://, tel:, #anchors, external URLs
            if (!/^\.?[\w\-/]*\.html$/.test(href)) return;

            e.preventDefault();
            document.body.classList.add('page-exit');
            setTimeout(function () { window.location.href = href; }, 150);
        });
    }
})();
