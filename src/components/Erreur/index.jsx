import '../styles/Erreur.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { ThemeContext } from './../../pages/context/index';
import styled from 'styled-components'
import { useContext } from 'react';

const ThemeErr = styled.main`
background-color: ${({isFullink})=>
  isFullink ? "#0D192B" : "white"};
color : ${({isFullink})=> isFullink ? "white" : "#222"};

  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const WhatsAppBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#00bfff" : "#25D366")};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 1rem;
  text-decoration: none;
`;

const ErrorBtn = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "white" : "#222")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#0D192B" : "white")};
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
`;

function Erreur() {

  const {theme} = useContext(ThemeContext )
  const isFullink = theme === 'dark'
  

  return (


    <ThemeErr isFullink={isFullink}  >
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oups... Cette page est introuvable.</h2>
      <p className="error-text">
        Il semble que vous ayez saisi une mauvaise adresse.
        Si besoin, contactez-moi :
      </p>

      <WhatsAppBtn isFullink={isFullink} 
        href="https://wa.me/225712150062"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp/>
        Écrire sur WhatsApp
      </WhatsAppBtn>

      <ErrorBtn isFullink={isFullink} to="/" className="error-btn">Retour à l’accueil</ErrorBtn>
    </ThemeErr>
  );
}

export default Erreur;
