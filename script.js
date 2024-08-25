document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Validate form inputs here (e.g., check for empty fields)

    // If validation passes, submit the form
    this.submit();
});
