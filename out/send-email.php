<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (ensure you have Composer installed and 'vendor/autoload.php' is present)
require 'vendor/autoload.php'; // Adjust the path if necessary

// Set response headers for JSON and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Allow requests from any origin
header('Access-Control-Allow-Methods: POST, OPTIONS'); // Allow POST and OPTIONS methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow specific headers

// Handle OPTIONS requests (for CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the raw POST data
    $input = file_get_contents('php://input');
    // Decode JSON input to associative array
    $data = json_decode($input, true);

    // Validate the input
    if (isset($data['email']) && isset($data['company']) && isset($data['contact']) && isset($data['details'])) {
        // Sanitize input
        $name = strip_tags(trim($data['name'] ?? ''));
        $company = strip_tags(trim($data['company']));
        $category = strip_tags(trim($data['category'] ?? ''));
        $details = strip_tags(trim($data['details']));
        $contact = strip_tags(trim($data['contact']));
        $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);

        // Validate data
        if (empty($email) || empty($company) || empty($contact) || empty($details) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(["success" => false, "message" => "Please fill in all required fields correctly."]);
            exit;
        }

        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                 // Replace with your SMTP server
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'cewtech2024@gmail.com';           // SMTP username
            $mail->Password   = 'jeth ekiw mxcw hrrh';                  // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           // Use TLS encryption
            $mail->Port       = 587;                                    // TCP port to connect to

            // Recipients
            $mail->setFrom('cewtech2024@gmail.com', 'New Enquiry');  // Sender's email address and name
            $mail->addAddress('sales@crownenggworks.com');              // Recipient's email address

            // Content
            $mail->isHTML(false);                                      // Set email format to plain text
            $mail->Subject = "Request for Information on Your Products";
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
        // If required fields are missing
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Invalid input. 'email', 'company', 'contact', and 'details' are required."]);
    }
} else {
    // If the request method is not POST, return a 405 Method Not Allowed response
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Invalid request method: " . $_SERVER["REQUEST_METHOD"]]);
}
?>
