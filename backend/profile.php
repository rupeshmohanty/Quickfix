<?php
    // include header!
    include('./headers.php');

    // include db connection!
    include('./db.php');

    // declare variables!
    $email = "";

    // get form data!
    if(isset($_GET['email'])) {

        $email = $_GET['email'];

    }

    // get user details!
    $getUser = "SELECT `id`, `name`, `userId`, `phone`, `profession`,`createdAt` FROM `users` WHERE `email` = '$email'";
    $getUserStatus = mysqli_query($conn,$getUser) or die(mysqli_error($conn));
    $getUserRow = array();

    if(mysqli_num_rows($getUserStatus) > 0) {

        while($r = mysqli_fetch_assoc($getUserStatus)) {
            $getUserRow[] = $r;
        }
        $status = true;
        $response = "Profile fetched!";

    } else {

        $status = false;
        $response = "Unable to fetch profile!";

    }

    $responseArray = array("status" => $status, "response" => $response,"user" => $getUserRow);
    echo json_encode($responseArray,JSON_PRETTY_PRINT);
?>