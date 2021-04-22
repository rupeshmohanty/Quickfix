<?php
    // include header!
    include('./headers.php');

    // include db connection!
    include('./db.php');

    // declare variables!
    $email = $_GET['email'];

    // get user details!
    $getUser = "SELECT * FROM `users` WHERE `email` = '$email'";
    $getUserStatus = mysqli_query($conn,$getUser) or die(mysqli_error($conn));
    $getUserRow = array();

    if(mysqli_num_rows($getUserStatus) > 0) {

        while($r = mysqli_fetch_assoc($getUserStatus)) {
            $getUserRow[] = $r;
        }

        echo json_encode(["sent" => true, "user" => $getUserRow]);

    } else {

        echo json_encode(["sent" => false, "message" => "Unable to fetch the user details!"]);

    }
?>