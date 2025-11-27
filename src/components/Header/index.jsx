import '../styles/Header.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
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

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : prev || 'auto';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [open]);

  return (
    <div>
      <header>
        <button
          ref={buttonRef}                 // <-- attache la ref ici
          className="btn"
          id={open ? "ouvert" : ""}
          onClick={() => setOpen((s) => !s)} // utiliser fonctionnel pour éviter stale value
        >
          {open ? "✖" : "☰"}
        </button>

        <nav className={open ? "open" : "nav"} ref={menuRef}>
          <ul>
            <li><Link to="/" onClick={() => setOpen(false)}>Accueil</Link></li>
            <li><Link to="/apropos" onClick={() => setOpen(false)}>À propos</Link></li>
            <li><Link to="/competences" onClick={() => setOpen(false)}>Compétences</Link></li>
            <li><Link to="/projets" onClick={() => setOpen(false)}>Projets</Link></li>
          </ul>
        </nav>
      </header>

      <header className="header2"></header>
    </div>
  );
}

export default Header;

