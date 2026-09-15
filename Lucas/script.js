const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  // Alterna a classe 'dark-mode' no <body>
  document.body.classList.toggle('dark-mode');
});

const perguntas = [
  {
    pergunta: "O que você costuma fazer no seu tempo livre por puro prazer?",
    opcoes: [
      { letra: "A", texto: "Ler, escrever, pesquisar ou aprender sobre histórias e pessoas." },
      { letra: "B", texto: "Desenhar, ouvir/criar música, fotografar ou praticar artes." },
      { letra: "C", texto: "Resolver jogos de lógica, analisar dados ou mexer em tecnologia." },
      { letra: "D", texto: "Organizar eventos, praticar esportes ou fazer atividades manuais." }
    ]
  },
  {
    pergunta: "Quando alguém te pede ajuda no dia a dia, geralmente é para:",
    opcoes: [
      { letra: "A", texto: "Ouvir conselhos, resolver conflitos ou pedir opiniões sobre textos." },
      { letra: "B", texto: "Ter ideias criativas ou pedir ajuda com projetos visuais." },
      { letra: "C", texto: "Explicar algo complexo, matemática ou organizar planilhas." },
      { letra: "D", texto: "Montar/consertar algo ou ajudar em atividades práticas." }
    ]
  },
  {
    pergunta: "Qual tipo de assunto chama mais a sua atenção em conteúdos na internet/mídia?",
    opcoes: [
      { letra: "A", texto: "Comportamento humano, psicologia, educação ou política." },
      { letra: "B", texto: "Design, arquitetura, cinema ou expressão cultural." },
      { letra: "C", texto: "Ciência, inovações tecnológicas ou mercado financeiro." },
      { letra: "D", texto: "Saúde, biologia, sustentabilidade, mecânica ou esportes." }
    ]
  },
  {
    pergunta: "Em qual tipo de ambiente de trabalho você se sentiria mais confortável?",
    opcoes: [
      { letra: "A", texto: "Escolas, escritórios de consultoria, ONGs ou atendimento a pessoas." },
      { letra: "B", texto: "Estúdios criativos, agências, ateliês ou ambientes flexíveis." },
      { letra: "C", texto: "Empresas de tecnologia, laboratórios ou escritórios corporativos." },
      { letra: "D", texto: "Ao ar livre, oficinas, hospitais ou canteiros de obras." }
    ]
  },
  {
    pergunta: "Como você prefere interagir com as pessoas no seu trabalho?",
    opcoes: [
      { letra: "A", texto: "Ensinando, aconselhando, cuidando ou liderando pessoas." },
      { letra: "B", texto: "Colaborando em brainstorms ou apresentando ideias criativas." },
      { letra: "C", texto: "Interação objetiva focada em relatórios, dados e metas." },
      { letra: "D", texto: "Trabalhando em equipe prática ou lidando com o público em geral." }
    ]
  },
  {
    pergunta: "Qual o seu nível de tolerância à rotina e regras estruturadas?",
    opcoes: [
      { letra: "A", texto: "Equilíbrio entre regras claras e momentos para adaptar processos." },
      { letra: "B", texto: "Preciso de liberdade para criar e flexibilidade de horários." },
      { letra: "C", texto: "Gosto de processos estruturados e métricas bem definidas." },
      { letra: "D", texto: "Prefiro a rotina da ação: saber o que fazer e executar." }
    ]
  },
  {
    pergunta: "Diante de um problema difícil, qual é a sua primeira reação?",
    opcoes: [
      { letra: "A", texto: "Conversar com os envolvidos para buscar um consenso." },
      { letra: "B", texto: "Pensar em soluções inovadoras e fora da caixa." },
      { letra: "C", texto: "Analisar os fatos, coletar dados e calcular a solução lógica." },
      { letra: "D", texto: "Agir rapidamente para encontrar uma solução prática." }
    ]
  },
  {
    pergunta: "Como você se sente lidando com números, estatísticas ou códigos?",
    opcoes: [
      { letra: "A", texto: "Prefiro evitar; foco mais em textos e pessoas." },
      { letra: "B", texto: "Uso apenas se necessário para projetos criativos." },
      { letra: "C", texto: "Adoro analisar padrões, números e lógica." },
      { letra: "D", texto: "Entendo o básico para aplicação prática no dia a dia." }
    ]
  },
  {
    pergunta: "Qual ferramenta você mais gostaria de usar no dia a dia profissional?",
    opcoes: [
      { letra: "A", texto: "Livros, apresentações e comunicação interpessoal." },
      { letra: "B", texto: "Softwares de edição, câmeras ou ferramentas de design." },
      { letra: "C", texto: "Planilhas, linguagens de programação e softwares de análise." },
      { letra: "D", texto: "Equipamentos médicos, máquinas, ferramentas ou itens esportivos." }
    ]
  },
  {
    pergunta: "O que é mais importante para você em uma carreira?",
    opcoes: [
      { letra: "A", texto: "Impactar positivamente a vida das pessoas e a sociedade." },
      { letra: "B", texto: "Ter liberdade de expressão e autonomia para criar." },
      { letra: "C", texto: "Estabilidade, boa remuneração e reconhecimento técnico." },
      { letra: "D", texto: "Ver resultados concretos do trabalho no mundo real." }
    ]
  },
  {
    pergunta: "Como você lida com riscos e incertezas no trabalho?",
    opcoes: [
      { letra: "A", texto: "Prefiro estabilidade em ambientes com apoio mútuo." },
      { letra: "B", texto: "Aceito riscos se trouxerem oportunidade para inovar." },
      { letra: "C", texto: "Minimizo riscos usando planejamento e análise estatística." },
      { letra: "D", texto: "Enfrento os desafios adaptando-me de forma prática." }
    ]
  },
  {
    pergunta: "Se pudesse escolher uma missão profissional, qual seria?",
    opcoes: [
      { letra: "A", texto: "Educar, cuidar ou defender direitos humanos." },
      { letra: "B", texto: "Inspirar pessoas através de arte, design ou histórias." },
      { letra: "C", texto: "Desenvolver novas tecnologias ou gerenciar negócios." },
      { letra: "D", texto: "Construir, reparar ou cuidar da saúde física." }
    ]
  },
  {
    pergunta: "Em um projeto em equipe, qual papel você assume naturalmente?",
    opcoes: [
      { letra: "A", texto: "O mediador, garantindo a união e o bem-estar do grupo." },
      { letra: "B", texto: "O criativo, trazendo ideias diferentes." },
      { letra: "C", texto: "O estrategista, organizando o plano e checando os detalhes." },
      { letra: "D", texto: "O executor, garantindo que tudo seja feito na prática." }
    ]
  },
  {
    pergunta: "Qual tipo de desafio mais te motiva?",
    opcoes: [
      { letra: "A", texto: "Compreender pessoas ou ajudá-las a superar obstáculos." },
      { letra: "B", texto: "Criar algo do zero a partir de uma ideia em branco." },
      { letra: "C", texto: "Desvendar um enigma complexo ou otimizar um processo." },
      { letra: "D", texto: "Superar um desafio prático com resultados visíveis." }
    ]
  },
  {
    pergunta: "Daqui a 10 anos, como você se imagina idealmente?",
    opcoes: [
      { letra: "A", texto: "Sendo referência em ajudar ou ensinar pessoas." },
      { letra: "B", texto: "Reconhecido por projetos criativos ou marca própria." },
      { letra: "C", texto: "Em um cargo técnico de tecnologia, dados ou finanças." },
      { letra: "D", texto: "Com um negócio próprio ou atuando em área operacional/técnica." }
    ]
  }
];

