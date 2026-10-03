
import "./styles/Accueil.css";
import styled, { keyframes } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../pages/context";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaExternalLinkAlt,
  FaArrowRight,
  FaArrowUp,
  FaDownload,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaTools,
  FaTimes,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
`;

/* =========================================================
   GLOBAL CONTAINER
========================================================= */

const Page = styled.main`
  min-height: 100vh;

  background: ${({ $isDark }) =>
    $isDark
      ? "radial-gradient(circle at 80% 0%, rgba(14,165,233,.12), transparent 30%), #050b14"
      : "radial-gradient(circle at 80% 0%, rgba(14,165,233,.10), transparent 30%), #f8fafc"};

  color: ${({ $isDark }) =>
    $isDark ? "#f8fafc" : "#0f172a"};

  overflow: hidden;
`;

const Container = styled.div`
  width: min(1150px, calc(100% - 2rem));
  margin: 0 auto;
`;

/* =========================================================
   HERO
========================================================= */

const Hero = styled.section`
  min-height: calc(100vh - 80px);

  display: flex;
  align-items: center;

  padding: 5rem 0 4rem;

  @media (max-width: 850px) {
    min-height: auto;
    padding: 4rem 0;
  }
`;

const HeroGrid = styled.div`
  display: grid;

  grid-template-columns: 1.1fr 0.9fr;

  gap: 4rem;

  align-items: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  animation: ${fadeUp} 0.8s ease-out;
`;

const Availability = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  padding: 0.5rem 0.85rem;

  border-radius: 999px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(34,197,94,.08)" : "#ecfdf5"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(34,197,94,.18)" : "#bbf7d0"};

  color: ${({ $isDark }) =>
    $isDark ? "#86efac" : "#15803d"};

  font-size: 0.85rem;
  font-weight: 700;

  margin-bottom: 1.4rem;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #22c55e;

  box-shadow: 0 0 0 4px rgba(34,197,94,.12);
`;

const HeroTitle = styled.h1`
  margin: 0;

  font-size: clamp(2.7rem, 6vw, 5rem);

  line-height: 1.02;

  letter-spacing: -0.055em;

  color: ${({ $isDark }) =>
    $isDark ? "#ffffff" : "#0f172a"};

  span {
    display: block;

    margin-top: 0.35rem;

    background: linear-gradient(
      90deg,
      #0284c7,
      #0ea5e9,
      #38bdf8
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubtitle = styled.p`
  max-width: 680px;

  margin: 1.5rem 0;

  color: ${({ $isDark }) =>
    $isDark ? "#a7b4c5" : "#64748b"};

  font-size: 1.1rem;

  line-height: 1.85;

  @media (max-width: 850px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 1.7rem;

  color: ${({ $isDark }) =>
    $isDark ? "#94a3b8" : "#64748b"};

  font-size: 0.9rem;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;

  padding: 0.95rem 1.3rem;

  border-radius: 12px;

  background: linear-gradient(
    135deg,
    #0284c7,
    #0ea5e9
  );

  color: white;

  text-decoration: none;

  font-weight: 800;

  box-shadow: 0 12px 30px rgba(14,165,233,.18);

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 35px rgba(14,165,233,.25);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;

  padding: 0.95rem 1.3rem;

  border-radius: 12px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.06)" : "#ffffff"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.1)" : "#e2e8f0"};

  color: ${({ $isDark }) =>
    $isDark ? "#ffffff" : "#0f172a"};

  text-decoration: none;

  font-weight: 800;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #0ea5e9;
  }
`;

/* =========================================================
   AVATAR
========================================================= */

const AvatarArea = styled.div`
  display: flex;
  justify-content: center;

  animation:
    ${fadeUp} 0.9s ease-out,
    ${float} 5s ease-in-out infinite;

  @media (max-width: 850px) {
    order: -1;
  }
