<?php
$servername = "127.0.0.1:3307";
$username = "root";
$password = "";
$database = "pglife";
$conn = mysqli_connect($servername,$username,$password,$database);

if (mysqli_connect_errno()) {
    // Throw error message based on ajax or not
    echo "Failed to connect to MySQL! Please contact the admin.";
    return;
}
