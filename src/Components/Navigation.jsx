import { Link, useLocation } from "react-router"

export function Navigation() {
  const location = useLocation()

  const links = [
    { href: "/", label: "Página Inicial" },
    { href: "/funcionarios", label: "Funcionários" },
    { href: "/projeto1", label: "Projeto 1" },
    { href: "/projeto2", label: "Projeto 2" },
  ]

  return (
    <nav className="navbar navbar-custom py-3">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-3">
          <div className="logo-icon">
            <i className="bi bi-shield-fill-check fs-5"></i>
          </div>
          <span className="gradient-text-blue fw-bold fs-5">SafeGirls</span>
        </Link>

        <div className="d-flex gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link-custom ${location.pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
