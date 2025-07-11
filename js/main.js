// Main JavaScript for Community Connection Hub
// This file provides interactive functionality for the Bootstrap lab exercises

document.addEventListener("DOMContentLoaded", function () {
  console.log("Community Connection Hub loaded!");

  addEventListeners();
});

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
