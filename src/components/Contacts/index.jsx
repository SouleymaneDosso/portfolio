import styled from "styled-components";
import { useContext, useState } from "react";
import { ThemeContext } from "./../../pages/context";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";


const PageContainer = styled.div`
  min-height: 90vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Card = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 2.5rem;
  border-radius: 22px;
  background: ${({ $isDark }) =>
    $isDark ? "rgba(13,25,43,0.75)" : "rgba(255,255,255,0.7)"};
  backdrop-filter: blur(12px);
  box-shadow: ${({ $isDark }) =>
    $isDark ? "0 8px 30px rgba(0,0,0,0.6)" : "0 8px 30px rgba(0,0,0,0.15)"};
  animation: fadeIn 0.7s ease-out;
  transition: 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: ${({ $isDark }) => ($isDark ? "#00bfff" : "#005fa3")};
`;



const InputGroup = styled.div`
  margin-bottom: 1.8rem;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: ${({ $focused }) => ($focused ? "-10px" : "12px")};
  left: 12px;
  font-size: ${({ $focused }) => ($focused ? "0.8rem" : "1rem")};
  color: ${({ $focused, $isDark }) =>
    $focused ? "#00bfff" : $isDark ? "#aaa" : "#666"};
  background: ${({ $isDark }) =>
    $isDark ? "rgba(13,25,43,0.75)" : "rgba(255,255,255,0.7)"};
  padding: 0 5px;
  transition: 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ $isDark }) => ($isDark ? "#1f2d40" : "#ccc")};
  background: ${({ $isDark }) => ($isDark ? "#15263C" : "#f2f2f2")};
  color: ${({ $isDark }) => ($isDark ? "white" : "#111")};
  transition: 0.25s ease;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: #00bfff;
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.4);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 1rem;
  border-radius: 10px;
  resize: none;
  border: 1px solid ${({ $isDark }) => ($isDark ? "#1f2d40" : "#ccc")};
  background: ${({ $isDark }) => ($isDark ? "#15263C" : "#f2f2f2")};
  color: ${({ $isDark }) => ($isDark ? "white" : "#111")};
  transition: 0.25s ease;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: #00bfff;
    box-shadow: 0 0 10px rgba(0, 191, 255, 0.4);
  }
`;



const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  background: #00bfff;
  border: none;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0099cc;
    transform: translateY(-3px);
  }
`;

const ResetButton = styled(Button)`
  background: ${({ $isDark }) => ($isDark ? "#1f2d40" : "#aaa")};
  margin-top: 0.5rem;

  &:hover {
    background: ${({ $isDark }) => ($isDark ? "#27405d" : "#888")};
  }
`;

const CVButton = styled.a`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.2rem;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  background: ${({ $isDark }) => ($isDark ? "#1f2d40" : "#ddd")};
  color: ${({ $isDark }) => ($isDark ? "white" : "#111")};
  transition: 0.3s ease;

  &:hover {
    background: #00bfff;
    color: white;
    transform: translateY(-3px);
  }
`;

const Socials = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.3rem;

  a {
    font-size: 1.7rem;
    color: ${({ $isDark }) => ($isDark ? "white" : "#333")};
    transition: 0.3s ease;
  }

  a:hover {
    color: #00bfff;
    transform: scale(1.2);
  }
`;



const MapContainer = styled.div`
  margin-top: 2.5rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  iframe {
    width: 100%;
    height: 280px;
    border: none;
  }
`;



function Contacts() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", e.target, "PUBLIC_KEY")
      .then(() => {
        alert("Message envoyé avec succès !");
      })
      .catch(() => {
        alert("Erreur lors de l'envoi.");
      });

    e.target.reset();
  };

  return (
    <PageContainer>
      <Card $isDark={isDark}>
        <Title $isDark={isDark}>Me Contacter</Title>

        <form onSubmit={sendEmail}>
          <InputGroup>
            <Label $focused={focusedField === "name"} $isDark={isDark}>
              Votre nom
            </Label>
            <Input
              name="name"
              $isDark={isDark}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
            />
          </InputGroup>

         
          <InputGroup>
            <Label $focused={focusedField === "email"} $isDark={isDark}>
              Votre Email
            </Label>
            <Input
              type="email"
              name="email"
              $isDark={isDark}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
          </InputGroup>

          
          <InputGroup>
            <Label $focused={focusedField === "numero"} $isDark={isDark}>
              Votre numéro
            </Label>
            <Input
              type="number"
              name="numero"
              $isDark={isDark}
              onFocus={() => setFocusedField("numero")}
              onBlur={() => setFocusedField(null)}
            />
          </InputGroup>

         
          <InputGroup>
            <Label $focused={focusedField === "message"} $isDark={isDark}>
              Votre message
            </Label>
            <TextArea
              name="message"
              $isDark={isDark}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </InputGroup>

          <Button type="submit">Envoyer</Button>
          <ResetButton type="reset" $isDark={isDark}>
            Réinitialiser
          </ResetButton>
        </form>

        
        <CVButton $isDark={isDark} href="/cv.pdf" download>
          <FaDownload /> Télécharger mon CV
        </CVButton>

       
        <Socials $isDark={isDark}>
          <a href="mailto:dosso070000@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin />
          </a>
        </Socials>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.953948334334!2d-4.008256826087338!3d5.336629935379289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ecd9b27f1a2f%3A0xa6717c3d2e9e6f17!2sPlateau%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1706123456789!5m2!1sfr!2sci"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </Card>
    </PageContainer>
  );
}

export default Contacts;
