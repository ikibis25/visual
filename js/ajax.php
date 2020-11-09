<?php
$un=$_POST['first_name'];
$ph=$_POST['phone_number'];
$em=$_POST['email'];
$su=$_POST['subject'];
$msg=$_POST['message'];

$to = "support@templatebundle.net";
$subject = "My subject";
$txt = "Hello admin! query is send by the user and user details are : name : ".$un." phone : ".$ph." email : ".$em." subject : ".$su." message : ".$msg."";
$headers = "From: webmaster@example.com";

echo mail($to,$subject,$txt,$headers);


?>