const perfis = {
  A: { titulo: "Humanas, Saúde Mental e Educação", desc: "Vocação para relações humanas, comunicação, psicologia, ensino e impacto social." },
  B: { titulo: "Artes, Design e Comunicação Criativa", desc: "Vocação para expressão visual, inovação estética, comunicação de marcas e criação." },
  C: { titulo: "Exatas, Tecnologia e Gestão de Dados", desc: "Vocação para análise lógica, desenvolvimento técnico, finanças, engenharia e tecnologia." },
  D: { titulo: "Saúde Prática, Biológicas e Operacional", desc: "Vocação para ação prática, cuidados de saúde, biologia, engenharia aplicada e execução." }
};

let indiceAtual = 0;
let respostas = {};

function carregarPergunta() {
  const q = perguntas[indiceAtual];
  document.getElementById("question-number").innerText = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
  document.getElementById("question-text").innerText = q.pergunta;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  q.opcoes.forEach(opt => {
    const div = document.createElement("div");
    div.className = `option-card ${respostas[indiceAtual] === opt.letra ? 'selected' : ''}`;
    div.onclick = () => selecionarOpcao(opt.letra);
    div.innerText = `${opt.letra}) ${opt.texto}`;
    container.appendChild(div);
  });

  document.getElementById("btn-prev").disabled = indiceAtual === 0;
  document.getElementById("btn-next").disabled = !respostas[indiceAtual];
  document.getElementById("btn-next").innerText = indiceAtual === perguntas.length - 1 ? "Ver Resultado" : "Próximo";

  const progresso = ((indiceAtual + 1) / perguntas.length) * 100;
  document.getElementById("progress").style.width = `${progresso}%`;
}

function selecionarOpcao(letra) {
  respostas[indiceAtual] = letra;
  carregarPergunta();
}

function proximaPergunta() {
  if (indiceAtual < perguntas.length - 1) {
    indiceAtual++;
    carregarPergunta();
  } else {
    exibirResultado();
  }
}

function perguntaAnterior() {
  if (indiceAtual > 0) {
    indiceAtual--;
    carregarPergunta();
  }
}

function exibirResultado() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  const contagem = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(respostas).forEach(letra => contagem[letra]++);

  let perfilDominante = "A";
  for (let letra in contagem) {
    if (contagem[letra] > contagem[perfilDominante]) {
      perfilDominante = letra;
    }
  }

  const p = perfis[perfilDominante];
  document.getElementById("result-profile").innerHTML = `
    <h3>${p.titulo}</h3>
    <p>${p.desc}</p>
  `;

  const breakdown = document.getElementById("result-breakdown");
  breakdown.innerHTML = "<h4>Detalhamento das respostas:</h4>";
  for (let letra in contagem) {
    const porcentagem = Math.round((contagem[letra] / perguntas.length) * 100);
    breakdown.innerHTML += `<p><strong>${perfis[letra].titulo}:</strong> ${porcentagem}% (${contagem[letra]} respostas)</p>`;
  }
}

function reiniciarTeste() {
  indiceAtual = 0;
  respostas = {};
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  carregarPergunta();
}

// Inicializa a primeira pergunta ao carregar a página
carregarPergunta();

