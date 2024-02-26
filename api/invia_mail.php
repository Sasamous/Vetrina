<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $messaggio = $_POST["messaggio"];

  $mail = new PHPMailer(true);

  try {
    $mail->isSMTP();
    $mail->Host = getenv('SMTP_HOST');
    $mail->SMTPAuth = true;
    $mail->Username = getenv('SMTP_USER');
    $mail->Password = getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = getenv('SMTP_PORT');

    $mail->setFrom($email, $nome);
    $mail->addAddress('tua@email.com', 'Nome del Destinatario');

    $mail->isHTML(true);
    $mail->Subject = "Vetrina - Messaggio da $email";
    $mail->Body = "Nome: $nome<br>Email: $email<br>Messaggio: $messaggio";

    $mail->send();
    echo 'Il messaggio è stato inviato';
  } catch (Exception $e) {
    echo "Il messaggio non può essere inviato. Mailer Error: {$mail->ErrorInfo}";
  }

  header("Location: conferma.html");
  exit;
}
