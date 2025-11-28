import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../pages/context";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";


const FooterContainer = styled.footer`
  margin-top: 4rem;
  padding: 3rem 1.5rem;
  background: ${({ $isDark }) => ($isDark ? "rgba(13,25,43,0.8)" : "rgba(255,255,255,0.7)")};
  backdrop-filter: blur(12px);
  border-top: 1px solid ${({ $isDark }) => ($isDark ? "#1f2d40" : "#ccc")};
  color: ${({ $isDark }) => ($isDark ? "#dcdcdc" : "#333")};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 -6px 20px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    display: none; /* masqué sur mobile */
  }
`;

const IconNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: ${({ $isDark }) => ($isDark ? "#15263C" : "#e0e0e0")};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.45rem;
    color: ${({ $isDark }) => ($isDark ? "white" : "#222")};
    transition: 0.3s ease;
    box-shadow: ${({ $isDark }) =>
      $isDark
        ? "0 4px 12px rgba(0,0,0,0.6)"
        : "0 4px 12px rgba(0,0,0,0.15)"};

    &:hover {
      transform: scale(1.13);
      background: #00bfff;
      color: white;
    }
  }
`;

const Copy = styled.p`
  opacity: 0.7;
  font-size: 0.9rem;
`;


const MobileBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ $isDark }) =>
    $isDark ? "rgba(13,25,43,0.75)" : "rgba(255,255,255,0.7)"};
  backdrop-filter: blur(10px);
  border-top: 1px solid ${({ $isDark }) => ($isDark ? "#1f2d40" : "#ccc")};
  display: flex;
  justify-content: space-around;
  padding: 0.7rem 0;
  z-index: 2000;

  @media (min-width: 769px) {
    display: none; 
  }
`;

const MobileIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ $active }) => ($active ? "#00bfff" : "inherit")};
  font-size: ${({ $active }) => ($active ? "1.8rem" : "1.55rem")};
  transition: 0.3s ease;

  &:hover {
    color: #00bfff;
    transform: translateY(-3px);
  }
`;


function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const location = useLocation();

  return (
    <>
      
      <FooterContainer $isDark={isDark}>
        <IconNav $isDark={isDark}>
          <Link to="/">
            <FaHome />
          </Link>

          <a href="#apropos">
            <FaUserAlt />
          </a>

          <a href="#projets">
            <FaProjectDiagram />
          </a>

          <Link to="/contacts">
            <FaEnvelope />
          </Link>
        </IconNav>

        <Copy>© {new Date().getFullYear()} — Dosso Souleymane</Copy>
      </FooterContainer>
      
      <MobileBar $isDark={isDark}>
        <MobileIcon
          to="/"
          $active={location.pathname === "/"}
        >
          <FaHome />
        </MobileIcon>

        <MobileIcon
          as="a"
          href="#apropos"
          $active={location.hash === "#apropos"}
        >
          <FaUserAlt />
        </MobileIcon>

        <MobileIcon as="a" href="#projets">
          <FaProjectDiagram />
        </MobileIcon>

        <MobileIcon
          to="/contacts"
          $active={location.pathname === "/contacts"}
        >
          <FaEnvelope />
        </MobileIcon>
      </MobileBar>
    </>
  );
}

export default Footer;
