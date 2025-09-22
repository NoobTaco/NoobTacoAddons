import { createFooter } from './components/footer.js';
import { createNavHeader } from './components/header.js';

/**
 * Initialize the header and footer on page load
 */
function initComponents() {
    // Initialize footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        // Determine layout and current page from the page
        const isPvePage = window.location.pathname.includes('pve.html');
        const isNoobtacoPage = window.location.pathname.includes('noobtacoui.html');
        const layout = isPvePage || isNoobtacoPage ? 'full' : 'simple';
        const currentPage = isPvePage ? 'pve' : isNoobtacoPage ? 'noobtacoui' : 'home';

        footerPlaceholder.innerHTML = createFooter({ layout, currentPage });
    }

    // Initialize header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const isPvePage = window.location.pathname.includes('pve.html');
        const isNoobtacoPage = window.location.pathname.includes('noobtacoui.html');
        const currentPage = isPvePage ? 'pve' : isNoobtacoPage ? 'noobtacoui' : 'home';

        headerPlaceholder.innerHTML = createNavHeader({ currentPage });
    }

    // Initialize mobile menu functionality
    initMobileMenu();
}

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Initialize components when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}
