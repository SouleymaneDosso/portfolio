import "./styles/Accueil.css";
import styled, { keyframes } from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../pages/context";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaTools,
  FaGitAlt,
  FaArrowUp,
  FaShareAlt,
} from "react-icons/fa";

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
  background-color: ${({ $isDark }) => ($isDark ? "#0D192B" : "#f4f4f4")};

  h1 { color: ${({ $isDark }) => ($isDark ? "white" : "#222")}; }
  h2 { color: ${({ $isDark }) => ($isDark ? "#00bfff" : "#0077cc")}; }
  p { color: ${({ $isDark }) => ($isDark ? "#ccc" : "#333")}; }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Button = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== "primary",
})`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.7rem 1.5rem;
  background-color: ${({ primary }) => (primary ? "#00bfff" : "#222")};
  color: white;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ primary }) => (primary ? "#009fd4" : "#444")};
  }
`;

const Aside = styled.aside`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ $isDark }) => ($isDark ? "#0D192B" : "#f4f4f4")};
  padding: 0.5rem;
  border-radius: 8px 0 0 8px;
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 4px 12px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.1)"};
  z-index: 1000;

  a {
    color: ${({ $isDark }) => ($isDark ? "white" : "#222")};
    font-size: 1.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: #00bfff;
    }
  }

  @media (max-width: 768px) { display: none; }
`;

const MobileAsideButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #00bfff;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);

  &:hover { transform: scale(1.1); }

  @media (max-width: 768px) { display: flex; }
`;

const MobileAsidePanel = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ $isDark }) => ($isDark ? "#0D192B" : "#f4f4f4")};
  padding: 0.8rem;
  border-radius: 10px;
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 4px 12px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.1)"};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.3s ease;
  z-index: 999;

  a {
    color: ${({ $isDark }) => ($isDark ? "white" : "#222")};
    font-size: 1.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: #00bfff;
    }
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #00bfff;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 50%;
  font-size: 1.3rem;
  cursor: pointer;
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;

  &:hover { transform: scale(1.1); }
`;

const ProjetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjetCardWrapper = styled.div`
  background-color: ${({ $isDark }) => ($isDark ? "#1a2a40" : "#fff")};
  color: ${({ $isDark }) => ($isDark ? "white" : "#222")};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 4px 12px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.1)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease;
`;

const ProjetLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ $isDark }) => ($isDark ? "white" : "#222")};
    font-size: 1.2rem;
    transition: transform 0.2s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #00bfff;
    }
  }
`;

const CardWrapper = styled.section`
  background: ${({ $isDark }) => ($isDark ? "#0D192B" : "#f4f4f4")};
  padding: 2.5rem;
  border-radius: 16px;
  margin: 2rem auto;
  max-width: 1100px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ $isDark }) => ($isDark ? "#00bfff" : "#0077cc")};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ $isDark }) => ($isDark ? "#15263C" : "white")};
  padding: 1.8rem;
  border-radius: 14px;
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 4px 12px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.1)"};
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.3rem;
  color: ${({ $isDark }) => ($isDark ? "#00bfff" : "#0077cc")};
`;

const SkillItem = styled.div`
  margin-top: 1.2rem;
`;

const SkillLabel = styled.p`
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: ${({ $isDark }) => ($isDark ? "#e6e6e6" : "#222")};
`;

const BarBackground = styled.div`
  background: ${({ $isDark }) => ($isDark ? "#1e324d" : "#dbefff")};
  height: 12px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

const BarProgress = styled.div`
  height: 100%;
  width: ${({ $level }) => $level}%;
  background: ${({ $isDark }) => ($isDark ? "#00bfff" : "#0077cc")};
  border-radius: 12px;
  transition: width 0.9s ease;
`;

function AnimateOnScroll({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

function ProjetCard({ title, description, githubLink, demoLink, $isDark }) {
  return (
    <AnimateOnScroll>
      <ProjetCardWrapper $isDark={$isDark}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ProjetLinks $isDark={$isDark}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          )}
        </ProjetLinks>
      </ProjetCardWrapper>
    </AnimateOnScroll>
  );
}

