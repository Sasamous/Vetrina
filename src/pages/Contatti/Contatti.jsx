import { createSignal } from 'solid-js';
import Snackbar from '../../components/Snackbar/Snackbar';
import './Contatti.css';

const Contatti = () => {
  const indirizzo = "Via Delle Vie 7, Città";
  const telefono = "0123456789";
  const mail = "info@azienda.com";

  const [nome, setNome] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [messaggio, setMessaggio] = createSignal("");
  const [showSnackbar, setShowSnackbar] = createSignal(false);
  const [snackbarMessage, setSnackbarMessage] = createSignal("");

  const resetForm = () => {
    setNome("");
    setEmail("");
    setMessaggio("");
  }

  const closeSnackbar = () => {
    setShowSnackbar(false);
  }

  const openSnackbar = (msg) => {
    setShowSnackbar(true);
    setSnackbarMessage(msg);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    openSnackbar("Messaggio inviato con insuccesso!");
    if (nome() && email() && messaggio()) {
      fetch("/api/invia_mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome(),
          email: email(),
          messaggio: messaggio(),
        }),
      })
        .then(response => {
          if (response.ok) {
            openSnackbar("Messaggio inviato con successo!");
            resetForm();
          } else {
            openSnackbar("Errore nell'invio del messaggio");
          }
        })
        .catch(error => {
          openSnackbar("Errore nell'invio del messaggio: ", error);
        });
    } else {
      openSnackbar("Per favore, compila tutti i campi del form.");
    }
  };
  return (
    <main>
      <section id="contatti">
        <div class="informazioni-contatto">
          <h2>Informazioni di Contatto</h2>
          <p>Indirizzo: <a href={`https://maps.google.com/?q=${indirizzo}`} target="_blank">{indirizzo}</a></p>
          <p>Telefono: <a href={`tel:+39${telefono}`}>+39 {telefono}</a></p>
          <p>Email: <a href={`mailto:${mail}`}>{mail}</a></p>
        </div>
        <div class="modulo-contatto">
          <h2>Modulo di Contatto</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={nome()} onInput={(e) => setNome(e.target.value)} placeholder="Il tuo nome" required />
            <input type="email" value={email()} onInput={(e) => setEmail(e.target.value)} placeholder="La tua email" required />
            <textarea value={messaggio()} onInput={(e) => setMessaggio(e.target.value)} placeholder="Il tuo messaggio" rows="10" required />
            <button type="submit">Invia Messaggio</button>
          </form>
        </div>
      </section>
      <Snackbar open={showSnackbar()} message={snackbarMessage()} closeSnackbar={closeSnackbar} />
    </main>
  );
};

export default Contatti;