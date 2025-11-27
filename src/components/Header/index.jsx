import '../styles/Header.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false); 
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div>
      <header ref={containerRef}>
        <button
          className="btn"
          id={open ? "ouvert" : ""}
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        <nav className={open ? "open" : "nav"}>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
            <li><Link to="/competences">Compétences</Link></li>
            <li><Link to="/projets">Projets</Link></li>
          </ul>
        </nav>
      </header>

      <header className="header2"></header>
    </div>
  );
}

export default Header;
