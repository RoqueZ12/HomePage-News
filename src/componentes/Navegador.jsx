import React, { useState } from "react";
import logo from '../assets/logo.svg';
import iconMenu from '../assets/icon-menu.svg';
import iconClose from '../assets/icon-menu-close.svg'; // Importa el icono de cierre
import '../styles.css/navegador.css';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="nav-container">
      <div className="nav-img">
        <img src={logo} alt="Logo" />
      </div>
      {menuOpen && <div className="background-overlay" onClick={toggleMenu}></div>}
      <div className={`nav-items ${menuOpen ? 'menu-open' : 'menu-close'}`}>
        {/* Muestra el icono de menú o la X según el estado del menú */}
        {menuOpen ? null: (
          <img src={iconMenu} onClick={toggleMenu} className="menu-icon" alt="Icono de menú" />
        )}
         <ul className="items-list">
          {menuOpen ? (
            <img src={iconClose} onClick={toggleMenu} className="icon-close" alt="Icono de menú" />
          ): null }
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
     
    </div>
  );
};

export { Nav };