`;

const AvatarWrapper = styled.button`
  position: relative;

  width: min(370px, 75vw);
  aspect-ratio: 1;

  padding: 0;

  border: 0;

  border-radius: 50%;

  background: transparent;

  cursor: pointer;

  &:focus-visible {
    outline: 3px solid #0ea5e9;
    outline-offset: 5px;
  }

  &::before {
    content: "";

    position: absolute;

    inset: -12px;

    border-radius: 50%;

    border: 1px solid
      ${({ $isDark }) =>
        $isDark
          ? "rgba(56,189,248,.25)"
          : "rgba(2,132,199,.2)"};
  }

  &::after {
    content: "";

    position: absolute;

    inset: -28px;

    border-radius: 50%;

    border: 1px dashed
      ${({ $isDark }) =>
        $isDark
          ? "rgba(56,189,248,.12)"
          : "rgba(2,132,199,.12)"};
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;

  border-radius: 50%;

  border: 7px solid
    ${({ $isDark }) =>
      $isDark ? "#0b1625" : "#ffffff"};

  box-shadow:
    0 25px 70px
      ${({ $isDark }) =>
        $isDark
          ? "rgba(0,0,0,.5)"
          : "rgba(15,23,42,.15)"};
`;

/* =========================================================
   STATS
========================================================= */

const Stats = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;

  margin-top: 2.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  padding: 1rem;

  border-radius: 14px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.035)" : "#ffffff"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.07)" : "#e2e8f0"};

  text-align: center;
`;

const StatNumber = styled.strong`
  display: block;

  color: ${({ $isDark }) =>
    $isDark ? "#38bdf8" : "#0284c7"};

  font-size: 1.35rem;
`;

const StatText = styled.span`
  color: ${({ $isDark }) =>
    $isDark ? "#94a3b8" : "#64748b"};

  font-size: 0.8rem;
`;

/* =========================================================
   SECTIONS
========================================================= */

const Section = styled.section`
  padding: 5rem 0;

  border-top: 1px solid
    ${({ $isDark }) =>
      $isDark
        ? "rgba(255,255,255,.05)"
        : "rgba(15,23,42,.06)"};
`;

const SectionHeader = styled.div`
  max-width: 720px;

  margin: 0 auto 2.8rem;

  text-align: center;
`;

const SectionLabel = styled.div`
  margin-bottom: 0.6rem;

  color: ${({ $isDark }) =>
    $isDark ? "#38bdf8" : "#0284c7"};

  font-size: 0.8rem;

  font-weight: 800;

  text-transform: uppercase;

  letter-spacing: 0.12em;
`;

const SectionTitle = styled.h2`
  margin: 0 0 0.8rem;

  font-size: clamp(2rem, 4vw, 3rem);

  letter-spacing: -0.04em;

  color: ${({ $isDark }) =>
    $isDark ? "#ffffff" : "#0f172a"};
`;

const SectionText = styled.p`
  margin: 0;

  color: ${({ $isDark }) =>
    $isDark ? "#94a3b8" : "#64748b"};

  line-height: 1.8;
`;

/* =========================================================
   ABOUT
========================================================= */

const AboutCard = styled.div`
  max-width: 850px;

  margin: 0 auto;

  padding: 2rem;

  border-radius: 22px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.035)" : "#ffffff"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.07)" : "#e2e8f0"};

  box-shadow: ${({ $isDark }) =>
    $isDark
      ? "none"
      : "0 20px 50px rgba(15,23,42,.06)"};
`;

const AboutText = styled.p`
  margin: 0;

  color: ${({ $isDark }) =>
    $isDark ? "#cbd5e1" : "#475569"};

  font-size: 1.02rem;

  line-height: 1.9;
`;

/* =========================================================
   PROJECTS
========================================================= */

const ProjectsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  position: relative;

  padding: 1.5rem;

  border-radius: 20px;

  background: ${({ $isDark }) =>
    $isDark ? "#0c1929" : "#ffffff"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.07)" : "#e2e8f0"};

  box-shadow: ${({ $isDark }) =>
    $isDark
      ? "0 15px 40px rgba(0,0,0,.2)"
      : "0 15px 40px rgba(15,23,42,.06)"};

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);

    border-color: rgba(14,165,233,.4);
  }
