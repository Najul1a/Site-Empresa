import { Link } from "react-router"
import { Navigation } from "../Components/Navigation"
import { Footer } from "../Components/Footer"

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="hero-section py-5">
          <div className="hero-gradient"></div>
          <div className="container position-relative py-5">
            <div className="row">
              <div className="col-lg-10 col-xl-9">
                <div className="badge-custom mb-4">
                  <i className="bi bi-sparkles"></i>
                  <span>Inovação em Segurança Digital</span>
                </div>

                <h1 className="display-2 fw-bold text-gray-900 mb-4 lh-sm">
                  Bem-vindo(a) ao <br />
                  <span className="gradient-text-blue">Safe Girls</span>
                </h1>

                <p className="fs-4 text-gray-600 mb-5 pe-lg-5">
                  Na SafeGirls, unimos inovação e empatia para desenvolver ferramentas que ampliam a segurança pessoal e
                  promovem cuidado inteligente. Atuamos em duas frentes essenciais: proteção digital contra fraudes e
                  desinformação, e monitoramento preventivo de saúde e risco físico para crianças e idosos.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                  <Link to="/projeto1" className="btn btn-blue-custom d-flex align-items-center justify-content-center">
                    Ver Projetos
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                  <Link to="/funcionarios" className="btn btn-outline-blue-custom">
                    Conheça a Equipe
                  </Link>
                </div>

                <div className="text-center py-5">
                  <div className="logo-icon mx-auto" style={{ width: "120px", height: "120px" }}>
                    <i className="bi bi-shield-fill-check" style={{ fontSize: "60px" }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section className="bg-white border-top border-bottom border-gray py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="display-4 fw-bold text-gray-900 mb-4">Sobre Nós</h2>
                <p className="fs-5 text-gray-600 lh-lg">
                  SafeGirls - inovação em primeiro lugar. Nosso compromisso é criar um futuro mais seguro e inclusivo,
                  onde ninguém esteja sozinho diante do perigo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="bg-gray-light py-5">
          <div className="container py-5">
            <h2 className="display-4 fw-bold text-gray-900 mb-3 text-center">Nossos Projetos</h2>
            <p className="fs-5 text-gray-600 text-center mb-5 mx-auto" style={{ maxWidth: "700px" }}>
              Conheça as soluções inovadoras que estamos desenvolvendo para tornar o mundo digital e físico mais seguro
            </p>

            <div className="row g-4">
              <div className="col-lg-6">
                <Link to="/projeto1" className="text-decoration-none">
                  <div className="project-card h-100">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div className="project-icon">
                        <i className="bi bi-lock-fill text-white fs-3"></i>
                      </div>
                      <i className="bi bi-arrow-right text-gray-400 fs-4"></i>
                    </div>

                    <h3 className="h3 fw-bold text-gray-900 mb-3">Projeto 1 — SafeGuard</h3>
                    <p className="text-gray-600 mb-4">
                      Assistente digital para proteção de populações vulneráveis contra crimes cibernéticos e fake news
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="tag-custom">IA</span>
                      <span className="tag-custom">Segurança Digital</span>
                      <span className="tag-custom">Acessibilidade</span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-6">
                <Link to="/projeto2" className="text-decoration-none">
                  <div className="project-card h-100">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div className="project-icon">
                        <i className="bi bi-activity text-white fs-3"></i>
                      </div>
                      <i className="bi bi-arrow-right text-gray-400 fs-4"></i>
                    </div>

                    <h3 className="h3 fw-bold text-gray-900 mb-3">Projeto 2 — SafeWaves</h3>
                    <p className="text-gray-600 mb-4">
                      Tecnologia de monitoramento preventivo para segurança e autonomia de idosos e crianças
                    </p>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="tag-custom">IoT</span>
                      <span className="tag-custom">Monitoramento</span>
                      <span className="tag-custom">Prevenção</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
