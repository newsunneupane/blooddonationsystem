<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "db.php";

/* read raw JSON */
$input = file_get_contents("php://input");

/* convert JSON to PHP array */
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(["error" => "No JSON received"]);
    exit();
}

$name = $data['name'] ?? '';
$bloodGroup = $data['bloodGroup'] ?? '';
$city = $data['city'] ?? '';

// Validation: Check if all fields are provided
if (empty(trim($name)) || empty(trim($bloodGroup)) || empty(trim($city))) {
    echo json_encode(["error" => "All fields are required"]);
    exit();
}

$stmt = $conn->prepare("INSERT INTO donors (name, bloodGroup, city) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $bloodGroup, $city);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => $stmt->error]);
}

?>