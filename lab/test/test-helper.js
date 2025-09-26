// Test helper for setting up DOM testing environment
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

/**
 * Set up a DOM environment for testing HTML/CSS/JS
 * @param {string} htmlFile - Path to the HTML file to load
 * @returns {Object} DOM window and document objects
 */
function setupDOM(htmlFile = './lab/index.html') {
    const htmlPath = path.join(__dirname, htmlFile);
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Create JSDOM instance with Bootstrap CSS loaded
    const dom = new JSDOM(htmlContent, {
        url: 'http://localhost:3000',
        referrer: 'http://localhost:3000',
        contentType: 'text/html',
        includeNodeLocations: true,
        storageQuota: 10000000,
        resources: 'usable',
        runScripts: 'dangerously'
    });

    global.window = dom.window;
    global.document = dom.window.document;
    global.navigator = dom.window.navigator;

    // Mock Bootstrap object for components that require it
    global.bootstrap = {
        Tooltip: class {
            constructor(element) {
                this.element = element;
            }
        },
        Popover: class {
            constructor(element) {
                this.element = element;
            }
        },
        Modal: class {
            constructor(element) {
                this.element = element;
            }
        },
        Collapse: class {
            constructor(element) {
                this.element = element;
            }
        },
        Dropdown: class {
            constructor(element) {
                this.element = element;
            }
        }
    };

    return {
        window: dom.window,
        document: dom.window.document,
        cleanup: () => {
            dom.window.close();
            delete global.window;
            delete global.document;
            delete global.navigator;
            delete global.bootstrap;
        }
    };
}

/**
 * Check if an element has specific Bootstrap classes
 * @param {Element} element - The element to check
 * @param {Array} classes - Array of class names to look for
 * @returns {boolean} Whether the element has any of the specified classes
 */
function hasBootstrapClasses(element, classes) {
    if (!element || !element.className) return false;

    const elementClasses = element.className.split(' ');
    return classes.some(cls => elementClasses.includes(cls));
}

/**
 * Check if an element is using Bootstrap grid system
 * @param {Element} element - The element to check
 * @returns {boolean} Whether the element uses Bootstrap grid classes
 */
function isBootstrapGrid(element) {
    const gridClasses = ['container', 'container-fluid', 'row', 'col'];
    const colPattern = /^col(-\w+)?(-\d+)?$/;

    if (!element || !element.className) return false;

    const elementClasses = element.className.split(' ');
    return elementClasses.some(cls =>
        gridClasses.includes(cls) || colPattern.test(cls)
    );
}

/**
 * Count elements with specific Bootstrap component classes
 * @param {Document} document - The document to search in
 * @param {string} componentType - The Bootstrap component type (e.g., 'card', 'btn', 'alert')
 * @returns {number} Number of elements found
 */
function countBootstrapComponents(document, componentType) {
    return document.querySelectorAll(`.${componentType}`).length;
}

/**
 * Check if navbar is properly structured
 * @param {Document} document - The document to check
 * @returns {Object} Analysis of navbar structure
 */
function analyzeNavbar(document) {
    const navbar = document.querySelector('.navbar');
    if (!navbar) {
        return { exists: false, brand: false, nav: false, responsive: false };
    }

    return {
        exists: true,
        brand: navbar.querySelector('.navbar-brand') !== null,
        nav: navbar.querySelector('.navbar-nav') !== null,
        responsive: navbar.querySelector('.navbar-toggler') !== null,
        hasLinks: navbar.querySelectorAll('.nav-link').length > 0
    };
}

/**
 * Check if cards are properly structured
 * @param {Document} document - The document to check
 * @returns {Object} Analysis of card structure
 */
function analyzeCards(document) {
    const cards = document.querySelectorAll('.card');
    let wellStructured = 0;

    cards.forEach(card => {
        const hasHeader = card.querySelector('.card-header') !== null;
        const hasBody = card.querySelector('.card-body') !== null;
        const hasTitle = card.querySelector('.card-title') !== null;
        const hasText = card.querySelector('.card-text') !== null;

        if (hasBody && (hasTitle || hasText)) {
            wellStructured++;
        }
    });

    return {
        total: cards.length,
        wellStructured: wellStructured,
        hasImages: document.querySelectorAll('.card img, .card-img-top').length > 0
    };
}

/**
 * Check if form is properly structured with Bootstrap classes
 * @param {Document} document - The document to check
 * @returns {Object} Analysis of form structure
 */
function analyzeForm(document) {
    const forms = document.querySelectorAll('form');
    if (forms.length === 0) {
        return { exists: false };
    }

    const form = forms[0]; // Analyze first form
    return {
        exists: true,
        hasFormControls: form.querySelectorAll('.form-control').length > 0,
        hasLabels: form.querySelectorAll('.form-label').length > 0,
        hasButtons: form.querySelectorAll('.btn').length > 0,
        hasValidation: form.querySelectorAll('.is-valid, .is-invalid').length > 0 ||
                      form.querySelectorAll('.valid-feedback, .invalid-feedback').length > 0
    };
}

/**
 * Wait for DOM to be ready (useful for async operations)
 * @param {Document} document - The document to wait for
 * @returns {Promise} Promise that resolves when DOM is ready
 */
function waitForDOM(document) {
    return new Promise((resolve) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', resolve);
        } else {
            resolve();
        }
    });
}

module.exports = {
    setupDOM,
    hasBootstrapClasses,
    isBootstrapGrid,
    countBootstrapComponents,
    analyzeNavbar,
    analyzeCards,
    analyzeForm,
    waitForDOM
};
