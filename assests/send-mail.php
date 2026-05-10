<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$name    = htmlspecialchars(trim($_POST['name'] ?? ''));
$company = htmlspecialchars(trim($_POST['company'] ?? ''));
$email   = htmlspecialchars(trim($_POST['email'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (!$name || !$email || !$message) {
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields.']);
    exit;
}

$apiKey = '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';

$payload = [
    'sender'     => ['name' => $name, 'email' => 'muneebatradersctg@gmail.com'],
    'to'         => [['email' => 'm.murad.r@gmail.com', 'name' => 'Adhuna Sales']],
    'replyTo'    => ['email' => $email, 'name' => $name],
    'subject'    => "New Inquiry from $name - $company",
    'htmlContent'=> "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Email:</strong> $email</p>
        <hr>
        <p><strong>Message:</strong><br>$message</p>
    "
];

$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => [
        'accept: application/json',
        'api-key: ' . $apiKey,
        'content-type: application/json'
    ],
    CURLOPT_POSTFIELDS => json_encode($payload)
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 201) {
    echo json_encode(['success' => true, 'message' => 'Your inquiry has been sent successfully!']);
} else {
    $error = json_decode($response, true);
    echo json_encode(['success' => false, 'message' => 'Failed to send. ' . ($error['message'] ?? 'Please try again.')]);
}
?>