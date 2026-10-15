/* ==========================================
   SAWLIHEEN PUBLICATIONS - JAVASCRIPT
   ========================================== */

// Page Switcher (Multi-Page simulation in single view)
function switchPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    // Show target page
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    // Update active state in nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });

    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        const menuIcon = hamburger.querySelector('i');
        const closeMenu = () => {
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Open navigation menu');
            if (menuIcon) menuIcon.className = 'fas fa-bars';
        };

        hamburger.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', String(isOpen));
            hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
            if (menuIcon) menuIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
        });

        navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) closeMenu();
        });
    }
});

// Contact Form Handler with success feedback
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const successMsg = document.getElementById('formSuccessMsg');

    if (name && email && message) {
        // Show success message
        successMsg.style.display = 'block';
        
        // Reset Form
        document.getElementById('contactForm').reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
}
