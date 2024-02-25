import { FacebookIcon, InstagramIcon, XIcon } from '../Icons/Icons'
import './Footer.css'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-info">
          <h4>Contattaci</h4>
          <p>Email: info@example.com</p>
          <p>Telefono: +1234567890</p>
          <p>Indirizzo: Via Delle Vie 7, 12345 Città, Stato</p>
        </div>
        <div class="footer-links">
          <h4>Link Utili</h4>
          <ul>
            <li><a href="/chi-siamo">Chi siamo</a></li>
            <li><a href="/prodotti">Prodotti</a></li>
            <li><a href="/servizi">Servizi</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://www.facebook.com/example"><FacebookIcon /></a></li>
            <li><a href="https://twitter.com/example"><XIcon /></a></li>
            <li><a href="https://www.instagram.com/example"><InstagramIcon /></a></li>
          </ul>
        </div>
      </div>
      <p>Vetrina {new Date().getFullYear()} ©</p>
    </footer>
  )
}

export default Footer