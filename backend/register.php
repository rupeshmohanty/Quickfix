<?php
   // include header
   include('./headers.php');

   // include db connection!
   include('./db.php');

   // declare variables!
   $name = "";
   $userId = "";
   $email = "";
   $phone = "";
   $profession = "";
   $password = "";
   $newPassword = "";
   $salt = uniqid();
   $createdAt = date('Y-m-d H:i');

   // get form data!
   if(isset($_POST['name'])) {
    $name = $_POST['name'];
   }
   
   if(isset($_POST['userId'])) {
    $userId = $_POST['userId'];
   }

   if(isset($_POST['email'])) {
       $email = $_POST['email'];
   }

   if(isset($_POST['phone'])) {
    $phone = $_POST['phone'];
    }

   if(isset($_POST['profession'])) {
    $profession = $_POST['profession'];
    }

   if(isset($_POST['password'])) {
       $password = $_POST['password'];
   }

   if($email == "" && $name == "" && $password == "" && $userId == "" && $phone == "" && $profession == "") die();

   if($_POST) {
       // check if user exists or not!
       $checkUser = "SELECT * FROM `users` WHERE `email` = '$email' AND `userId` = '$userId'";
       $checkUserStatus = mysqli_query($conn,$checkUser) or die(mysqli_error($conn));
       
       if(mysqli_num_rows($checkUserStatus) > 0) {

        echo json_encode(["sent" => false, "message" => "User already exists! Please login to proceed!"]);

       } else {

        $newPassword = md5(md5($password.$salt));
        // insert user 
        $insertUser = "INSERT INTO `users`(`email`,`name`,`userId`,`phone`,`profession`,`password`,`salt`,`createdAt`) VALUES('$email','$name','$userId','$phone','$profession','$newPassword','$salt','$createdAt')";
        $insertUserStatus = mysqli_query($conn,$insertUser) or die(mysqli_error($conn));

        if($insertUserStatus) {

            echo json_encode(["sent" => true, "message" => "Successfully registered!"]);

        } else {

            echo json_encode(["sent" => false, "message" => "Unable to enter user into the database!"]);

        }
    }
}
?>