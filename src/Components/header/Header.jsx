import React, { useState } from 'react';
import { Link } from 'react-router';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
      <img
  src="/src/img/logo.png"
  alt="logo"
  style={{
    height: "60px",
    width: "auto",
    objectFit: "cover"
  }}
/>


        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Página Inicial</Link>
          <Link to="/funcionarios" className="nav-link">Funcionários</Link>
          <Link to="/projeto1" className="nav-link">Projeto 1</Link>
          <Link to="/projeto2" className="nav-link">Projeto 2</Link>
        </nav>
      </div>
    </header>
  );
}
