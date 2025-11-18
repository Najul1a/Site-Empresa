import React from 'react';
import Footer from '../Components/footer/Footer';

export default function Inicio() {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo(a) ao Safe Girls</h1>
          <p className="hero-subtitle">Soluções tecnológicas inovadoras para transformar seu negócio</p>
          <div className="logo-section">
            {/* Substituí o texto LOGO pela imagem da logo */}
            <img 
              src="/src/img/logo.png" 
              alt="Logo da Safe Girls" 
              className="logo-image" 
              style={{
                height: "100px",
                width: "auto",
                objectFit: "contain"
              }}
            />
          </div>
          <div className="cta-buttons">
            <a href="/projeto1" className="btn btn-black">Ver Projetos</a>
            <a href="/funcionarios" className="btn btn-outline">Conheça a Equipe</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}