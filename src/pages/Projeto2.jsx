import { Link } from "react-router"
import { Navigation } from "../Components/Navigation"
import { Footer } from "../Components/Footer"

export default function Projeto2() {
  const features = [
    "Monitoramento contínuo de movimentos e rotina",
    "Detecção automática de quedas e comportamentos atípicos",
    "Alertas preventivos e notificações imediatas para familiares",
    "Zonas de descanso inteligentes para análise contextual de quedas",
    "Interface intuitiva para acompanhamento remoto",
  ]

  const results = [
    "Redução entre 8% e 15% de incidentes domésticos",
    "Precisão superior a 95% na detecção de eventos críticos",
    "Disponibilidade técnica de 99,5%",
    "3.500 usuários ativos no primeiro ano",
    "Parcerias com instituições e redes de saúde comunitária",
  ]

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="projeto-hero bg-gradient-blue-dark py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-10">
                <div className="badge-projeto mb-4">
                  <i className="bi bi-activity"></i>
                  <span>Monitoramento Preventivo IoT</span>
                </div>

                <h1 className="display-2 fw-bold text-white mb-4 lh-sm">Projeto 2 — SafeWaves</h1>
                <p className="fs-4 text-white mb-0" style={{ opacity: 0.95 }}>
                  Tecnologia de monitoramento preventivo para segurança e autonomia de idosos e crianças
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="bg-gray-light py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Contexto */}
                <div className="content-card mb-4">
                  <h2 className="h3 fw-bold text-gray-900 mb-4">Contexto e Problema</h2>
                  <div className="text-gray-600 lh-lg">
                    <p className="mb-3">
                      O crescimento do número de acidentes domésticos envolvendo idosos e crianças representa um desafio
                      crescente de saúde pública. Aproximadamente 70% dos idosos sofrem quedas anualmente, e os
                      acidentes domésticos continuam sendo uma das principais causas de hospitalização infantil.
                    </p>
                    <p className="mb-0">
                      Surge a necessidade de soluções tecnológicas acessíveis, não invasivas e com capacidade de
                      resposta rápida, permitindo que familiares e cuidadores acompanhem a segurança de forma contínua.
                    </p>
                  </div>
                </div>

                {/* Sobre */}
                <div className="content-card mb-4">
                  <h2 className="h3 fw-bold text-gray-900 mb-4">Sobre o SafeWaves</h2>
                  <p className="text-gray-600 lh-lg mb-0">
                    O SafeWaves é uma plataforma inteligente de monitoramento preventivo, baseada em sensores via Wi-Fi
                    e módulos IoT, que utiliza análise de comportamento e detecção automatizada de quedas e situações de
                    risco. A solução elimina a necessidade de câmeras e infraestrutura complexa, oferecendo privacidade
                    e acessibilidade financeira.
                  </p>
                </div>

                {/* Funcionalidades */}
                <div className="content-card mb-4">
                  <h2 className="h3 fw-bold text-gray-900 mb-4">Funcionalidades Principais</h2>
                  <div className="row g-3">
                    {features.map((feature, index) => (
                      <div key={index} className="col-md-6">
                        <div className="feature-item">
                          <i className="bi bi-check-circle-fill text-blue-600 me-2"></i>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Público e Resultados */}
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="content-card h-100">
                      <h3 className="h4 fw-bold text-gray-900 mb-4">Público-Alvo</h3>
                      <div className="d-flex flex-column gap-3">
                        <div className="publico-item">
                          <div className="fw-bold text-blue-700 mb-1">Fase 1</div>
                          <div className="small text-gray-600">
                            Idosos que vivem sozinhos ou com mobilidade reduzida
                          </div>
                        </div>
                        <div className="publico-item">
                          <div className="fw-bold text-blue-700 mb-1">Fase 2</div>
                          <div className="small text-gray-600">
                            Crianças de 0 a 10 anos em ambientes residenciais ou escolares
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="content-card h-100">
                      <h3 className="h4 fw-bold text-gray-900 mb-4">Resultados e Metas</h3>
                      <div className="d-flex flex-column gap-2">
                        {results.map((result, index) => (
                          <div key={index} className="d-flex align-items-start gap-2">
                            <div className="resultado-bullet"></div>
                            <span className="text-gray-600 small">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cta-section text-center">
                  <h3 className="h3 fw-bold text-white mb-3">Quer saber mais sobre o SafeWaves?</h3>
                  <p className="text-white mb-4" style={{ opacity: 0.9 }}>
                    Conheça a equipe por trás deste projeto inovador
                  </p>
                  <Link to="/funcionarios" className="btn btn-blue-custom bg-white text-blue-700 border-0">
                    Conhecer a Equipe
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
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
