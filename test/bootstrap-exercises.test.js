// Bootstrap Exercises Test Suite
// This test suite checks student progress through Bootstrap layout and component exercises

const { expect } = require('chai');
const { setupDOM, analyzeNavbar, analyzeCards, analyzeForm, countBootstrapComponents, isBootstrapGrid } = require('./test-helper');

describe('Bootstrap Layouts and Components Lab', function() {
    let dom, document;

    beforeEach(function() {
        const setup = setupDOM();
        dom = setup;
        document = setup.document;
    });

    afterEach(function() {
        if (dom && dom.cleanup) {
            dom.cleanup();
        }
    });

    describe('Exercise 1: Navigation Bar', function() {
        it('should have a Bootstrap navbar', function() {
            const navbar = document.querySelector('.navbar');
            expect(navbar).to.not.be.null;
        });

        it('should have a navbar brand with "Community Hub" text', function() {
            const navbarBrand = document.querySelector('.navbar-brand');
            expect(navbarBrand).to.not.be.null;

            if (navbarBrand) {
                const brandText = navbarBrand.textContent.toLowerCase();
                expect(brandText).to.include('community');
            }
        });

        it('should have navigation links', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            expect(navLinks.length).to.be.at.least(2);
        });

        it('should be responsive with a navbar toggler', function() {
            const navbarToggler = document.querySelector('.navbar-toggler');
            expect(navbarToggler).to.not.be.null;
        });

        it('should have proper navbar structure', function() {
            const analysis = analyzeNavbar(document);
            expect(analysis.exists).to.be.true;
            expect(analysis.brand).to.be.true;
            expect(analysis.nav).to.be.true;
        });
    });

    describe('Exercise 2: Hero Section', function() {
        it('should have a hero section with proper Bootstrap classes', function() {
            const heroSection = document.querySelector('.hero-section, .jumbotron, .bg-primary, .bg-light');
            expect(heroSection).to.not.be.null;
        });

        it('should use display heading classes for main title', function() {
            const displayHeading = document.querySelector('.display-1, .display-2, .display-3, .display-4, .display-5, .display-6');
            expect(displayHeading).to.not.be.null;
        });

        it('should have lead text styling', function() {
            const leadText = document.querySelector('.lead');
            expect(leadText).to.not.be.null;
        });

        it('should be contained in a container', function() {
            const container = document.querySelector('.container, .container-fluid');
            expect(container).to.not.be.null;
        });
    });

    describe('Exercise 3: Main Content Grid', function() {
        it('should use Bootstrap grid system with rows and columns', function() {
            const rows = document.querySelectorAll('.row');
            expect(rows.length).to.be.at.least(1);

            const cols = document.querySelectorAll('[class*="col"]');
            expect(cols.length).to.be.at.least(2);
        });

        it('should have responsive column classes', function() {
            const responsiveCols = document.querySelectorAll('[class*="col-sm"], [class*="col-md"], [class*="col-lg"], [class*="col-xl"]');
            expect(responsiveCols.length).to.be.at.least(1);
        });

        it('should properly nest grid elements', function() {
            const rowsWithCols = document.querySelectorAll('.row');
            let hasProperNesting = false;

            rowsWithCols.forEach(row => {
                const colsInRow = row.querySelectorAll('[class*="col"]');
                if (colsInRow.length > 0) {
                    hasProperNesting = true;
                }
            });

            expect(hasProperNesting).to.be.true;
        });
    });

    describe('Exercise 4: Cards Section', function() {
        it('should have at least 3 Bootstrap cards', function() {
            const cards = document.querySelectorAll('.card');
            expect(cards.length).to.be.at.least(3);
        });

        it('should have cards with proper structure (card-body, card-title)', function() {
            const analysis = analyzeCards(document);
            expect(analysis.total).to.be.at.least(3);
            expect(analysis.wellStructured).to.be.at.least(2);
        });

        it('should have cards with headers or images', function() {
            const cardHeaders = document.querySelectorAll('.card-header');
            const cardImages = document.querySelectorAll('.card-img-top, .card img');

            expect(cardHeaders.length + cardImages.length).to.be.at.least(1);
        });

        it('should arrange cards in a responsive grid', function() {
            const cardsInGrid = document.querySelectorAll('.row .card, [class*="col"] .card');
            expect(cardsInGrid.length).to.be.at.least(2);
        });
    });

    describe('Exercise 5: Forms', function() {
        it('should have a form element', function() {
            const forms = document.querySelectorAll('form');
            expect(forms.length).to.be.at.least(1);
        });

        it('should use Bootstrap form control classes', function() {
            const formControls = document.querySelectorAll('.form-control');
            expect(formControls.length).to.be.at.least(2);
        });

        it('should have form labels', function() {
            const labels = document.querySelectorAll('.form-label, label');
            expect(labels.length).to.be.at.least(2);
        });

        it('should have a submit button', function() {
            const submitButton = document.querySelector('button[type="submit"], input[type="submit"], .btn');
            expect(submitButton).to.not.be.null;
        });

        it('should have proper form structure', function() {
            const analysis = analyzeForm(document);
            expect(analysis.exists).to.be.true;
            expect(analysis.hasFormControls).to.be.true;
            expect(analysis.hasButtons).to.be.true;
        });
    });

    describe('Exercise 6: Buttons and Components', function() {
        it('should have multiple Bootstrap buttons with different styles', function() {
            const buttons = document.querySelectorAll('.btn');
            expect(buttons.length).to.be.at.least(3);

            const buttonVariants = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-success, .btn-warning, .btn-danger, .btn-info, .btn-light, .btn-dark');
            expect(buttonVariants.length).to.be.at.least(2);
        });

        it('should have at least one button group or toolbar', function() {
            const buttonGroups = document.querySelectorAll('.btn-group, .btn-toolbar');
            expect(buttonGroups.length).to.be.at.least(0); // Optional but encouraged
        });

        it('should include interactive components (badges, progress bars, etc.)', function() {
            const badges = document.querySelectorAll('.badge');
            const progressBars = document.querySelectorAll('.progress');
            const spinners = document.querySelectorAll('.spinner-border, .spinner-grow');

            expect(badges.length + progressBars.length + spinners.length).to.be.at.least(1);
        });
    });

    describe('Exercise 7: Alerts and Messages', function() {
        it('should have Bootstrap alert components', function() {
            const alerts = document.querySelectorAll('.alert');
            expect(alerts.length).to.be.at.least(1);
        });

        it('should have dismissible alerts', function() {
            const dismissibleAlerts = document.querySelectorAll('.alert-dismissible');
            expect(dismissibleAlerts.length).to.be.at.least(1);
        });

        it('should use different alert types', function() {
            const alertTypes = document.querySelectorAll('.alert-primary, .alert-secondary, .alert-success, .alert-warning, .alert-danger, .alert-info');
            expect(alertTypes.length).to.be.at.least(1);
        });
    });

    describe('Exercise 8: Footer', function() {
        it('should have a footer element', function() {
            const footer = document.querySelector('footer, .footer');
            expect(footer).to.not.be.null;
        });

        it('should have multiple columns in footer', function() {
            const footer = document.querySelector('footer, .footer');
            if (footer) {
                const columns = footer.querySelectorAll('[class*="col"]');
                expect(columns.length).to.be.at.least(2);
            }
        });

        it('should include links and contact information', function() {
            const footer = document.querySelector('footer, .footer');
            if (footer) {
                const links = footer.querySelectorAll('a');
                expect(links.length).to.be.at.least(2);
            }
        });
    });

    describe('Overall Bootstrap Integration', function() {
        it('should have Bootstrap CSS properly linked', function() {
            const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
            expect(bootstrapLink).to.not.be.null;
        });

        it('should have Bootstrap JavaScript properly linked', function() {
            const bootstrapScript = document.querySelector('script[src*="bootstrap"]');
            expect(bootstrapScript).to.not.be.null;
        });

        it('should use consistent spacing utilities', function() {
            const spacingClasses = document.querySelectorAll('[class*="m-"], [class*="p-"], [class*="mt-"], [class*="mb-"], [class*="ms-"], [class*="me-"], [class*="pt-"], [class*="pb-"], [class*="ps-"], [class*="pe-"]');
            expect(spacingClasses.length).to.be.at.least(5);
        });

        it('should use text and color utilities', function() {
            const textClasses = document.querySelectorAll('[class*="text-"], [class*="bg-"]');
            expect(textClasses.length).to.be.at.least(3);
        });

        it('should be mobile-first responsive', function() {
            const responsiveElements = document.querySelectorAll('[class*="col-"], [class*="d-"], [class*="flex-"], .container-fluid');
            expect(responsiveElements.length).to.be.at.least(5);
        });

        it('should have semantic HTML structure', function() {
            const semanticElements = document.querySelectorAll('header, nav, main, section, article, aside, footer');
            expect(semanticElements.length).to.be.at.least(2);
        });
    });

    describe('Community Theme Implementation', function() {
        it('should reflect community and togetherness theme in content', function() {
            const bodyText = document.body.textContent.toLowerCase();
            const communityWords = ['community', 'together', 'connection', 'kindness', 'unity', 'support'];

            const hasTheme = communityWords.some(word => bodyText.includes(word));
            expect(hasTheme).to.be.true;
        });

        it('should have welcoming and inclusive language', function() {
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            let hasWelcomingContent = false;

            headings.forEach(heading => {
                const text = heading.textContent.toLowerCase();
                if (text.includes('welcome') || text.includes('join') || text.includes('together') || text.includes('community')) {
                    hasWelcomingContent = true;
                }
            });

            expect(hasWelcomingContent).to.be.true;
        });

        it('should encourage participation and engagement', function() {
            const buttons = document.querySelectorAll('.btn');
            const links = document.querySelectorAll('a');
            let hasEngagementCTA = false;

            [...buttons, ...links].forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes('join') || text.includes('connect') || text.includes('participate') || text.includes('get involved')) {
                    hasEngagementCTA = true;
                }
            });

            expect(hasEngagementCTA).to.be.true;
        });
    });
});