`;

const ProjectNumber = styled.span`
  color: ${({ $isDark }) =>
    $isDark ? "#38bdf8" : "#0284c7"};

  font-size: 0.78rem;

  font-weight: 900;
`;

const ProjectTitle = styled.h3`
  margin: 0.5rem 0;

  color: ${({ $isDark }) =>
    $isDark ? "#ffffff" : "#0f172a"};

  font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  min-height: 85px;

  margin: 0 0 1.2rem;

  color: ${({ $isDark }) =>
    $isDark ? "#94a3b8" : "#64748b"};

  line-height: 1.7;

  font-size: 0.92rem;
`;

const ProjectLinks = styled.div`
  display: flex;

  gap: 0.6rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;

  align-items: center;

  gap: 0.4rem;

  padding: 0.65rem 0.8rem;

  border-radius: 9px;

  text-decoration: none;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.05)" : "#f1f5f9"};

  color: ${({ $isDark }) =>
    $isDark ? "#e2e8f0" : "#334155"};

  font-size: 0.8rem;

  font-weight: 700;

  transition: 0.2s ease;

  &:hover {
    color: #0284c7;
  }
`;

/* =========================================================
   SKILLS
========================================================= */

const SkillsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 1.2rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  padding: 1.5rem;

  border-radius: 20px;

  background: ${({ $isDark }) =>
    $isDark ? "#0c1929" : "#ffffff"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.07)" : "#e2e8f0"};
`;

const SkillHeader = styled.div`
  display: flex;

  align-items: center;

  gap: 0.7rem;

  margin-bottom: 1.4rem;

  color: ${({ $isDark }) =>
    $isDark ? "#38bdf8" : "#0284c7"};

  font-weight: 800;
`;

const Skill = styled.div`
  margin-top: 1rem;
`;

const SkillTop = styled.div`
  display: flex;

  justify-content: space-between;

  margin-bottom: 0.4rem;

  span {
    color: ${({ $isDark }) =>
      $isDark ? "#cbd5e1" : "#334155"};

    font-size: 0.85rem;
  }

  small {
    color: ${({ $isDark }) =>
      $isDark ? "#64748b" : "#94a3b8"};

    font-size: 0.75rem;
  }
`;

const SkillBar = styled.div`
  height: 7px;

  border-radius: 999px;

  overflow: hidden;

  background: ${({ $isDark }) =>
    $isDark ? "#172a40" : "#e2e8f0"};
`;

const SkillProgress = styled.div`
  width: ${({ $level }) => $level}%;

  height: 100%;

  border-radius: inherit;

  background: linear-gradient(
    90deg,
    #0284c7,
    #38bdf8
  );
`;

/* =========================================================
   CONTACT CTA
========================================================= */

const ContactCTA = styled.div`
  display: grid;

  grid-template-columns: 1fr auto;

  gap: 2rem;

  align-items: center;

  padding: 2.2rem;

  border-radius: 24px;

  background: linear-gradient(
    135deg,
    ${({ $isDark }) =>
      $isDark ? "#0b2034" : "#e0f2fe"},
    ${({ $isDark }) =>
      $isDark ? "#071522" : "#f8fafc"}
  );

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(56,189,248,.15)" : "#bae6fd"};

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    text-align: center;
  }
`;

const CTAButtons = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 0.7rem;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

/* =========================================================
   SOCIAL BAR
========================================================= */

const SocialBar = styled.div`
  display: flex;

  justify-content: center;

  gap: 0.8rem;

  margin-top: 2rem;
`;

const SocialButton = styled.a`
  width: 44px;
  height: 44px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.05)" : "#ffffff"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.08)" : "#e2e8f0"};

  color: ${({ $isDark }) =>
    $isDark ? "#cbd5e1" : "#334155"};

  text-decoration: none;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);

    color: #0284c7;

    border-color: #38bdf8;
  }
`;

