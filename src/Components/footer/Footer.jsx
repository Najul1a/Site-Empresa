import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>TechPro - Soluções tecnológicas inovadoras para seu negócio.</p>
        </div>
        
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/">Página Inicial</a></li>
            <li><a href="/funcionarios">Funcionários</a></li>
            <li><a href="/projeto1">Projeto 1</a></li>
            <li><a href="/projeto2">Projeto 2</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@techpro.com</p>
          <p>Telefone: (11) 9999-9999</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 TechPro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
