// Bootstrap Exercises Test Suite
// This test suite checks student progress through Bootstrap layout and component exercises

const { expect } = require("chai");
const { setupDOM, analyzeNavbar, analyzeCards, analyzeForm, countBootstrapComponents, isBootstrapGrid } = require("./test-helper");

describe("Bootstrap Layouts and Components Lab", function () {
  let dom, document;

  beforeEach(function () {
    const setup = setupDOM();
    dom = setup;
    document = setup.document;
    // const aboutSection = document.querySelector("#about");
  });

  afterEach(function () {
    if (dom && dom.cleanup) {
      dom.cleanup();
    }
  });

  describe("Exercise 1: Navigation Bar", function () {
    it("should have a Bootstrap navbar", function () {
      const navbar = document.querySelector(".navbar");
      expect(navbar).to.not.be.null;
    });

    it('should have a navbar brand with "Community Hub" text', function () {
      const navbarBrand = document.querySelector(".navbar-brand");
      expect(navbarBrand).to.not.be.null;

      if (navbarBrand) {
        const brandText = navbarBrand.textContent.toLowerCase();
        expect(brandText).to.include("community");
      }
    });

    it("should have navigation links", function () {
      const navLinks = document.querySelectorAll(".nav-link");
      expect(navLinks.length).to.be.at.least(2);
    });

    it("should be responsive with a navbar toggler", function () {
      const navbarToggler = document.querySelector(".navbar-toggler");
      expect(navbarToggler).to.not.be.null;
    });

    it("should have all placeholder classes replaced", function () {
      const navSection = document.querySelector("nav");
      const placeholderClasses = navSection.querySelectorAll('[class*="****"]');
      expect(placeholderClasses.length).to.be.equal(0);
    });
  });

  describe("Exercise 2: Hero Section", function () {
    it("should have a hero section with proper Bootstrap classes", function () {
      const heroSection = document.querySelector(".hero-section, .jumbotron, .bg-primary, .bg-light");
      expect(heroSection).to.not.be.null;
    });

    it("should use display heading classes for main title", function () {
      const heroSection = document.querySelector("#home");
      const displayHeading = heroSection.querySelector(".display-1, .display-2, .display-3, .display-4, .display-5, .display-6");
      expect(displayHeading).to.not.be.null;
    });

    it("should have lead text styling", function () {
      const heroSection = document.querySelector("#home");
      const leadText = heroSection.querySelector(".lead");
      expect(leadText).to.not.be.null;
    });

    it("should be contained in a container", function () {
      const heroSection = document.querySelector("#home");
      const container = heroSection.querySelector(".container, .container-fluid");
      expect(container).to.not.be.null;
    });

    it("should have all placeholder classes replaced", function () {
      const heroSection = document.querySelector("#home");
      const placeholderClasses = heroSection.querySelectorAll('[class*="****"]');
      expect(placeholderClasses.length).to.be.equal(0);
    });
  });

  describe("Exercise 3: Main Content Grid", function () {
    it("should use Bootstrap grid system with rows and columns", function () {
      const aboutSection = document.querySelector("#about");
      const rows = aboutSection.querySelectorAll(".row");
      expect(rows.length).to.be.at.least(1);

      const cols = aboutSection.querySelectorAll('[class*="col"]');
      expect(cols.length).to.be.at.least(2);
    });

    it("should have responsive column classes", function () {
      const aboutSection = document.querySelector("#about");
      const responsiveCols = aboutSection.querySelectorAll('[class*="col-sm"], [class*="col-md"], [class*="col-lg"], [class*="col-xl"]');
      expect(responsiveCols.length).to.be.at.least(1);
    });

    it("should properly nest grid elements", function () {
      const aboutSection = document.querySelector("#about");
      const rowsWithCols = aboutSection.querySelectorAll(".row");
      let hasProperNesting = false;

      rowsWithCols.forEach(row => {
        const colsInRow = row.querySelectorAll('[class*="col"]');
        if (colsInRow.length > 0) {
          hasProperNesting = true;
        }
      });

      expect(hasProperNesting).to.be.true;
    });

    it("should have all placeholder classes replaced", function () {
      const aboutSection = document.querySelector("#about");
      const placeholderClasses = aboutSection.querySelectorAll('[class*="****"]');
      expect(placeholderClasses.length).to.be.equal(0);
    });
  });

  describe("Exercise 4: Cards Section", function () {
    it("should have at least 3 Bootstrap cards", function () {
      const cards = document.querySelectorAll(".card");
      expect(cards.length).to.be.at.least(3);
    });

    it("should have cards with proper structure (card-body, card-title)", function () {
      const analysis = analyzeCards(document);
      expect(analysis.total).to.be.at.least(3);
      expect(analysis.wellStructured).to.be.at.least(2);
    });

    it("should have cards with headers or images", function () {
      const cardHeaders = document.querySelectorAll(".card-header");
      const cardImages = document.querySelectorAll(".card-img-top, .card img");

      expect(cardHeaders.length + cardImages.length).to.be.at.least(1);
    });

    it("should arrange cards in a responsive grid", function () {
      const cardsInGrid = document.querySelectorAll('.row .card, [class*="col"] .card');
      expect(cardsInGrid.length).to.be.at.least(2);
    });

    it("should have all placeholder classes replaced", function () {
      const connectSection = document.querySelector("#connect");
      const placeholderClasses = connectSection.querySelectorAll('[class*="****"]');
      expect(placeholderClasses.length).to.be.equal(0);
    });
  });

  describe("Exercise 5: Forms", function () {
    it("should have a form element", function () {
      const forms = document.querySelectorAll("form");
      expect(forms.length).to.be.at.least(1);
    });

    it("should use Bootstrap form control classes", function () {
      const formControls = document.querySelectorAll(".form-control");
      expect(formControls.length).to.be.at.least(2);
    });

    it("should have form labels", function () {
      const formSection = document.querySelector("#contact");
      const labels = formSection.querySelectorAll(".form-label, label");
      expect(labels.length).to.be.at.least(2);
    });

    it("should have a submit button", function () {
      const formSection = document.querySelector("#contact");
      const submitButton = formSection.querySelector('button[type="submit"], input[type="submit"], .btn');
      expect(submitButton).to.not.be.null;
    });

    it("should have proper form structure", function () {
      const analysis = analyzeForm(document);
      expect(analysis.exists).to.be.true;
      expect(analysis.hasFormControls).to.be.true;
      expect(analysis.hasButtons).to.be.true;
    });

    it("should have all placeholder classes replaced", function () {
      const formSection = document.querySelector("#contact");
      const placeholderClasses = formSection.querySelectorAll('[class*="****"]');
      expect(placeholderClasses.length).to.be.equal(0);
    });
  });

  describe("Exercise 6: Buttons and Components", function () {
    it("should have multiple Bootstrap buttons with different styles", function () {
      const takeActionSection = document.querySelector("#take-action");
      const buttons = takeActionSection.querySelectorAll(".btn");
      expect(buttons.length).to.be.at.least(3);

      const buttonVariants = takeActionSection.querySelectorAll(
        ".btn-primary, .btn-secondary, .btn-success, .btn-warning, .btn-danger, .btn-info, .btn-light, .btn-dark"
      );
      expect(buttonVariants.length).to.be.at.least(2);
    });

    it("should have at least one button group or toolbar", function () {
      const buttonGroups = document.querySelectorAll(".btn-group, .btn-toolbar");
      expect(buttonGroups.length).to.be.at.least(1);
    });

    it("should include interactive components (badges, progress bars, etc.)", function () {
      const badges = document.querySelectorAll(".badge");
      const progressBars = document.querySelectorAll(".progress");

      expect(badges.length + progressBars.length).to.be.at.least(2);
    });

    it("should have all placeholder classes replaced", function () {
      const takeActionSection = document.querySelector("#take-action");
      const placeholderClasses = takeActionSection.querySelectorAll('[class*="****"]');
      expect(placeholderClasses.length).to.be.equal(0);
    });
  });

  describe("Exercise 7: Alerts and Messages", function () {
    it("should have Bootstrap alert components", function () {
      const alerts = document.querySelectorAll(".alert");
      expect(alerts.length).to.be.at.least(1);
    });

    it("should have dismissible alerts", function () {
      const dismissibleAlerts = document.querySelectorAll(".alert-dismissible");
      expect(dismissibleAlerts.length).to.be.at.least(1);
    });

    it("should use different alert types", function () {
      const alertTypes = document.querySelectorAll(".alert-primary, .alert-secondary, .alert-success, .alert-warning, .alert-danger, .alert-info");
      expect(alertTypes.length).to.be.at.least(1);
    });
    it("should have all placeholders replaced", function () {
      const alertsSection = document.querySelector("#alerts");
      const placeholderClasses = alertsSection.querySelectorAll('[class*="****"]');
      const otherPlaceholders = alertsSection.querySelectorAll('[data-bs-dismiss*="****"]');
      let allPlaceholders = placeholderClasses.length + otherPlaceholders.length;
      expect(allPlaceholders).to.be.equal(0);
    });
  });

  describe("Exercise 8: Footer", function () {
    it("should have the updated footer element", function () {
      const footer = document.querySelector("#footer");
      expect(footer).to.not.be.null;
    });

    it("should have all placeholder classes replaced", function () {
      const footerSection = document.querySelector("#footer");
      const placeholderClasses = footerSection.querySelectorAll('[class*="****"]');
      expect(placeholderClasses.length).to.be.equal(0);
    });
  });
});
