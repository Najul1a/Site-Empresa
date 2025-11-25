import { Link } from "react-router"
import { Navigation } from "../Components/Navigation"
import { Footer } from "../Components/Footer"

export default function Projeto1() {
  const features = [
    "Verificação de links, ligações e mensagens suspeitas",
    "Identificação automática de fake news e golpes digitais",
    "Alertas em tempo real com análise de risco",
    "Recursos de acessibilidade para deficientes visuais e auditivos",
    "Conteúdo educativo sobre navegação segura e prevenção de fraudes",
  ]

  const results = [
    "Lançamento do aplicativo nas lojas virtuais",
    "Atingir 10.000 downloads no primeiro semestre",
    "Parcerias com instituições de apoio social",
    "Redução de fraudes digitais entre usuários ativos",
    "Monitoramento de impacto por indicadores de engajamento",
  ]

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="projeto-hero bg-gradient-blue py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-10">
                <div className="badge-projeto mb-4">
                  <i className="bi bi-shield-check"></i>
                  <span>Proteção Digital Inteligente</span>
                </div>

                <h1 className="display-2 fw-bold text-white mb-4 lh-sm">Projeto 1 — SafeGuard</h1>
                <p className="fs-4 text-white mb-0" style={{ opacity: 0.95 }}>
                  Assistente digital para proteção de populações vulneráveis contra crimes cibernéticos e fake news
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
                      O avanço acelerado da tecnologia trouxe consigo um aumento significativo nos crimes cibernéticos,
                      afetando especialmente pessoas com baixa familiaridade digital, incluindo idosos, adultos com
                      pouca experiência tecnológica e indivíduos com deficiência visual e auditiva.
                    </p>
                    <p className="mb-0">
                      Diante desse cenário, surge a necessidade de soluções acessíveis, inclusivas e intuitivas, capazes
                      de identificar e bloquear ameaças digitais enquanto educam os usuários para um uso mais consciente
                      e seguro da internet.
                    </p>
                  </div>
                </div>

                {/* Sobre */}
                <div className="content-card mb-4">
                  <h2 className="h3 fw-bold text-gray-900 mb-4">Sobre o SafeGuard</h2>
                  <p className="text-gray-600 lh-lg mb-0">
                    O SafeGuard é um assistente de segurança pessoal que utiliza inteligência artificial para proteger
                    usuários vulneráveis contra crimes cibernéticos e fake news. O sistema disponibiliza ferramentas
                    acessíveis, como leitura de tela, legendas e interface simplificada, atendendo usuários com
                    deficiência visual e auditiva.
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
                          <div className="fw-bold text-blue-700 mb-1">Idosos (60+)</div>
                          <div className="small text-gray-600">
                            Maiores vítimas de fraudes virtuais e engenharia social
                          </div>
                        </div>
                        <div className="publico-item">
                          <div className="fw-bold text-blue-700 mb-1">Adultos com baixa alfabetização digital</div>
                          <div className="small text-gray-600">Dificuldades com segurança online</div>
                        </div>
                        <div className="publico-item">
                          <div className="fw-bold text-blue-700 mb-1">Deficientes visuais e auditivos</div>
                          <div className="small text-gray-600">Necessidade de ferramentas acessíveis</div>
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
                  <h3 className="h3 fw-bold text-white mb-3">Quer saber mais sobre o SafeGuard?</h3>
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
