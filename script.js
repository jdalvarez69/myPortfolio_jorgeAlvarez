const navbar = document.querySelector('.navbar');
const sections = [...document.querySelectorAll('section')];
const navLinks = [...document.querySelectorAll('.nav-menu a')];

function updateHeaderState() {
    if (!navbar) return;
    navbar.style.borderBottomColor = window.scrollY > 12 ? '#c8c4bb' : '';
}

function updateActiveLink() {
    if (!sections.length || !navLinks.length) return;
    let current = sections[0].id;

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 130) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('active', isActive);
    });
}

window.addEventListener('scroll', () => {
    updateHeaderState();
    updateActiveLink();
});

window.addEventListener('load', () => {
    updateHeaderState();
    updateActiveLink();
});
