<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (ensure you have Composer installed and 'vendor/autoload.php' is present)
require 'vendor/autoload.php'; // Adjust the path if necessary

// Set response headers for JSON and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Allow POST, GET, and OPTIONS methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow specific headers

// Handle OPTIONS requests (preflight requests)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit; // End the script here for OPTIONS requests
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve and sanitize POST data
    $name = strip_tags(trim($_POST["name"]));
    $company = strip_tags(trim($_POST["company"]));
    $category = strip_tags(trim($_POST["category"]));
    $details = strip_tags(trim($_POST["details"]));
    $contact = strip_tags(trim($_POST["contact"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    // Validate data
    if (empty($name) || empty($email) || empty($details) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Please fill in all required fields correctly."]);
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'fury5452@gmail.com';                   // SMTP username
        $mail->Password   = 'fury@gamer1234';                       // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable implicit TLS encryption
        $mail->Port       = 465;                                    // TCP port to connect to

        // Recipients
        $mail->setFrom('fury5452@gmail.com', 'Contact Form');       // Sender's email address and name
        $mail->addAddress('cewtech2024@gmail.com');                 // Recipient's email address

        // Content
        $mail->isHTML(false);                                     // Set email format to plain text
        $mail->Subject = "New Contact Form Submission";
        $mail->Body    = "Name: {$name}\n".
                          "Company: {$company}\n".
                          "Category: {$category}\n".
                          "Details: {$details}\n".
                          "Contact: {$contact}\n".
                          "Email: {$email}\n";

        // Send email
        $mail->send();
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Email sent successfully."]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
