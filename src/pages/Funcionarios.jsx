import React from "react";
import Footer from "../Components/footer/Footer";

export default function Funcionarios() {
  const whatsappLink =
    "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar uma proposta.";

  return (
    <div className="page-container">
      <h1 className="title">Nossa Equipe</h1>
      <p className="section-description">
        Conheça os profissionais que fazem a Safe Girls funcionar
      </p>

      <div className="employees-grid">
        {/* Funcionário 1 */}
        <div className="employee-card">
          <div className="employee-avatar">
            <img
              src="/src/img/bia.jpg"
              alt="Foto de Beatriz Nascimento"
              onError={(e) => {
                e.target.src = "/src/img/default-avatar.png";
              }}
            />
          </div>
          <h3 className="employee-name">Beatriz Nascimento</h3>
          <p className="employee-role">Desenvolvedora Frontend</p>
          <p className="employee-experience">
            Especialista em React e UI/UX Design.
          </p>
        </div>

        {/* Funcionário 2 */}
        <div className="employee-card">
          <div className="employee-avatar">
            <img
              src="/src/img/ana.jpg"
              alt="Foto de Ana Julia Geremias"
              onError={(e) => {
                e.target.src = "/src/img/default-avatar.png";
              }}
            />
          </div>
          <h3 className="employee-name">Ana Julia Geremias</h3>
          <p className="employee-role">Desenvolvedora Backend</p>
          <p className="employee-experience">
            Focada em Node.js e arquitetura de APIs.
          </p>
        </div>

        {/* Funcionário 3 */}
        <div className="employee-card">
          <div className="employee-avatar">
            <img
              src="/src/img/funcionario3.png"
              alt="Foto de Livia Solla"
              onError={(e) => {
                e.target.src = "/src/img/default-avatar.png";
              }}
            />
          </div>
          <h3 className="employee-name">Livia Solla</h3>
          <p className="employee-role">Gerente de Projetos</p>
          <p className="employee-experience">
            Experiência em metodologias ágeis e gestão de equipes.
          </p>
        </div>

        {/* Funcionário 4 */}
        <div className="employee-card">
          <div className="employee-avatar">
            <img
              src="/src/img/anal.png"
              alt="Foto de Ana Clara Lopes"
              onError={(e) => {
                e.target.src = "/src/img/default-avatar.png";
              }}
            />
          </div>
          <h3 className="employee-name">Ana Clara Lopes</h3>
          <p className="employee-role">Analista de Dados</p>
          <p className="employee-experience">
            Especialista em análise de dados e visualização.
          </p>
        </div>

        {/* Funcionário 5 */}
        <div className="employee-card">
          <div className="employee-avatar">
            <img
              src="/src/img/funcionario5.png"
              alt="Foto de Juliana Furlanetto"
              onError={(e) => {
                e.target.src = "/src/img/default-avatar.png";
              }}
            />
          </div>
          <h3 className="employee-name">Juliana Furlanetto</h3>
          <p className="employee-role">Especialista em Segurança</p>
          <p className="employee-experience">
            Focada em segurança cibernética e proteção de dados.
          </p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Interessado em Trabalhar com a Gente?</h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-black"
        >
          Solicitar Proposta no WhatsApp
        </a>
      </div>
      <Footer />
    </div>
  );
}