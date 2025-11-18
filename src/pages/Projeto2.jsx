import React from 'react';
import Footer from '../Components/footer/Footer';


export default function Projeto2() {
  return (
    <div className="page-container">
      <section className="project-header">
        <h1>Projeto 2: Plataforma de E-learning</h1>
      </section>

      <section className="project-content">
        <div className="project-section">
          <h2>Descrição</h2>
          <p>
            Criamos uma plataforma de e-learning interativa com videoaulas, exercícios práticos 
            e acompanhamento de progresso para mais de 10 mil usuários.
          </p>
        </div>

        <div className="project-section">
          <h2>Tecnologias Utilizadas</h2>
          <div className="tech-list">
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">Stripe</span>
          </div>
        </div>

        <div className="project-section">
          <h2>Resultados</h2>
          <ul className="results-list">
            <li>10.000+ usuários ativos</li>
            <li>Taxa de conclusão de 85%</li>
            <li>4.8/5 de avaliação média</li>
            <li>Geração de receita consistente</li>
          </ul>
        </div>
      </section>

      <section className="project-cta">
        <a href="/funcionarios" className="btn btn-black">Conhecer a Equipe</a>
      </section>
      <Footer/>
    </div>
  );
}
