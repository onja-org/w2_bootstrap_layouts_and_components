// Main JavaScript for Community Connection Hub
// This file provides interactive functionality for the Bootstrap lab exercises

document.addEventListener("DOMContentLoaded", function () {
  console.log("Community Connection Hub loaded!");

  addEventListeners();
});

function showAlert(message, type = "info") {
  // Remove any existing alerts
  const existingAlerts = document.querySelectorAll(".dynamic-alert");
  existingAlerts.forEach(alert => alert.remove());

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
 * Add event listeners for interactive elements
 */
function addEventListeners() {
  // Handle form submissions (for exercise forms)
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", handleFormSubmission);
  });
}

/**
 * Handle form submissions with user feedback
 * @param {Event} event - The form submission event
 */
function handleFormSubmission(event) {
  event.preventDefault();
  console.log("running form submission");

  const form = event.target;
  const formData = new FormData(form);

  // Show success message (this would normally send data to a server)
  showAlert("Thank you for your message! Our community team will get back to you soon.", "success");

  // Reset the form
  form.reset();
}
