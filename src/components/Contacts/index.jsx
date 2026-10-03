
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./../../pages/context";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFilePdf,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* =========================
   PAGE
========================= */

const PageContainer = styled.main`
  min-height: 100vh;
  padding: 4rem 1.5rem 5rem;

  background: ${({ $isDark }) =>
    $isDark
      ? "radial-gradient(circle at top right, #102a43 0%, #07111f 45%, #040a12 100%)"
      : "radial-gradient(circle at top right, #e7f5ff 0%, #f7fafc 45%, #ffffff 100%)"};

  color: ${({ $isDark }) => ($isDark ? "#f8fafc" : "#172033")};

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
`;

/* =========================
   HEADER
========================= */

const Header = styled.div`
  max-width: 780px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 1rem;
  padding: 0.5rem 1rem;

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(56,189,248,.25)" : "rgba(2,132,199,.18)"};

  border-radius: 999px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(14,165,233,.08)" : "rgba(14,165,233,.06)"};

  color: ${({ $isDark }) => ($isDark ? "#38bdf8" : "#0284c7")};

  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
`;

const Title = styled.h1`
  margin: 0 0 1rem;

  font-size: clamp(2.3rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;

  background: ${({ $isDark }) =>
    $isDark
      ? "linear-gradient(90deg, #ffffff, #38bdf8)"
      : "linear-gradient(90deg, #0f172a, #0284c7)"};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  margin: 0;

  color: ${({ $isDark }) => ($isDark ? "#a9b7c8" : "#64748b")};

  font-size: 1.08rem;
  line-height: 1.8;
`;

/* =========================
   GRID
========================= */

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* =========================
   CARD
========================= */

const Card = styled.section`
  padding: 2rem;

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.08)"};

  border-radius: 24px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(10,22,38,.78)" : "rgba(255,255,255,.92)"};

  box-shadow: ${({ $isDark }) =>
    $isDark
      ? "0 25px 60px rgba(0,0,0,.25)"
      : "0 20px 50px rgba(15,23,42,.08)"};

  backdrop-filter: blur(16px);

  @media (max-width: 600px) {
    padding: 1.4rem;
    border-radius: 20px;
  }
`;

const CardTitle = styled.h2`
  margin: 0 0 0.6rem;

  font-size: 1.5rem;

  color: ${({ $isDark }) => ($isDark ? "#ffffff" : "#0f172a")};
`;

const CardDescription = styled.p`
  margin: 0 0 1.5rem;

  color: ${({ $isDark }) => ($isDark ? "#94a3b8" : "#64748b")};

  line-height: 1.7;
`;

/* =========================
   CONTACTS
========================= */

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  text-decoration: none;

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.07)" : "rgba(15,23,42,.07)"};

  border-radius: 16px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.025)" : "#f8fafc"};

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);

    border-color: ${({ $isDark }) =>
      $isDark ? "rgba(56,189,248,.35)" : "rgba(2,132,199,.3)"};

    box-shadow: 0 10px 25px
      ${({ $isDark }) =>
        $isDark ? "rgba(0,0,0,.2)" : "rgba(15,23,42,.07)"};
  }
`;

const IconBox = styled.div`
  width: 45px;
  height: 45px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 13px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(56,189,248,.1)" : "#e0f2fe"};

  color: ${({ $isDark }) => ($isDark ? "#38bdf8" : "#0284c7")};

  font-size: 1.15rem;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  strong {
    color: ${({ $isDark }) => ($isDark ? "#f8fafc" : "#0f172a")};
    font-size: 0.95rem;
  }

  span {
    color: ${({ $isDark }) => ($isDark ? "#94a3b8" : "#64748b")};
    font-size: 0.88rem;
    word-break: break-word;
  }
