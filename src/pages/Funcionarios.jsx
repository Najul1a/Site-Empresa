import { Navigation } from "../Components/Navigation"
import { Footer } from "../Components/Footer"

const teamMembers = [
  {
    name: "Beatriz Nascimento",
    role: "Desenvolvedora Frontend",
    description: "Especialista em React e UI/UX Design",
  },
  {
    name: "Ana Julia Geremias",
    role: "Desenvolvedora Backend",
    description: "Focada em Node.js e arquitetura de APIs",
  },
  {
    name: "Lívia Solla",
    role: "Gerente de Projetos",
    description: "Experiência em metodologias ágeis e gestão de equipes",
  },
  {
    name: "Ana Clara Lopes",
    role: "Analista de Dados",
    description: "Especialista em análise de dados e visualização",
  },
  {
    name: "Juliana Furlanetto",
    role: "Especialista em Segurança",
    description: "Focada em segurança cibernética e proteção de dados",
  },
]

export default function Funcionarios() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="hero-section py-5">
          <div className="hero-gradient"></div>
          <div className="container position-relative py-5">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="display-2 fw-bold text-gray-900 mb-4 lh-sm">
                  Nossa <span className="gradient-text-blue">Equipe</span>
                </h1>
                <p className="fs-4 text-gray-600">Conheça os profissionais que fazem a SafeGirls funcionar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-white py-5">
          <div className="container py-5">
            <div className="row g-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="team-card h-100">
                    <div className="team-avatar mb-4">{member.name.charAt(0)}</div>

                    <h3 className="h5 fw-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 fw-semibold mb-3 small">{member.role}</p>
                    <p className="text-gray-600 small mb-0">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="row mt-5 pt-5">
              <div className="col-lg-10 col-xl-8 mx-auto">
                <div className="cta-section text-center">
                  <h2 className="h2 fw-bold text-white mb-3">Interessado em Trabalhar com a Gente?</h2>
                  <p className="fs-5 text-white mb-4" style={{ opacity: 0.9 }}>
                    Estamos sempre em busca de talentos excepcionais para fazer parte da nossa missão
                  </p>
                  <button className="btn btn-blue-custom bg-white text-blue-700 border-0">
                    Solicitar Proposta no WhatsApp
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
