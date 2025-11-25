import { Navigation } from "../Components/Navigation"
import { Footer } from "../Components/Footer"
import BiaImg from "../img/bia.png"
import AnaJImg from "../img/ana.jpg"
import LiviaImg from "../img/li.png"
import AnaCImg from "../img/anal.png"
import JuImg from "../img/ju.png"

const teamMembers = [
  {
    name: "Beatriz Silva",
    role: "Desenvolvedora Fullstack",
    github: "https://github.com/BiaS1lva6",
    image: BiaImg,
  },
  {
    name: "Ana Julia Geremias",
    role: "Desenvolvedora Fullstack",
    github: "https://github.com/Najul1a",
    image: AnaJImg,
  },
  {
    name: "Lívia Solla",
    role: "Gerente de Projetos",
    github: "https://github.com/L1vias",
    image: LiviaImg,
  },
  {
    name: "Ana Clara Lopes",
    role: "Desenvolvedora Fullstack",
    github: "https://github.com/AnaChiaramonte",
    image: AnaCImg,
  },
  {
    name: "Juliana Fulanetto",
    role: "Desenvolvedora Fullstack",
    github: "https://github.com/JulianaFulanetto",
    image: JuImg,
  },
];


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
            <div className="row g-4 justify-content-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="team-card h-100 text-center">
                    <div className="team-avatar mb-4">
                      {member.image ? (
                        <img src={member.image} alt={member.name} />
                      ) : (
                        member.name.charAt(0)
                      )}
                    </div>

                    <h3 className="h5 fw-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 fw-semibold mb-3 small">{member.role}</p>
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 small text-decoration-none d-inline-flex align-items-center gap-2 hover-link"
                    >
                      <i className="bi bi-github fs-5"></i>
                      <span>{member.github.replace('https://github.com/', '@')}</span>
                    </a>
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
                  <a 
                    href="https://wa.me/5514988381891" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-blue-custom bg-white text-blue-700 border-0 text-decoration-none"
                  >
                    Solicitar Proposta no WhatsApp
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
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