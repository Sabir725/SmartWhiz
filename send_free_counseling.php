<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["student-name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email-id"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["mobile-number"]);
    $city = trim($_POST["city"]);
    $state = trim($_POST["state"]);
    $qualification = trim($_POST["last-qualification"]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($phone) OR empty($city) OR empty($state) OR empty($qualification) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Set the recipient email address.
    $recipient = "smartwhizedu@gmail.com";

    // Set the email subject.
    $subject = "New Free Consultation Request from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "City: $city\n";
    $email_content .= "State: $state\n";
    $email_content .= "Last Qualification: $qualification\n";


    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your request has been sent.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your request.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>