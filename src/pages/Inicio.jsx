

export default function Inicio() {
  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-[var(--color-accent-light)]">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 text-balance">TechPro</h1>

            <p className="text-xl md:text-2xl text-black mb-2">Inovação em Tecnologia</p>

            <p className="text-lg text-black max-w-2xl mx-auto">
              Uma equipe dedicada a criar soluções tecnológicas de qualidade, transformando ideias em realidade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/funcionarios/funcionarios"
              className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Conheça Nossa Equipe
            </Link>

            <Link
              href="/projeto1/projeto1"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl border-2 border-black hover:bg-gray-50 transition-all duration-300 inline-block"
            >
              Ver Nossos Projetos
            </Link>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-black rounded-full opacity-5" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-black rounded-full opacity-5" />
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Por que escolher a TechPro?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiência",
                description: "Equipe com anos de experiência em desenvolvimento de software.",
              },
              {
                title: "Qualidade",
                description: "Comprometimento com excelência em cada projeto realizado.",
              },
              {
                title: "Inovação",
                description: "Sempre buscando as melhores tecnologias e práticas do mercado.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-black rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
