// Main JavaScript for Community Connection Hub
// This file provides interactive functionality for the Bootstrap lab exercises

document.addEventListener("DOMContentLoaded", function () {
  console.log("Community Connection Hub loaded!");

  // Initialize interactive components
  initializeComponents();
  addEventListeners();
  // showWelcomeMessage();
});

/**
 * Initialize Bootstrap components and custom functionality
 */
function initializeComponents() {
  // Initialize tooltips (if any are added in exercises)
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize popovers (if any are added in exercises)
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
  );
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}

/**
 * Add event listeners for interactive elements
 */
function addEventListeners() {
  // Handle form submissions (for exercise forms)
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", handleFormSubmission);
  });
}

/**
 * Handle form submissions with user feedback
 * @param {Event} event - The form submission event
 */
function handleFormSubmission(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Show success message (this would normally send data to a server)
  showAlert(
    "Thank you for your message! Our community team will get back to you soon.",
    "success",
  );

  // Reset the form
  form.reset();
}

/**
 * Show an alert message to the user
 * @param {string} message - The message to display
 * @param {string} type - The Bootstrap alert type (success, danger, warning, info, primary, etc.)
 */
function showAlert(message, type = "info") {
  // Remove any existing alerts
  const existingAlerts = document.querySelectorAll(".dynamic-alert");
  existingAlerts.forEach((alert) => alert.remove());

  // Create new alert
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show dynamic-alert`;
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "20px";
  alertDiv.style.right = "20px";
  alertDiv.style.zIndex = "9999";
  alertDiv.style.minWidth = "300px";

  alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

  document.body.appendChild(alertDiv);

  // Auto-dismiss after 5 seconds
  setTimeout(() => {
    if (alertDiv.parentNode) {
      alertDiv.remove();
    }
  }, 5000);
}

/**
 * Show welcome message when page loads
 */
function showWelcomeMessage() {
  setTimeout(() => {
    showAlert(
      "Welcome to the Community Connection Hub! Complete the exercises to build this page together. 🏗️",
      "primary",
    );
  }, 1000);
}

/**
 * Utility function to get random community message
 * @returns {string} A random encouraging message
 */
function getRandomCommunityMessage() {
  const messages = [
    "Together we're stronger! 💪",
    "Kindness creates connections! ❤️",
    "Building bridges, not walls! 🌉",
    "One community, many hearts! 💕",
    "Growing together, learning together! 🌱",
    "Your voice matters here! 📢",
    "Making the world a little brighter! ✨",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Function to validate exercise completion (used by tests)
 * @param {string} exerciseId - The ID of the exercise to check
 * @returns {boolean} Whether the exercise appears to be completed
 */
function checkExerciseCompletion(exerciseId) {
  switch (exerciseId) {
    case "navbar":
      return document.querySelector(".navbar") !== null;
    case "hero":
      return document.querySelector(".hero-section, .jumbotron") !== null;
    case "grid":
      return (
        document.querySelectorAll('.row .col, .row [class*="col-"]').length >= 3
      );
    case "cards":
      return document.querySelectorAll(".card").length >= 3;
    case "forms":
      return document.querySelector("form") !== null;
    case "buttons":
      return document.querySelectorAll(".btn").length >= 3;
    case "alerts":
      return document.querySelector(".alert") !== null;
    case "footer":
      return document.querySelector("footer, .footer") !== null;
    default:
      return false;
  }
}

// Export functions for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    checkExerciseCompletion,
    getRandomCommunityMessage,
  };
}
