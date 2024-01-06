import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './common/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import Skills from './pages/Skills/Skills';
import Footer from './common/Footer/Footer';


// 2. Home: boton Contratame, arreglar boton para que puedan enviarme un email (en móvil no va ni en Socials).
//  EXTRA: (EN IPHONE)

// E.1: Mejorar lo de Stelut Tomoiaga CV => (Foto) Stelut Tomoiaga (Icono azul verificado).
// E.2: Mejorar hablando de nuevas tecnologías y/o proyectos.

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;