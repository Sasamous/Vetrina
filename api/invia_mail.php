<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $messaggio = $_POST["messaggio"];

  $destinatario = "tua@email.com";
  $oggetto = "Vetrina - Messaggio da $email";
  $corpo = "Nome: $nome\n\nEmail: $email\n\nMessaggio: $messaggio";
  mail($destinatario, $oggetto, $corpo);

  header("Location: conferma.html");
  exit;
}