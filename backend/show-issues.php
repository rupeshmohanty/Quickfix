<?php
    // include headers
    include('./headers.php');

    // include db connection
    include('./db.php');

    // declaring variables
    $technician = "";

    // get details of the issues!
    $getIssue = "SELECT * FROM `issues` WHERE `technician` = '$technician'";
    $getIssueStatus = mysqli_query($conn,$getIssue) or die(mysqli_error($conn));
    $getIssueRow = array();

    if(mysqli_num_rows($getIssueStatus) > 0){

        while($r = mysqli_fetch_assoc($getIssueStatus)) {
            $getIssueRow[] = $r;
        }

        echo json_encode($getIssueRow);

    } else {

        echo json_encode(["sent" => false, "message" => "Unable to fetch issues!"]);

    }
?>