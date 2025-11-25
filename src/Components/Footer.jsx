import { Link } from "react-router"

export function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="gradient-text-blue fw-bold mb-3">SafeGirls</h3>
            <p className="text-gray-600 pe-md-5">
              Inovação em primeiro lugar. Desenvolvemos soluções inteligentes que unem tecnologia e empatia para ampliar
              a segurança pessoal.
            </p>
          </div>

          <div className="col-md-3 mb-4 mb-md-0">
            <h4 className="text-gray-800 fw-semibold mb-3 fs-6">Links Rápidos</h4>
            <div className="d-flex flex-column gap-2">
              <Link to="/" className="text-gray-600 text-decoration-none">
                Página Inicial
              </Link>
              <Link to="/funcionarios" className="text-gray-600 text-decoration-none">
                Funcionários
              </Link>
              <Link to="/projeto1" className="text-gray-600 text-decoration-none">
                Projeto 1
              </Link>
              <Link to="/projeto2" className="text-gray-600 text-decoration-none">
                Projeto 2
              </Link>
            </div>
          </div>

          <div className="col-md-3">
            <h4 className="text-gray-800 fw-semibold mb-3 fs-6">Contato</h4>
            <div className="d-flex flex-column gap-2">
              <a href="mailto:contato@safegirls.com" className="text-gray-600 text-decoration-none">
                <i className="bi bi-envelope me-2"></i>
                contato@safegirls.com
              </a>
              <a href="tel:+5511999999999" className="text-gray-600 text-decoration-none">
                <i className="bi bi-telephone me-2"></i>
                (11) 9999-9999
              </a>
            </div>
          </div>
        </div>

        <div className="border-top border-gray pt-4">
          <p className="text-gray-500 mb-0 small">© 2025 SafeGirls. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
