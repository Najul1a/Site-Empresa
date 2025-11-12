

const employees = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Desenvolvedor Full Stack",
    description: "Especialista em desenvolvimento web com mais de 8 anos de experiência.",
    experience: "8+ anos em desenvolvimento web, React e Node.js",
    image: "👨‍💻",
  },
  {
    id: 2,
    name: "Marina Costa",
    role: "Designer UI/UX",
    description: "Apaixonada por criar interfaces intuitivas e experiências memoráveis.",
    experience: "6+ anos em design de interfaces, prototipagem e user research",
    image: "👩‍🎨",
  },
  {
    id: 3,
    name: "João Santos",
    role: "Desenvolvedor Backend",
    description: "Especialista em arquitetura de sistemas e bases de dados.",
    experience: "7+ anos em backend, APIs REST e otimização de performance",
    image: "👨‍💼",
  },
  {
    id: 4,
    name: "Ana Ferreira",
    role: "Gerente de Projetos",
    description: "Líder experiente em gestão ágil e coordenação de equipes.",
    experience: "10+ anos em gestão de projetos, Scrum e Kanban",
    image: "👩‍💼",
  },
  {
    id: 5,
    name: "Pedro Oliveira",
    role: "DevOps Engineer",
    description: "Especialista em infraestrutura, deployment e segurança.",
    experience: "5+ anos em DevOps, Docker, Kubernetes e cloud computing",
    image: "👨‍🔧",
  },
]

export default function Funcionarios() {
  return (
    <div className="bg-white">
      <section className="bg-white py-16 border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/inicio/inicio" className="text-black hover:text-gray-700 font-medium mb-4 inline-block">
            ← Voltar
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Nossa Equipe</h1>
          <p className="text-lg text-black">Profissionais dedicados a transformar suas ideias em realidade.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="p-6 bg-white rounded-2xl border-2 border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{employee.image}</div>
                <h3 className="text-xl font-bold text-black mb-2">{employee.name}</h3>
                <p className="text-sm font-semibold text-black mb-3">{employee.role}</p>
                <p className="text-black text-sm mb-3">{employee.description}</p>
                <p className="text-xs text-black italic">{employee.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-t-4 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Pronto para trabalhar com a gente?</h2>
          <p className="text-lg text-black mb-8">Entre em contato e descubra como podemos ajudar seu projeto.</p>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Solicitar Proposta via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
