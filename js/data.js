/* ==========================================================================
   DADOS DO PORTFÓLIO — edite SOMENTE este arquivo para mudar o conteúdo.
   --------------------------------------------------------------------------
   • Tudo que estiver como "[ADICIONAR ...]" é um placeholder: o site detecta
     esse texto e exibe o item como "pendente" (sem link clicável).
   • Para preencher, troque o texto entre aspas pelo valor real.
   • Para o currículo: coloque o PDF em /assets (ex.: assets/curriculo-igor.pdf)
     e preencha `curriculo` abaixo. O botão só aparece quando houver arquivo.
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
    curriculo: "assets/igor_batista_pereira.pdf" // ex.: "assets/curriculo-igor.pdf" — vazio = botão oculto
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
      //observacao: "[ADICIONAR RESULTADOS OU ENTREGAS ESPECÍFICAS, SE DESEJAR]"
    }
  ],

  /* ---------------------------- Habilidades --------------------------- */
  habilidades: [
    { categoria: "Linguagens",     itens: ["Java", "Python", "JavaScript", "C", "SQL"] },
    { categoria: "Front-end",      itens: ["HTML", "CSS", "JavaScript", "React"] },
    { categoria: "Back-end",       itens: ["Java", "Python", "Spring Boot (em aprendizado)", "Node.JS"] },
    { categoria: "Banco de dados", itens: ["PostgreSQL", "MariaDB", "SQL", "ORACLE APEX"] },
    { categoria: "Ferramentas",    itens: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Eclipse", "PyCharm", "Power Automate", "Figma", "Bizagi"] }
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
      imagem: "",
      imagemAlt: "",
      imagemNota: "Adicione uma captura de tela do dashboard em imagens/dashboard-emedi.webp",
      github: "[ADICIONAR LINK DO GITHUB]",
      demo: "[ADICIONAR LINK DA DEMO]"
    },
    {
      nome: "Sistema distribuído de corrida de cavalos",
      descricao:
        "Projeto acadêmico em Java que explora arquitetura distribuída, com comunicação cliente-servidor " +
        "via sockets TCP.",
      problema:
        "Praticar a comunicação entre vários clientes e um servidor em uma aplicação concorrente e distribuída.",
      tecnologias: ["Java", "TCP", "Sockets", "Cliente/Servidor", "Programação concorrente", "POO"],
      imagem: "",
      imagemAlt: "",
      imagemNota: "Adicione uma captura de tela em imagens/corrida-cavalos.webp",
      github: "[ADICIONAR LINK DO GITHUB]",
      demo: ""
    },
    {
      nome: "Cafena — site de cafeteria",
      descricao:
        "Site para uma cafeteria com página inicial, seções Sobre, Menu, Avaliações e Endereço, " +
        "além de busca e carrinho no cabeçalho.",
      problema: "[ADICIONAR O PROBLEMA QUE O PROJETO RESOLVE]",
      tecnologias: ["[ADICIONAR TECNOLOGIAS]"],
      imagem: "imagens/cafena.webp",
      imagemAlt: "Página inicial do site Cafena com o título “O melhor café da região” sobre uma xícara cheia de grãos de café",
      github: "[ADICIONAR LINK DO GITHUB]",
      demo: "[ADICIONAR LINK DA DEMO]"
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
