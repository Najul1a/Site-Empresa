

export default function Projeto2() {
  return (
    <div className="bg-white">
      <section className="bg-white py-12 border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/inicio/inicio" className="text-black hover:text-gray-700 font-medium mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Projeto 2</h1>
          <p className="text-lg text-black">Plataforma de E-commerce com IA</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 bg-gray-100 rounded-2xl h-80 flex items-center justify-center border-2 border-black">
            <div className="text-center">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="text-black">Visualização do Projeto</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Sobre o Projeto</h2>
            <p className="text-black leading-relaxed mb-4">
              Uma plataforma de e-commerce revolucionária que combina tecnologia de ponta com inteligência artificial
              para oferecer uma experiência de compra personalizada e intuitiva aos usuários.
            </p>
            <p className="text-black leading-relaxed">
              O sistema utiliza machine learning para recomendações de produtos, análise de preferências do cliente e
              otimização automática de inventário, resultando em uma experiência de compra mais relevante e conversões
              aumentadas.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Recomendações com IA", desc: "Sistema inteligente que aprende preferências do usuário" },
                { title: "Busca Avançada", desc: "Busca por imagem, voz e filtros customizados" },
                { title: "Checkout Rápido", desc: "Processo simplificado com múltiplos métodos de pagamento" },
                { title: "Análise de Dados", desc: "Dashboard detalhado com insights de vendas e comportamento" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border-l-4 border-black rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-black text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Tecnologias Utilizadas</h2>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "Python", "TensorFlow", "MongoDB", "Stripe", "Firebase"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Duração", value: "5 meses" },
              { label: "Equipe", value: "7 pessoas" },
              { label: "Clientes", value: "1000+" },
              { label: "Status", value: "Em Crescimento" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border-2 border-black text-center hover:bg-gray-50 transition-colors"
              >
                <p className="text-2xl font-bold text-black mb-1">{stat.value}</p>
                <p className="text-sm text-black">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-black">
            <h3 className="text-2xl font-bold text-black mb-4">Resultados Alcançados</h3>
            <ul className="space-y-3 text-black">
              <li className="flex items-start">
                <span className="text-black mr-3 font-bold text-lg">✓</span>
                <span>Aumento de 65% em taxa de conversão</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 font-bold text-lg">✓</span>
                <span>Redução de 30% no tempo médio de navegação</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 font-bold text-lg">✓</span>
                <span>Satisfação do cliente aumentada para 95%</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t-4 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-6">Veja também nosso primeiro projeto</h2>
          <Link
            href="/projeto1/projeto1"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 active:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ← Projeto Anterior
          </Link>
        </div>
      </section>
    </div>
  )
}
