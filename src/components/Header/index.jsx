import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './../../pages/context/index';
import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const HeaderWrapper = styled.header`
  background-color: ${({ $isDark }) => ($isDark ? '#0D192B' : '#f4f4f4')};
  color: ${({ $isDark }) => ($isDark ? 'white' : '#222')};
  padding: 1rem 2rem;
  border-bottom: 3px solid ${({ $isDark }) => ($isDark ? 'white' : '#222')};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    padding: 12px;
    gap: 15px;
  }

  li a {
    text-decoration: none;
    color: ${({ $isDark }) => ($isDark ? 'white' : '#222')};
    transition: transform 0.2s ease;
    display: inline-block;
  }

  li a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    background-color: ${({ $isDark }) => ($isDark ? '#0D192B' : '#fff')};
    padding-top: 80px;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    animation: ${slideInRight} 0.35s forwards ease-out;
    flex-direction: column;
    align-items: flex-start;

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      padding-left: 25px;
    }

    li a {
      color: ${({ $isDark }) => ($isDark ? 'white' : '#111')};
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  z-index: 2000;
  color: ${({ color }) => color};

  @media (max-width: 700px) {
    display: block;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0;
  margin-left: 15px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  transition: transform 0.4s ease;

  &:active {
    transform: rotate(180deg) scale(0.9);
  }

  &:hover svg {
    transform: scale(1.15) rotate(8deg);
    opacity: 0.85;
  }

  svg {
    width: 26px;
    height: 26px;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  const color = isDarkMode ? 'white' : '#222';

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !(buttonRef.current && buttonRef.current.contains(event.target))
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : prev || 'auto';
    return () => { document.body.style.overflow = prev || ''; };
  }, [open]);

  return (
    <HeaderWrapper $isDark={isDarkMode}>
      <MenuButton
        ref={buttonRef}
        color={color}
        onClick={() => setOpen(!open)}
      >
        {open ? '✖' : '☰'}
      </MenuButton>

      <Nav ref={menuRef} $isDark={isDarkMode} open={open}>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Accueil</Link></li>
          <li><Link to="/contacts" onClick={() => setOpen(false)}>Contacts</Link></li>
        </ul>
      </Nav>

      <ToggleButton color={color} onClick={toggleTheme}>
        {isDarkMode ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </ToggleButton>
    </HeaderWrapper>
  );
}

export default Header;