/* =========================================================
   MODAL
========================================================= */

const Modal = styled.div`
  position: fixed;

  inset: 0;

  z-index: 5000;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 1rem;

  background: rgba(0, 0, 0, 0.88);

  backdrop-filter: blur(8px);
`;

const ModalImage = styled.img`
  max-width: min(850px, 94vw);

  max-height: 85vh;

  width: auto;
  height: auto;

  object-fit: contain;

  border-radius: 18px;

  box-shadow: 0 30px 100px rgba(0,0,0,.6);
`;

const CloseButton = styled.button`
  position: fixed;

  top: 20px;
  right: 20px;

  width: 46px;
  height: 46px;

  display: flex;

  align-items: center;
  justify-content: center;

  border: none;

  border-radius: 50%;

  background: rgba(255,255,255,.12);

  color: white;

  font-size: 1.2rem;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    background: rgba(255,255,255,.22);

    transform: rotate(90deg);
  }
`;

/* =========================================================
   SCROLL TOP
========================================================= */

const ScrollTop = styled.button`
  position: fixed;

  right: 25px;
  bottom: 25px;

  width: 45px;
  height: 45px;

  display: ${({ $visible }) =>
    $visible ? "flex" : "none"};

  align-items: center;
  justify-content: center;

  z-index: 1000;

  border: none;

  border-radius: 50%;

  background: #0284c7;

  color: white;

  cursor: pointer;

  box-shadow: 0 10px 30px rgba(2,132,199,.3);

  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

/* =========================================================
   COMPONENT
========================================================= */

function Accueil() {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const [showScrollTop, setShowScrollTop] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const avatarPath = "/dosso.jpeg";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projets = [
    {
      number: "01",
      title: "Application météo",
      description:
        "Application web permettant de consulter les conditions météorologiques d'une ville grâce à une API.",
      github:
        "https://github.com/SouleymaneDosso/mon-projet-m-t-o-",
      demo:
        "https://meteo-five-sand.vercel.app/",
    },

    {
      number: "02",
      title: "Application de rencontre",
      description:
        "Application web de rencontre développée avec React et une architecture backend moderne.",
      github:
        "https://github.com/SouleymaneDosso/projet-openclassrooms-agence",
      demo:
        "https://rencontre-amoureuse.vercel.app/connexion",
    },

    {
      number: "03",
      title: "NUMA — E-commerce",
      description:
        "Projet e-commerce complet avec catalogue, interface utilisateur et technologies fullstack.",
      github:
        "https://github.com/SouleymaneDosso/Ecommer-NUMA",
      demo:
        "https://www.numa.luxe/",
    },
  ];

  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend",
      items: [
        ["HTML / CSS", 90],
        ["JavaScript", 80],
        ["React", 80],
      ],
    },

    {
      icon: <FaDatabase />,
      title: "Backend & API",
      items: [
        ["API REST", 80],
        ["Node.js", 65],
        ["Express", 65],
      ],
    },

    {
      icon: <FaTools />,
      title: "Outils",
      items: [
        ["Git / GitHub", 90],
        ["Postman", 80],
        ["Développement responsive", 85],
      ],
    },
  ];

  return (
    <Page>

      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero>
        <Container>
          <HeroGrid>

            <HeroContent>

              <Availability $isDark={isDark}>
                <Dot />
                Disponible pour une opportunité
              </Availability>

              <HeroTitle $isDark={isDark}>
                Bonjour, je suis
                <span>Dosso Souleymane.</span>
              </HeroTitle>

              <HeroSubtitle $isDark={isDark}>
                Développeur web passionné, actuellement en formation
                continue. Je conçois des applications modernes,
                responsives et orientées utilisateur avec React,
                JavaScript et les technologies du web.
              </HeroSubtitle>

              <HeroLocation $isDark={isDark}>
                <FaMapMarkerAlt />
                Abidjan, Côte d’Ivoire
              </HeroLocation>

              <HeroActions>

                <PrimaryButton to="https://github.com/SouleymaneDosso?tab=repositories">
                  Découvrir mes projets
                  <FaArrowRight />
                </PrimaryButton>

                <SecondaryButton
                  href="/CV_Dosso_Souleymane_Pro.pdf"
                  target="_blank"
                  rel="noreferrer"
                  $isDark={isDark}
                >
                  <FaDownload />
                  Voir mon CV
                </SecondaryButton>

                <SecondaryButton
                  href="https://wa.me/225712150062"
                  target="_blank"
                  rel="noreferrer"
                  $isDark={isDark}
                >
                  <FaWhatsapp />
                  WhatsApp
                </SecondaryButton>

              </HeroActions>

              <Stats>

                <Stat $isDark={isDark}>
                  <StatNumber $isDark={isDark}>
                    Web
                  </StatNumber>

                  <StatText $isDark={isDark}>
                    Développement
                  </StatText>
                </Stat>

                <Stat $isDark={isDark}>
                  <StatNumber $isDark={isDark}>
                    React
                  </StatNumber>

                  <StatText $isDark={isDark}>
                    Frontend
                  </StatText>
                </Stat>

                <Stat $isDark={isDark}>
                  <StatNumber $isDark={isDark}>
                    Mobile
                  </StatNumber>

                  <StatText $isDark={isDark}>
                    En formation
                  </StatText>
                </Stat>

              </Stats>

            </HeroContent>

            {/* AVATAR */}

            <AvatarArea>

              <AvatarWrapper
                type="button"
                $isDark={isDark}
                onClick={() => setModalOpen(true)}
                aria-label="Agrandir ma photo"
              >
                <Avatar
                  src={avatarPath}
                  alt="Dosso Souleymane"
                  loading="eager"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </AvatarWrapper>

            </AvatarArea>

          </HeroGrid>
        </Container>
      </Hero>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <Section id="apropos">
        <Container>

          <SectionHeader>

            <SectionLabel $isDark={isDark}>
              À propos
            </SectionLabel>

            <SectionTitle $isDark={isDark}>
              Construire, apprendre et progresser.
            </SectionTitle>

            <SectionText $isDark={isDark}>
              Je cherche constamment à améliorer mes compétences
              et à transformer mes connaissances en projets concrets.
            </SectionText>

          </SectionHeader>

          <AboutCard $isDark={isDark}>

            <AboutText $isDark={isDark}>
              Je suis <strong>Dosso Souleymane</strong>, développeur
              web passionné par la création d'interfaces modernes
              et d'applications utiles. Mon parcours est basé sur
              l'apprentissage continu, la pratique et la réalisation
              de projets concrets.

              <br />
              <br />

              Je travaille principalement avec les technologies
              JavaScript et React et je développe progressivement
              mes compétences dans l'écosystème mobile. Mon objectif
              est de rejoindre une équipe dans laquelle je pourrai
              continuer à apprendre, contribuer aux projets et
              évoluer professionnellement.
            </AboutText>

          </AboutCard>

        </Container>
      </Section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <Section id="projets">
        <Container>

          <SectionHeader>

            <SectionLabel $isDark={isDark}>
              Portfolio
            </SectionLabel>

            <SectionTitle $isDark={isDark}>
              Quelques projets
            </SectionTitle>

            <SectionText $isDark={isDark}>
              Une sélection de projets réalisés pendant mon parcours
              d'apprentissage et de développement.
            </SectionText>

          </SectionHeader>

          <ProjectsGrid>

            {projets.map((project) => (
              <ProjectCard
                key={project.number}
                $isDark={isDark}
              >

                <ProjectNumber $isDark={isDark}>
                  {project.number}
                </ProjectNumber>

                <ProjectTitle $isDark={isDark}>
                  {project.title}
                </ProjectTitle>

                <ProjectDescription $isDark={isDark}>
                  {project.description}
                </ProjectDescription>

                <ProjectLinks>

                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    $isDark={isDark}
                  >
                    <FaGithub />
                    Code
                  </ProjectLink>

                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    $isDark={isDark}
                  >
                    <FaExternalLinkAlt />
                    Démo
                  </ProjectLink>

                </ProjectLinks>

              </ProjectCard>
            ))}

          </ProjectsGrid>

        </Container>
      </Section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <Section id="competences">
        <Container>

          <SectionHeader>

            <SectionLabel $isDark={isDark}>
              Compétences
            </SectionLabel>

            <SectionTitle $isDark={isDark}>
              Mes technologies
            </SectionTitle>

            <SectionText $isDark={isDark}>
              Les technologies et outils que j'utilise dans mes projets.
            </SectionText>

          </SectionHeader>

          <SkillsGrid>

            {skills.map((category) => (
              <SkillCard
                key={category.title}
                $isDark={isDark}
              >

                <SkillHeader $isDark={isDark}>
                  {category.icon}
                  {category.title}
                </SkillHeader>

                {category.items.map(([name, level]) => (
                  <Skill key={name}>

                    <SkillTop $isDark={isDark}>
                      <span>{name}</span>
                      <small>
                        {level >= 85
                          ? "Très à l'aise"
                          : level >= 70
                          ? "Bonne maîtrise"
                          : "En progression"}
                      </small>
                    </SkillTop>

                    <SkillBar $isDark={isDark}>
                      <SkillProgress
                        $level={level}
                      />
                    </SkillBar>

                  </Skill>
                ))}

              </SkillCard>
            ))}

          </SkillsGrid>

        </Container>
      </Section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <Section id="contact">
        <Container>

          <ContactCTA $isDark={isDark}>

            <div>

              <SectionLabel $isDark={isDark}>
                Une opportunité ?
              </SectionLabel>

              <SectionTitle $isDark={isDark}>
                Travaillons ensemble.
              </SectionTitle>

              <SectionText $isDark={isDark}>
                Vous êtes recruteur, entreprise ou porteur de projet ?
                Je serais heureux d'échanger avec vous.
              </SectionText>

            </div>

            <CTAButtons>

              <PrimaryButton to="/contacts">
                Me contacter
                <FaArrowRight />
              </PrimaryButton>

              <SecondaryButton
                href="mailto:dosso070000@gmail.com?subject=Opportunité professionnelle"
                $isDark={isDark}
              >
                <FaEnvelope />
                Email
              </SecondaryButton>

            </CTAButtons>

          </ContactCTA>

          <SocialBar>

            <SocialButton
              href="https://github.com/SouleymaneDosso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              $isDark={isDark}
            >
              <FaGithub />
            </SocialButton>

            <SocialButton
              href="https://www.linkedin.com/in/souleymane-dosso-50709a418/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              $isDark={isDark}
            >
              <FaLinkedin />
            </SocialButton>

            <SocialButton
              href="https://wa.me/225712150062"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              $isDark={isDark}
            >
              <FaWhatsapp />
            </SocialButton>

            <SocialButton
              href="mailto:dosso070000@gmail.com"
              aria-label="Email"
              $isDark={isDark}
            >
              <FaEnvelope />
            </SocialButton>

          </SocialBar>

        </Container>
      </Section>

      {/* =====================================================
          MODAL PHOTO
      ===================================================== */}

      {modalOpen && (
        <Modal
          onClick={() => setModalOpen(false)}
        >

          <CloseButton
            type="button"
            onClick={() => setModalOpen(false)}
            aria-label="Fermer"
          >
            <FaTimes />
          </CloseButton>

          <ModalImage
            src={avatarPath}
            alt="Dosso Souleymane"
            onClick={(event) => event.stopPropagation()}
          />

        </Modal>
      )}

      {/* =====================================================
          SCROLL TOP
      ===================================================== */}

      <ScrollTop
        type="button"
        $visible={showScrollTop}
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        <FaArrowUp />
      </ScrollTop>

    </Page>
  );
}

export default Accueil;

