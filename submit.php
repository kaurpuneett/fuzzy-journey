<?php
// Check if form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Process the data (e.g., send an email or store in a database)
    // Example: Send an email
    $to = "your_email@example.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    mail($to, $subject, $body);

    // Redirect back to the contact page with a success message
    header("Location: contact.html?status=success");
    exit;
} else {
    // If the form was not submitted, redirect to the contact page with an error message
    header("Location: contact.html?status=error");
    exit;
}
?>
