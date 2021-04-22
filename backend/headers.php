<?php
   // header
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
   header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
   $rest_json = file_get_contents("php://input");
   $_POST = json_decode($rest_json, true);
?>