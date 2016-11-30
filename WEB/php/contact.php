<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['firstName']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {

  //check if any of the inputs are empty
  if (empty($_POST['firstName']) || empty($_POST['email']) || empty($_POST['message'])) {
    $data = array('success' => false, 'message' => 'Debes llenar todos los campos del formulario.');
    echo json_encode($data);
    exit;
  }

  //create an instance of PHPMailer
  $mail = new PHPMailer();

  $mail->From = $_POST['email'];
  $mail->FromName = $_POST['firstName'];
  $mail->AddAddress('juan.bonforti@gmail.com');
  $mail->Subject = 'Electromilenio - Consulta desde la WEB';
  $mail->IsHTML(true);
  $mail->Body = '<html>
                 '.$_POST['message'].'
                 </html>';

  if (isset($_POST['ref'])) {
      $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
  }

  if(!$mail->send()) {
      $data = array('success' => false, 'message' => 'El mensaje no pudo ser enviado. Error: ' . $mail->ErrorInfo);
      echo json_encode($data);
      exit;
  }

  $data = array('success' => true, 'message' => 'Gracias por su contacto!');
  echo json_encode($data);

} else {
  $data = array('success' => false, 'message' => 'Debes llenar todos los campos del formulario.');
  echo json_encode($data);
}