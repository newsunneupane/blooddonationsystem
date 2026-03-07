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

$input = file_get_contents("php://input");
$data = json_decode($input, true);

$id = $data['id'];
$name = $data['name'];
$bloodGroup = $data['bloodGroup'];
$city = $data['city'];

$stmt = $conn->prepare("UPDATE donors SET name=?, bloodGroup=?, city=? WHERE id=?");
$stmt->bind_param("sssi", $name, $bloodGroup, $city, $id);

$stmt->execute();

echo json_encode(["success" => true]);

?>