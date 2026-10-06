/* ==========================================================================
   DADOS DO PORTFÓLIO
   --------------------------------------------------------------------------
  
   ========================================================================== */

window.PORTFOLIO = {

  /* ------------------------------ Perfil ------------------------------ */
  perfil: {
    nome: "Igor Batista Pereira",
    nomeCurto: "Igor",
    cargo: "Estudante de Sistemas de Informação | Desenvolvedor em formação",
    disponibilidade: "Disponível para estágio e vagas de desenvolvedor júnior",
    resumoHero:
      "Desenvolvo soluções com foco em sistemas, automação e dados, utilizando tecnologias como Java, Python, JavaScript, React e SQL. Atualmente, aplico meus conhecimentos na prática durante meu estágio no EMEDI/TJRJ e na graduação em Sistemas de Informação.",
    foto: "imagens/igor.png",
    fotoAlt: "Retrato de Igor Batista Pereira",
    curriculo: "assets/Igor Batista Pereira.pdf" // ex.: "assets/curriculo-igor.pdf" — vazio = botão oculto
  },

  /* ------------------------------ Links ------------------------------- */
  links: {
    github: "https://github.com/igorbatistapdev",     // ex.: "https://github.com/seu-usuario"
    linkedin: "https://www.linkedin.com/in/igor-b-pereira", // ex.: "https://www.linkedin.com/in/seu-perfil"
    email: "igor.batistap.dev@gmail.com",              // ex.: "igor@exemplo.com"
    whatsapp: "5521991252809"                 // formato internacional, só números (mantido do projeto original)
  },

  /* ---------------------------- Sobre mim ----------------------------- */
  sobre: {
    paragrafos: [
      "Estudante de Sistemas de Informação (6º período) e estagiário de Suporte e Tecnologia no Tribunal de Justiça do Estado do Rio de Janeiro, onde atuo com análise de dados, automação de processos e soluções tecnológicas para demandas internas. Experiência prévia em desenvolvimento web com React e JavaScript. Base acadêmica em Java, Programação Orientada a Objetos, MVC e SQL, reforçada como monitor de Programação de Computadores III e de Banco de Dados I. Busco estágio em TI para ampliar a experiência prática em desenvolvimento, dados ou automação. "
    ],
    destaques: [
      { rotulo: "Formação", valor: "Sistemas de Informação, 6º período" },
      { rotulo: "Estágio", valor: "TJRJ" },
      { rotulo: "Interesses", valor: "Desenvolvimento, dados, automação, segurança e privacidade" }
    ]
  },

  /* ---------------------------- Experiência --------------------------- */
  experiencia: [
    {
      cargo: "Estagiário de TI | Dados e Automação",            // ajuste o cargo exato, se necessário
      organizacao: "Escola de Mediação do Tribunal de Justiça do Estado do Rio de Janeiro (EMEDI/TJRJ)",
      periodo: "10/2025 - Atual",            // ex.: "Mar/2025 – Atual"
      atividades: [
        "Desenvolvimento de dashboard web interativo para centralização, organização e análise de dados de cursos e eventos, utilizando Python, Pandas, Dash e Plotly.",
        "Tratamento, padronização e estruturação de dados provenientes de planilhas Excel, facilitando a consulta e análise das informações.",
        "Implementação de filtros interativos, gráficos, tabelas com busca/ordenação e filtragem cruzada, permitindo diferentes perspectivas de análise dos dados.",
        "Desenvolvimento de interface responsiva com suporte a diferentes dispositivos e implementação de arquitetura modular para organização da aplicação.",
      ],
      // Complemente com fatos reais (números, ferramentas, resultados) para fortalecer esta seção:
      //observacao: "[ADICIONAR RESULTADOS OU ENTREGAS ESPECÍFICAS]"
    }
  ],

  /* ---------------------------- Habilidades --------------------------- */
  habilidades: [
  {
    categoria: "Linguagens",
    itens: ["Java", "Python", "JavaScript", "C", "SQL"]
  },

  {
    categoria: "Front-end",
    itens: ["HTML", "CSS", "JavaScript", "React"]
  },

  {
    categoria: "Back-end",
    itens: ["Java", "Python", "Node.js", "Spring Boot (em aprendizado)"]
  },

  {
    categoria: "Dados e Banco de Dados",
    itens: [
      "SQL",
      "PostgreSQL",
      "MariaDB",
      "Oracle APEX",
      "Pandas",
      "Power BI",
      "MySQL"
    ]
  },

  {
    categoria: "Análise e Visualização",
    itens: [
      "Plotly",
      "Streamlit",
      "Dash",
      "Jupyter Notebook",
      "Seaborn",
      "Numpy"
    ]
  },

  {
    categoria: "Ferramentas de Desenvolvimento",
    itens: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "PyCharm",
      "Docker"
    ]
  },
],

  /* ------------------------------ Projetos ---------------------------- */
  /* `destaque: true` mostra o projeto em um card grande no topo.
     `imagem: ""` mostra um espaço reservado — coloque a captura em /imagens e informe o caminho. */
  projetos: [
    {
      destaque: true,
      nome: "Dashboard de Análise de Capacitações e Eventos",
      descricao:
        "Aplicação web interativa desenvolvida para organização, análise e visualização de dados de " +
        "capacitações e eventos.",
      problema:
        "Facilitar a leitura e a análise de dados de capacitações e eventos por meio de visualizações interativas.",
      tecnologias: ["Python", "Pandas", "Plotly", "Dash", "OpenPyXL", "CSS", "Git/GitHub"],
      imagem: "imagens/dashboard-tjrj.png",
      imagemAlt: "",
      imagemNota: "Adicione uma captura de tela do dashboard em imagens/dashboard-emedi.webp",
      github: "https://github.com/igorbatistapdev/Dashboard-TJRJ.git",
      demo: "https://xxigorxx.pythonanywhere.com/"
    },
    {
  nome: "Análise de Dados Streaming Brasil",
  descricao:
    "Projeto acadêmico de análise de dados sobre o mercado de streaming no Brasil, desenvolvido para identificar padrões de consumo, assinaturas, receita, avaliações e desempenho das plataformas ao longo do tempo. O projeto utiliza uma base de dados simulada e apresenta os resultados por meio de análises exploratórias, indicadores e visualizações interativas em um dashboard.",

  problema:
    "Analisar e apresentar dados do mercado de streaming no Brasil de forma clara e interativa, permitindo identificar padrões, comparar plataformas e compreender a evolução de indicadores como assinaturas, receita, consumo e avaliações.",

  tecnologias: [
    "Python",
    "Pandas",
    "Plotly",
    "Streamlit",
    "Análise de Dados",
    "Visualização de Dados"
  ],

  imagem: "imagens/dashboard.png",
  imagemAlt: "Dashboard de análise de dados sobre plataformas de streaming no Brasil",
  imagemNota: "Adicione uma captura de tela do dashboard em imagens/streaming-brasil.webp",
  github: "https://github.com/igorbatistapdev/dashboard-streaming.git",
  demo: ""
},
    {
  nome: "Site de Cafeteria",

  descricao:
    "Site institucional para uma cafeteria, desenvolvido com uma interface moderna e responsiva. " +
    "O projeto apresenta as principais informações do estabelecimento, incluindo as seções Sobre, Menu, Avaliações e Endereço, " +
    "além de recursos de busca e carrinho de compras no cabeçalho.",

  problema:
    "Criar uma presença digital para a cafeteria, facilitando o acesso dos clientes às informações do estabelecimento, " +
    "à consulta do menu e à interação com os produtos de forma simples, organizada e intuitiva.",

  tecnologias: ["HTML", "CSS", "JavaScript"],

  imagem: "imagens/cafena.webp",

  imagemAlt:
    "Página inicial do site Cafena com o título “O melhor café da região” sobre uma xícara cheia de grãos de café",

  github: "https://github.com/igorbatistapdev/Cafeteria.git",

  demo: "https://igorbatistapdev.github.io/Cafeteria/"
}
  ],

  /* ------------------------------ Formação ---------------------------- */
  formacao: [
    {
      curso: "Sistemas de Informação",
      instituicao: "Centro Universitário Unilasalle do Rio de Janeiro",
      status: "Cursando - 6º período",
      previsao: "Previsão de conclusão: 2027"
    }
  ]
};