`;

/* =========================
   ACTIONS
========================= */

const ActionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;

  margin-top: 1.2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;

  padding: 0.9rem 1rem;

  border-radius: 12px;

  text-decoration: none;

  font-weight: 700;
  font-size: 0.9rem;

  transition: 0.25s ease;

  background: ${({ $primary, $isDark }) =>
    $primary
      ? "linear-gradient(135deg, #0284c7, #0ea5e9)"
      : $isDark
      ? "rgba(255,255,255,.06)"
      : "#f1f5f9"};

  color: ${({ $primary, $isDark }) =>
    $primary ? "#ffffff" : $isDark ? "#ffffff" : "#0f172a"};

  border: 1px solid
    ${({ $primary, $isDark }) =>
      $primary
        ? "transparent"
        : $isDark
        ? "rgba(255,255,255,.08)"
        : "rgba(15,23,42,.08)"};

  &:hover {
    transform: translateY(-2px);
  }
`;

/* =========================
   CV
========================= */

const CVCard = styled.div`
  margin-top: 1.5rem;

  padding: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  border-radius: 16px;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(14,165,233,.08)" : "#eff8ff"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(14,165,233,.15)" : "rgba(14,165,233,.12)"};

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const CVInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  strong {
    color: ${({ $isDark }) => ($isDark ? "#fff" : "#0f172a")};
  }

  span {
    color: ${({ $isDark }) => ($isDark ? "#94a3b8" : "#64748b")};
    font-size: 0.82rem;
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.75rem 1rem;

  border-radius: 10px;

  text-decoration: none;

  background: ${({ $isDark }) =>
    $isDark ? "#ffffff" : "#0f172a"};

  color: ${({ $isDark }) =>
    $isDark ? "#0f172a" : "#ffffff"};

  font-size: 0.85rem;
  font-weight: 800;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

/* =========================
   SOCIALS
========================= */

const SocialTitle = styled.h3`
  margin: 1.8rem 0 0.8rem;

  font-size: 0.95rem;

  color: ${({ $isDark }) =>
    $isDark ? "#cbd5e1" : "#334155"};
`;

const Socials = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const SocialLink = styled.a`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  text-decoration: none;

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.05)" : "#f1f5f9"};

  color: ${({ $isDark }) =>
    $isDark ? "#cbd5e1" : "#334155"};

  transition: 0.25s ease;

  &:hover {
    color: #0ea5e9;
    transform: translateY(-3px);
  }
`;

/* =========================
   RIGHT SIDE
========================= */

const OpportunityBox = styled.div`
  margin-bottom: 1.5rem;

  padding: 1.2rem;

  border-radius: 16px;

  background: ${({ $isDark }) =>
    $isDark
      ? "linear-gradient(135deg, rgba(14,165,233,.1), rgba(56,189,248,.03))"
      : "linear-gradient(135deg, #f0f9ff, #ffffff)"};

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(56,189,248,.12)" : "rgba(14,165,233,.12)"};
`;

const OpportunityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  margin-bottom: 0.6rem;

  color: ${({ $isDark }) =>
    $isDark ? "#38bdf8" : "#0284c7"};

  font-weight: 800;
`;

const OpportunityText = styled.p`
  margin: 0;

  color: ${({ $isDark }) =>
    $isDark ? "#94a3b8" : "#64748b"};

  line-height: 1.7;
`;

const DirectContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const DirectButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  padding: 1rem;

  border-radius: 14px;

  text-decoration: none;

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.07)" : "rgba(15,23,42,.08)"};

  background: ${({ $isDark }) =>
    $isDark ? "rgba(255,255,255,.025)" : "#f8fafc"};

  color: ${({ $isDark }) =>
    $isDark ? "#f8fafc" : "#0f172a"};

  transition: 0.25s ease;

  &:hover {
    transform: translateX(4px);
    border-color: #0ea5e9;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  strong {
    font-size: 0.9rem;
  }

  small {
    color: ${({ $isDark }) =>
      $isDark ? "#94a3b8" : "#64748b"};
  }
