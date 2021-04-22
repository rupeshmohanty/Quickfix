<?php
    // include header files
    include('./headers.php');

    // include db connection!
    include('./db.php');

    // declaring variables!
    $name = "";
    $brief = "";
    $phone = "";
    $address = "";
    $technician = "";
    $description = "";
    $createdAt = date('Y-m-d H:i');

    // getting form data!
    if(isset($_POST['name'])) {
        $name = $_POST['name'];
    }
    if(isset($_POST['brief'])) {
        $brief = $_POST['brief'];
    }
    if(isset($_POST['phone'])) {
        $phone = $_POST['phone'];
    }
    if(isset($_POST['address'])) {
        $address = $_POST['address'];
    }
    if(isset($_POST['technician'])) {
        $technician = $_POST['technician'];
    }
    if(isset($_POST['description'])) {
        $description = $_POST['description'];
    }

    // if fields are empty, then the process dies!
    if($name == "" && $brief == "" && $phone == "" && $address == "" && $technician == "" && $description == "") die();

    if($_POST){
        // post issue!
        $postIssue = "INSERT INTO `issue`(`name`,`brief`,`phone`,`address`,`technician`,`description`,`createdAt`) VALUES('$name','$brief','$phone','$address','$technician','$description','$createdAt')";
        $postIssueStatus = mysqli_query($conn,$postIssue) or die(mysqli_error($conn));

        if($postIssueStatus) {

            echo json_encode(["sent" => true, "message" => "Your issue has been posted!"]);

        } else {

            echo json_encode(["sent" => false, "message" => "Unable to take your issue at the moment right now!"]);

        }
    }
?>