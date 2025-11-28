import './styles/Accueil.css';
import styled, { keyframes } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../pages/context';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  animation: ${fadeUp} 1s ease-out;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#0D192B' : '#f4f4f4')};

  h1 { color: ${({ isDarkMode }) => (isDarkMode ? 'white' : '#222')}; }
  h2 { color: ${({ isDarkMode }) => (isDarkMode ? '#00bfff' : '#0077cc')}; }
  p { color: ${({ isDarkMode }) => (isDarkMode ? '#ccc' : '#333')}; }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Button = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'primary'
})`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.7rem 1.5rem;
  background-color: ${({ primary }) => (primary ? '#00bfff' : '#222')};
  color: white;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ primary }) => (primary ? '#009fd4' : '#444')};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a { color: ${({ isDarkMode }) => (isDarkMode ? 'white' : '#222')}; font-size: 1.5rem; }
`;

const ProjetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjetCardWrapper = styled.div`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1a2a40' : '#fff')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : '#222')};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${({ isDarkMode }) => (isDarkMode ? '0 4px 12px rgba(0,0,0,0.6)' : '0 4px 12px rgba(0,0,0,0.1)')};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ isDarkMode }) => (isDarkMode ? '0 8px 20px rgba(0,0,0,0.7)' : '0 8px 20px rgba(0,0,0,0.2)')};
  }

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#00bfff' : '#0077cc')};
  }

  p { margin-bottom: 1rem; }
`;

const ProjetLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : '#222')};
    font-size: 1.2rem;
    transition: transform 0.2s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #00bfff;
    }
  }
`;

function ProjetCard({ title, description, githubLink, demoLink, isDarkMode }) {
  return (
    <ProjetCardWrapper isDarkMode={isDarkMode}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ProjetLinks isDarkMode={isDarkMode}>
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>}
      </ProjetLinks>
    </ProjetCardWrapper>
  );
}

function Accueil() {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const projets = [
    { title: 'Projet 1', description: "Affichage de la météo d'une ville (bibliothèque npm)", githubLink: '#', demoLink: '#' },
    { title: 'Projet 2', description: 'Projet openclassrooms (Apprentissage)', githubLink: '#', demoLink: '#' },
    { title: 'Projet 3', description: 'Site ecommerce', githubLink: '#', demoLink: '#' },
  ];

  return (
    <>
      <HeroSection isDarkMode={isDarkMode}>
        <h1>Bienvenue sur mon portfolio</h1>
        <h2>Dosso Souleymane</h2>
        <p>Développeur backend en formation continue. Découvrez mes projets et compétences ci-dessous.</p>
        <div>
          <Button as="a" href="#projets" primary>Voir mes projets</Button>
          <Button to="#contact">Me contacter</Button>
        </div>
        <Socials isDarkMode={isDarkMode}>
          <a href="https://github.com/SouleymaneDosso" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </Socials>
      </HeroSection>

      <Section id="projets">
        <h2>Mes Projets</h2>
        <p>Voici quelques-uns de mes projets récents.</p>
        <ProjetsGrid>
          {projets.map((p, index) => (
            <ProjetCard key={index} {...p} isDarkMode={isDarkMode} />
          ))}
        </ProjetsGrid>
      </Section>
    </>
  );
}

export default Accueil;
