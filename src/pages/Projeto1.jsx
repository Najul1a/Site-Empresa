

export default function Projeto1() {
  return (
    <div className="bg-white">
      <section className="bg-white py-12 border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/inicio/inicio" className="text-black hover:text-gray-700 font-medium mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Projeto 1</h1>
          <p className="text-lg text-black">Platform de Gestão de Tarefas Corporativas</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 bg-gray-100 rounded-2xl h-80 flex items-center justify-center border-2 border-black">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-black">Visualização do Projeto</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Sobre o Projeto</h2>
            <p className="text-black leading-relaxed mb-4">
              Uma plataforma completa de gestão de tarefas desenvolvida para empresas de médio porte, permitindo melhor
              organização e acompanhamento de projetos em tempo real.
            </p>
            <p className="text-black leading-relaxed">
              O sistema oferece funcionalidades avançadas como atribuição de tarefas, definição de prazos,
              acompanhamento de progresso e relatórios detalhados, tudo integrado em uma interface intuitiva e
              responsiva.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Dashboard Intuitivo", desc: "Visualização clara e em tempo real de todas as tarefas" },
                { title: "Atribuição de Tarefas", desc: "Distribuição eficiente de trabalho entre membros da equipe" },
                { title: "Relatórios Detalhados", desc: "Análise profunda do progresso e produtividade" },
                { title: "Notificações em Tempo Real", desc: "Atualizações instantâneas de mudanças e prazos" },
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
              {["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"].map((tech) => (
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
              { label: "Duração", value: "3 meses" },
              { label: "Equipe", value: "5 pessoas" },
              { label: "Usuários", value: "500+" },
              { label: "Status", value: "Em Produção" },
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
                <span>Aumento de 40% na produtividade da equipe</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 font-bold text-lg">✓</span>
                <span>Redução de 50% no tempo de planejamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 font-bold text-lg">✓</span>
                <span>Melhor comunicação entre departamentos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t-4 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-6">Veja também nosso outro projeto</h2>
          <Link
            href="/projeto2/projeto2"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 active:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Próximo Projeto →
          </Link>
        </div>
      </section>
    </div>
  )
}
