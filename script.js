/**
 * Portfolio Site - JavaScript
 * Handles navigation, smooth scrolling, and interactive elements
 */

// ===========================
// Mobile Navigation Toggle
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scrolling is handled by CSS scroll-behavior
            // This is here for any future mobile menu toggle functionality
        });
    });
});

// ===========================
// Navbar Shadow on Scroll
// ===========================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and project items
document.querySelectorAll('.card, .project-card, .skill-category, .step').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    element.style.transition = 'opacity 300ms ease-in-out, transform 300ms ease-in-out';
    observer.observe(element);
});

// ===========================
// Active Navigation Link
// ===========================

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--color-accent)';
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ===========================
// Form Validation (if needed in future)
// ===========================

// Placeholder for future contact form functionality
function handleContactSubmit(e) {
    // Future: Add form handling logic here
}

// ===========================
// Utility Functions
// ===========================

/**
 * Smooth scroll to element with offset for sticky navbar
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

/**
 * Detect if user prefers dark mode
 */
function prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// ===========================
// Initialize on Page Load
// ===========================

window.addEventListener('load', function() {
    console.log('Portfolio site loaded');
    // Future: Add any additional initialization logic here
});
