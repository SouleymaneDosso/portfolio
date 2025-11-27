import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Header from './components/Header';
import Erreur from  './components/Erreur';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  </StrictMode>
);
