<?php 

$recepient = "pomankrentovsky@gmail.com";
$sitename = "My portfolio";

$email = trim($_POST["email"]);
$message = "Email: $email";

$pagetitle = "Новый email с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient")
?>