function Accueil() {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileAsideOpen, setMobileAsideOpen] = useState(false);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const projets = [
    {
      title: "Projet 1",
      description: "Affichage de la météo d'une ville (bibliothèque npm)",
      githubLink: "https://github.com/SouleymaneDosso/mon-projet-m-t-o-",
      demoLink: "https://meteo-five-sand.vercel.app/",
    },
    {
      title: "Projet 2",
      description: "Projet openclassrooms (Apprentissage)",
      githubLink: "https://github.com/SouleymaneDosso/projet-openclassrooms-agence",
      demoLink: "#",
    },
    { title: "Projet 3", description: "Site ecommerce", githubLink: "#", demoLink: "#" },
  ];

  return (
    <>
      <HeroSection $isDark={isDarkMode}>
        <h1>Bienvenue sur mon portfolio</h1>
        <h2>Dosso Souleymane</h2>
        <p>Développeur backend en formation continue... Découvrez mes projets et compétences ci-dessous.</p>
        <div>
          <Button as="a" href="#projets" primary>Voir mes projets</Button>
          <Button to="/contacts">Me contacter</Button>
        </div>
      </HeroSection>

      <Aside $isDark={isDarkMode}>
        <a href="https://github.com/SouleymaneDosso" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </Aside>

      <MobileAsideButton onClick={() => setMobileAsideOpen(!mobileAsideOpen)}><FaShareAlt /></MobileAsideButton>
      <MobileAsidePanel $isDark={isDarkMode} $open={mobileAsideOpen}>
        <a href="https://github.com/SouleymaneDosso" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </MobileAsidePanel>

      <Section id="apropos">
        <Title $isDark={isDarkMode}>À propos</Title>
        <AnimateOnScroll>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: isDarkMode ? "#ccc" : "#333" }}>
            Je suis Dosso Souleymane, développeur backend passionné, actuellement en formation continue. J'aime créer des projets utiles et bien structurés, tout en apprenant constamment les nouvelles technologies.
          </p>
        </AnimateOnScroll>
      </Section>

      <Section id="projets">
        <Title $isDark={isDarkMode}>Mes Projets</Title>
        <p>Voici quelques-uns de mes projets récents.</p>
        <ProjetsGrid>
          {projets.map((p, i) => (<ProjetCard key={i} {...p} $isDark={isDarkMode} />))}
        </ProjetsGrid>
      </Section>

      <CardWrapper $isDark={isDarkMode}>
        <Title $isDark={isDarkMode}>Mes Compétences</Title>
        <CardsGrid>
          {[
            { title: "Frontend", icon: <FaTools />, skills: [{ label: "HTML", level: 100 }, { label: "CSS", level: 100 }, { label: "JS", level: 80 }, { label: "React", level: 80 }] },
            { title: "Backend", icon: <FaTools />, skills: [{ label: "Appels API", level: 85 }] },
            { title: "Outils & Méthodes", icon: <FaGitAlt />, skills: [{ label: "Git/GitHub", level: 90 }, { label: "Postman", level: 85 }] }
          ].map((c, idx) => (
            <AnimateOnScroll key={idx}>
              <Card $isDark={isDarkMode}>
                <CardTitle $isDark={isDarkMode}>{c.icon} {c.title}</CardTitle>
                {c.skills.map((s, i) => (
                  <SkillItem key={i}>
                    <SkillLabel $isDark={isDarkMode}>{s.label} — {s.level}%</SkillLabel>
                    <BarBackground $isDark={isDarkMode}>
                      <BarProgress $isDark={isDarkMode} $level={s.level} />
                    </BarBackground>
                  </SkillItem>
                ))}
              </Card>
            </AnimateOnScroll>
          ))}
        </CardsGrid>
      </CardWrapper>

      <ScrollTopButton $visible={showScrollTop} onClick={scrollToTop}><FaArrowUp /></ScrollTopButton>
    </>
  );
}

export default Accueil;
