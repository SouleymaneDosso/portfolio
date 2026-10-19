import styled from "styled-components";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { ThemeContext } from "../../pages/context";

const FooterWrapper = styled.footer`
  margin-top: 5rem;
  padding: 4rem 1.5rem 2rem;
  background: ${({ $isDark }) =>
    $isDark
      ? "linear-gradient(180deg, #0b1627 0%, #08111f 100%)"
      : "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)"};

  border-top: 1px solid
    ${({ $isDark }) => ($isDark ? "#1d3048" : "#dce3eb")};

  color: ${({ $isDark }) => ($isDark ? "#e8eef6" : "#172033")};
`;

const FooterContent = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
`;

const Brand = styled.div`
  h2 {
    margin: 0 0 0.8rem;
    font-size: 1.7rem;
    font-weight: 800;
    letter-spacing: -0.5px;

    span {
      color: #00bfff;
    }
  }

  p {
    max-width: 420px;
    margin: 0;
    line-height: 1.7;
    color: ${({ $isDark }) => ($isDark ? "#9eafc3" : "#64748b")};

    @media (max-width: 600px) {
      margin: 0 auto;
    }
  }
`;

const FooterTitle = styled.h3`
  margin: 0 0 1.2rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #00bfff;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  a {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    color: ${({ $isDark }) => ($isDark ? "#cbd5e1" : "#475569")};
    text-decoration: none;
    transition: 0.25s ease;

    &:hover {
      color: #00bfff;
      transform: translateX(4px);
    }
  }

  @media (max-width: 600px) {
    align-items: center;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;

  a {
    width: 44px;
    height: 44px;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ $isDark }) =>
      $isDark ? "#122238" : "#ffffff"};

    border: 1px solid
      ${({ $isDark }) => ($isDark ? "#203852" : "#e2e8f0")};

    color: ${({ $isDark }) => ($isDark ? "#dbeafe" : "#334155")};

    font-size: 1.1rem;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transition: 0.25s ease;

    &:hover {
      transform: translateY(-4px);
      background: #00bfff;
      border-color: #00bfff;
      color: white;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Bottom = styled.div`
  max-width: 1150px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;

  border-top: 1px solid
    ${({ $isDark }) => ($isDark ? "#1d3048" : "#dce3eb")};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  p {
    margin: 0;
    font-size: 0.85rem;
    color: ${({ $isDark }) => ($isDark ? "#8294aa" : "#64748b")};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const BackToTop = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00bfff;
  color: white;
  cursor: pointer;

  font-size: 1rem;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 191, 255, 0.3);
  }
`;

const MobileBar = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  display: none;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(8,17,31,0.94)" : "rgba(255,255,255,0.94)"};

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-top: 1px solid
    ${({ $isDark }) => ($isDark ? "#1d3048" : "#e2e8f0")};

  z-index: 3000;

  padding: 0.55rem 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

const MobileLink = styled(Link)`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  color: ${({ $active, $isDark }) =>
    $active ? "#00bfff" : $isDark ? "#94a3b8" : "#64748b"};

  text-decoration: none;
  font-size: 1.3rem;

  transition: 0.2s ease;

  span {
    font-size: 0.65rem;
    font-weight: 600;
  }

  &:active {
    transform: scale(0.92);
  }
`;

function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FooterWrapper $isDark={isDark}>
        <FooterContent>
          <Brand $isDark={isDark}>
            <h2>
              Dosso <span>Souleymane</span>
            </h2>

            <p>
              Développeur web passionné par la création d'interfaces modernes,
              performantes et pensées pour offrir une excellente expérience
              utilisateur.
            </p>
          </Brand>

          <div>
            <FooterTitle>Navigation</FooterTitle>

            <Navigation $isDark={isDark}>
              <Link to="/">
                <FaHome />
                Accueil
              </Link>

              <Link to="/#apropos">
                <FaUserAlt />
                À propos
              </Link>

              <Link to="/#projets">
                <FaProjectDiagram />
                Projets
              </Link>

              <Link to="/contacts">
                <FaEnvelope />
                Contact
              </Link>
            </Navigation>
          </div>

          <div>
            <FooterTitle>Me retrouver</FooterTitle>

            <Socials $isDark={isDark}>
              <a
                href="https://github.com/SouleymaneDosso"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/souleymane-dosso-50709a418/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/225712150062"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:dosso070000@gmail.com"
                aria-label="Gmail"
              >
                <FaEnvelope />
              </a>
            </Socials>
          </div>
        </FooterContent>

        <Bottom $isDark={isDark}>
          <p>
            © {new Date().getFullYear()} Dosso Souleymane — Tous droits
            réservés.
          </p>

          <BackToTop
            onClick={scrollToTop}
            aria-label="Retour en haut"
            title="Retour en haut"
          >
            <FaArrowUp />
          </BackToTop>
        </Bottom>
      </FooterWrapper>

      <MobileBar $isDark={isDark}>
        <MobileLink
          to="/"
          $active={location.pathname === "/"}
          $isDark={isDark}
        >
          <FaHome />
          <span>Accueil</span>
        </MobileLink>

        <MobileLink
          to="/#apropos"
          $active={location.hash === "#apropos"}
          $isDark={isDark}
        >
          <FaUserAlt />
          <span>À propos</span>
        </MobileLink>

        <MobileLink
          to="/#projets"
          $active={location.hash === "#projets"}
          $isDark={isDark}
        >
          <FaProjectDiagram />
          <span>Projets</span>
        </MobileLink>

        <MobileLink
          to="/contacts"
          $active={location.pathname === "/contacts"}
          $isDark={isDark}
        >
          <FaEnvelope />
          <span>Contact</span>
        </MobileLink>
      </MobileBar>
    </>
  );
}

export default Footer;