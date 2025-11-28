import { useContext } from 'react';
import { ThemeContext } from '../context';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
    html {
  scroll-behavior: smooth;
}

  body {
    background: ${({ isDarkMode }) =>
      isDarkMode
        ? 'linear-gradient(160deg, #0D192B, #15263c)'
        : 'linear-gradient(160deg, #ffffff, #eaeaea)'};
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : '#222')};
    transition: background 0.35s ease, color 0.25s ease;
    overflow-x: hidden;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    text-align: center;
    padding: 2rem;
    animation: fadeIn 0.8s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .h1style {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : '#111')};
    text-shadow: ${({ isDarkMode }) =>
      isDarkMode ? '0px 0px 8px rgba(0,0,0,0.5)' : 'none'};
  }

  .h2style {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: ${({ isDarkMode }) => (isDarkMode ? '#00bfff' : '#005fa3')};
  }


  .pstyle {
    font-size: 1.2rem;
    max-width: 650px;
    line-height: 1.6;
    color: ${({ isDarkMode }) => (isDarkMode ? '#d0d0d0' : '#333')};
  }

  @media (max-width: 768px) {
    .h1style {
      font-size: 2.2rem;
    }
    .h2style {
      font-size: 1.6rem;
    }
    .pstyle {
      font-size: 1rem;
    }
  }
`;

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;

