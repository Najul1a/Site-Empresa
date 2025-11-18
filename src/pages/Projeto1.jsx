import React from 'react';
import Footer from '../Components/footer/Footer';


export default function Projeto1() {
  return (
    <div className="page-container">
      <section className="project-header">
        <h1>Projeto 1: Sistema de Gestão Empresarial</h1>
      </section>

      <section className="project-content">
        <div className="project-section">
          <h2>Descrição</h2>
          <p>
            Desenvolvemos um sistema completo de gestão empresarial que integra módulos de 
            controle de estoque, financeiro e recursos humanos em uma única plataforma intuitiva.
          </p>
        </div>

        <div className="project-section">
          <h2>Tecnologias Utilizadas</h2>
          <div className="tech-list">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Docker</span>
          </div>
        </div>

        <div className="project-section">
          <h2>Resultados</h2>
          <ul className="results-list">
            <li>Redução de 40% no tempo de processamento de dados</li>
            <li>Aumento de 60% na produtividade da equipe</li>
            <li>90% de satisfação do cliente</li>
            <li>Implementação em 3 meses</li>
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
