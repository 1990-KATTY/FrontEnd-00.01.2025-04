import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.jpeg'; // Asegúrate que esté en src/assets/logo.jpeg

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <div className="search-slot">
          {/* Aquí podrías agregar un buscador o cualquier otro componente */}
        </div>
      </div>
    </header>
  );
}

export default Header;
