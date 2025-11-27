import '../styles/Erreur.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

function Erreur() {
  return (
    <main className="error-page">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oups... Cette page est introuvable.</h2>
      <p className="error-text">
        Il semble que vous ayez saisi une mauvaise adresse.
        Si besoin, contactez-moi :
      </p>

      <a 
        href="https://wa.me/225712150062"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp className="whatsapp-icon" />
        Écrire sur WhatsApp
      </a>

      <Link to="/" className="error-btn">Retour à l’accueil</Link>
    </main>
  );
}

export default Erreur;
