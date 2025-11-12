export default function Footer() {
    return (
      <footer className="bg-white border-t border-[var(--color-border)] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-black mb-4">TechPro</h3>
              <p className="text-black">Soluções em tecnologia para empresas modernas.</p>
            </div>
  
            <div>
              <h4 className="font-semibold text-black mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-black">
                <li>
                  <a href="/" className="hover:text-[#3b3b3b]">
                    Início
                  </a>
                </li>
                <li>
                  <a href="/funcionarios" className="hover:text-[#3b3b3b]">
                    Funcionários
                  </a>
                </li>
                <li>
                  <a href="/projeto-1" className="hover:text-[#3b3b3b]">
                    Projeto 1
                  </a>
                </li>
                <li>
                  <a href="/projeto-2" className="hover:text-[#3b3b3b]">
                    Projeto 2
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-semibold text-black mb-4">Contato</h4>
              <p className="text-sm text-black">Email: contato@techpro.com</p>
              <p className="text-sm text-black">Tel: (11) 99999-9999</p>
            </div>
          </div>
  
          <div className="border-t border-[var(--color-border)] pt-8">
            <p className="text-center text-sm text-black">© 2025 TechPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }
  