`;

/* =========================
   LOCATION
========================= */

const LocationCard = styled(Card)`
  margin-top: 1.5rem;
`;

const LocationTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 0.7rem;

  color: ${({ $isDark }) =>
    $isDark ? "#ffffff" : "#0f172a"};

  font-weight: 800;
`;

const MapContainer = styled.div`
  margin-top: 1.2rem;

  overflow: hidden;

  border-radius: 20px;

  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.08)"};

  iframe {
    display: block;

    width: 100%;
    height: 250px;

    border: 0;
  }
`;

/* =========================
   COMPONENT
========================= */

function Contacts() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <PageContainer $isDark={isDark}>
      <Container>

        {/* HEADER */}
        <Header>
          <Eyebrow $isDark={isDark}>
            <FaBriefcase />
            Disponible pour de nouvelles opportunités
          </Eyebrow>

          <Title $isDark={isDark}>
            Parlons de votre projet
          </Title>

          <Subtitle $isDark={isDark}>
            Vous recherchez un développeur motivé et passionné par
            les technologies web ? Je serais ravi d’échanger avec vous
            au sujet d’une opportunité, d’un projet ou d’une collaboration.
          </Subtitle>
        </Header>

        <ContentGrid>

          {/* =========================
              CONTACT
          ========================= */}

          <Card $isDark={isDark}>
            <CardTitle $isDark={isDark}>
              Mes coordonnées
            </CardTitle>

            <CardDescription $isDark={isDark}>
              Vous pouvez me contacter directement par WhatsApp,
              téléphone ou email.
            </CardDescription>

            <ContactList>

              <ContactItem
                href="https://wa.me/225712150062"
                target="_blank"
                rel="noreferrer"
                $isDark={isDark}
              >
                <IconBox $isDark={isDark}>
                  <FaWhatsapp />
                </IconBox>

                <ContactText $isDark={isDark}>
                  <strong>WhatsApp</strong>
                  <span>+225 07 12 15 00 62</span>
                </ContactText>
              </ContactItem>

              <ContactItem
                href="tel:+225584220157"
                $isDark={isDark}
              >
                <IconBox $isDark={isDark}>
                  <FaPhone />
                </IconBox>

                <ContactText $isDark={isDark}>
                  <strong>Téléphone</strong>
                  <span>+225 05 84 22 01 57</span>
                </ContactText>
              </ContactItem>

              <ContactItem
                href="mailto:dosso070000@gmail.com"
                $isDark={isDark}
              >
                <IconBox $isDark={isDark}>
                  <FaEnvelope />
                </IconBox>

                <ContactText $isDark={isDark}>
                  <strong>Email</strong>
                  <span>dosso070000@gmail.com</span>
                </ContactText>
              </ContactItem>

            </ContactList>

            <ActionRow>

              <ActionButton
                href="https://wa.me/225712150062"
                target="_blank"
                rel="noreferrer"
                $primary
                $isDark={isDark}
              >
                <FaWhatsapp />
                WhatsApp
              </ActionButton>

              <ActionButton
                href="tel:+225584220157"
                $isDark={isDark}
              >
                <FaPhone />
                Appeler
              </ActionButton>

            </ActionRow>

            {/* CV */}
            <CVCard $isDark={isDark}>

              <CVInfo $isDark={isDark}>

                <IconBox $isDark={isDark}>
                  <FaFilePdf />
                </IconBox>

                <div>
                  <strong>Mon CV</strong>

                  <span>
                    CV professionnel de Souleymane Dosso
                  </span>
                </div>

              </CVInfo>

              <CVButton
                href="/CV_Dosso_Souleymane_Pro.pdf"
                download
                $isDark={isDark}
              >
                <FaDownload />
                Télécharger
              </CVButton>

            </CVCard>

            {/* SOCIALS */}
            <SocialTitle $isDark={isDark}>
              Retrouvez-moi également sur
            </SocialTitle>

            <Socials>

              <SocialLink
                href="https://www.linkedin.com/in/souleymane-dosso-50709a418/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                $isDark={isDark}
              >
                <FaLinkedin />
              </SocialLink>

              <SocialLink
                href="https://github.com/SouleymaneDosso?tab=repositories"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                $isDark={isDark}
              >
                <FaGithub />
              </SocialLink>

              <SocialLink
                href="mailto:dosso070000@gmail.com"
                aria-label="Email"
                $isDark={isDark}
              >
                <FaEnvelope />
              </SocialLink>

            </Socials>
          </Card>

          {/* =========================
              RECRUTEUR
          ========================= */}

          <Card $isDark={isDark}>

            <CardTitle $isDark={isDark}>
              Vous êtes recruteur ?
            </CardTitle>

            <CardDescription $isDark={isDark}>
              Merci de l’intérêt porté à mon profil. Si vous avez une
              opportunité correspondant à mon profil, n’hésitez pas à
              me contacter directement.
            </CardDescription>

            <OpportunityBox $isDark={isDark}>

              <OpportunityHeader $isDark={isDark}>
                <FaBriefcase />
                Ouvert aux opportunités
              </OpportunityHeader>

              <OpportunityText $isDark={isDark}>
                Je suis disponible pour discuter d’un poste, d’un stage,
                d’une alternance, d’une mission freelance ou d’un projet
                de développement web.
              </OpportunityText>

            </OpportunityBox>

            <DirectContact>

              <DirectButton
                href="mailto:dosso070000@gmail.com?subject=Opportunité professionnelle"
                $isDark={isDark}
              >
                <IconBox $isDark={isDark}>
                  <FaEnvelope />
                </IconBox>

                <span>
                  <strong>Email professionnel</strong>
                  <small>
                    dosso070000@gmail.com
                  </small>
                </span>

                <FaExternalLinkAlt
                  style={{ marginLeft: "auto" }}
                />
              </DirectButton>

              <DirectButton
                href="https://www.linkedin.com/in/souleymane-dosso-50709a418/"
                target="_blank"
                rel="noreferrer"
                $isDark={isDark}
              >
                <IconBox $isDark={isDark}>
                  <FaLinkedin />
                </IconBox>

                <span>
                  <strong>LinkedIn</strong>
                  <small>
                    Voir mon profil professionnel
                  </small>
                </span>

                <FaExternalLinkAlt
                  style={{ marginLeft: "auto" }}
                />
              </DirectButton>

              <DirectButton
                href="https://github.com/SouleymaneDosso?tab=repositories"
                target="_blank"
                rel="noreferrer"
                $isDark={isDark}
              >
                <IconBox $isDark={isDark}>
                  <FaGithub />
                </IconBox>

                <span>
                  <strong>GitHub</strong>
                  <small>
                    Voir mes projets et réalisations
                  </small>
                </span>

                <FaExternalLinkAlt
                  style={{ marginLeft: "auto" }}
                />
              </DirectButton>

            </DirectContact>

          </Card>

        </ContentGrid>

        {/* =========================
            LOCALISATION
        ========================= */}

        <LocationCard $isDark={isDark}>

          <LocationTitle $isDark={isDark}>
            <FaMapMarkerAlt />
            Localisation
          </LocationTitle>

          <CardDescription $isDark={isDark}>
            Abidjan, Côte d’Ivoire — disponible également pour
            des opportunités à distance.
          </CardDescription>

          <MapContainer $isDark={isDark}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.953948334334!2d-4.008256826087338!3d5.336629935379289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ecd9b27f1a2f%3A0xa6717c3d2e9e6f17!2sPlateau%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1706123456789!5m2!1sfr!2sci"
              allowFullScreen
              loading="lazy"
              title="Localisation à Abidjan"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>

        </LocationCard>

      </Container>
    </PageContainer>
  );
}

export default Contacts;

