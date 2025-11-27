import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Header from './components/Header';
import Erreur from  './components/Erreur';
import {ThemeToggle} from './pages/context'

import GlobalStyle from "./pages/utils/GlobalStyle.jsx";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ThemeToggle>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="*" element={<Erreur />} />
      </Routes>
      </ThemeToggle>
    </Router>
  </StrictMode>
);