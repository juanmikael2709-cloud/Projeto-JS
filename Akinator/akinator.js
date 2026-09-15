let profissoesData = [
  { "nome": "Desenvolvedor(a)", "salario": 5000, "tecnologia": true, "tags": ["computador", "escritorio", "exatas"] },
  { "nome": "Médico(a)", "salario": 12000, "tecnologia": false, "tags": ["saude", "hospital", "faculdade"] },
  { "nome": "Professor(a)", "salario": 4500, "tecnologia": true, "tags": ["educacao", "escola", "ensino"] },
  { "nome": "Advogado(a)", "salario": 7000, "tecnologia": false, "tags": ["direito", "escritorio", "justica"] },
  { "nome": "Engenheiro(a) Civil", "salario": 8500, "tecnologia": true, "tags": ["engenharia", "exatas", "construcao"] },
  { "nome": "Enfermeiro(a)", "salario": 4500, "tecnologia": true, "tags": ["saude", "hospital", "cuidados"] },
  { "nome": "Designer Gráfico", "salario": 5000, "tecnologia": true, "tags": ["criatividade", "computador", "design"] },
  { "nome": "Jornalista", "salario": 4000, "tecnologia": true, "tags": ["comunicacao", "escrita", "noticias"] },
  { "nome": "Arquiteto(a)", "salario": 6500, "tecnologia": true, "tags": ["projetos", "plantas", "criatividade"] },
  { "nome": "Chef de Cozinha", "salario": 4000, "tecnologia": false, "tags": ["culinaria", "restaurante", "gastronomia"] },
  { "nome": "Contador(a)", "salario": 5500, "tecnologia": true, "tags": ["contabilidade", "financas", "impostos"] },
  { "nome": "Psicólogo(a)", "salario": 5000, "tecnologia": false, "tags": ["psicologia", "comportamento", "terapia"] },
  { "nome": "Dentista", "salario": 9000, "tecnologia": true, "tags": ["odontologia", "clinica", "saude"] },
  { "nome": "Farmacêutico(a)", "salario": 5000, "tecnologia": true, "tags": ["farmacia", "medicamentos", "laboratorio"] },
  { "nome": "Eletricista", "salario": 3500, "tecnologia": true, "tags": ["eletrica", "ferramentas", "manutencao"] },
  { "nome": "Mecânico(a)", "salario": 4000, "tecnologia": true, "tags": ["automoveis", "motores", "oficina"] },
  { "nome": "Fotógrafo(a)", "salario": 4500, "tecnologia": true, "tags": ["fotografia", "camera", "imagem"] },
  { "nome": "Ator/Atriz", "salario": 6000, "tecnologia": false, "tags": ["teatro", "atuacao", "entretenimento"] },
  { "nome": "Músico(a)", "salario": 4000, "tecnologia": true, "tags": ["musica", "instrumentos", "shows"] },
  { "nome": "Veterinário(a)", "salario": 6500, "tecnologia": true, "tags": ["animais", "veterinaria", "clinica"] },
  { "nome": "Biólogo(a)", "salario": 4500, "tecnologia": true, "tags": ["biologia", "natureza", "pesquisa"] },
  { "nome": "Químico(a)", "salario": 6000, "tecnologia": true, "tags": ["quimica", "substancias", "laboratorio"] },
  { "nome": "Físico(a)", "salario": 6500, "tecnologia": true, "tags": ["fisica", "matematica", "ciencia"] },
  { "nome": "Economista", "salario": 7500, "tecnologia": true, "tags": ["economia", "mercado", "financas"] },
  { "nome": "Administrador(a)", "salario": 6000, "tecnologia": true, "tags": ["administracao", "negocios", "gestao"] },
  { "nome": "Analista de Dados", "salario": 7000, "tecnologia": true, "tags": ["dados", "planilhas", "analise"] },
  { "nome": "Cientista de Dados", "salario": 10000, "tecnologia": true, "tags": ["dados", "programacao", "estatistica"] },
  { "nome": "Administrador(a) de Redes", "salario": 6500, "tecnologia": true, "tags": ["redes", "servidores", "infraestrutura"] },
  { "nome": "Técnico(a) de Informática", "salario": 3500, "tecnologia": true, "tags": ["hardware", "suporte", "computadores"] },
  { "nome": "UX Designer", "salario": 7000, "tecnologia": true, "tags": ["ux", "interfaces", "usabilidade"] },
  { "nome": "Profissional de Marketing Digital", "salario": 5500, "tecnologia": true, "tags": ["marketing", "internet", "publicidade"] },
  { "nome": "Publicitário(a)", "salario": 5000, "tecnologia": true, "tags": ["campanhas", "propaganda", "criacao"] },
  { "nome": "Nutricionista", "salario": 4500, "tecnologia": false, "tags": ["nutricao", "alimentacao", "dieta"] },
  { "nome": "Fisioterapeuta", "salario": 5000, "tecnologia": true, "tags": ["fisioterapia", "reabilitacao", "movimento"] },
  { "nome": "Professor(a) de Educação Física", "salario": 4000, "tecnologia": false, "tags": ["esporte", "exercicio", "atividade"] },
  { "nome": "Piloto(a) de Avião", "salario": 15000, "tecnologia": true, "tags": ["aviacao", "aeronaves", "voo"] },
  { "nome": "Motorista", "salario": 3000, "tecnologia": false, "tags": ["transporte", "direcao", "veiculos"] },
  { "nome": "Eletricista Industrial", "salario": 5000, "tecnologia": true, "tags": ["industria", "circuitos", "automacao"] },
  { "nome": "Soldador(a)", "salario": 4000, "tecnologia": true, "tags": ["soldagem", "metalurgia", "fabricacao"] },
  { "nome": "Agrônomo(a)", "salario": 7000, "tecnologia": true, "tags": ["agronomia", "agricultura", "cultivo"] }
];

const iconesProfissao = {
  "Desenvolvedor(a)": "fa-laptop-code",
  "Médico(a)": "fa-user-doctor",
  "Professor(a)": "fa-chalkboard-user",
  "Advogado(a)": "fa-scale-balanced",
  "Engenheiro(a) Civil": "fa-helmet-safety",
  "Enfermeiro(a)": "fa-user-nurse",
  "Designer Gráfico": "fa-palette",
  "Jornalista": "fa-newspaper",
  "Arquiteto(a)": "fa-compass-drafting",
  "Chef de Cozinha": "fa-utensils",
  "Contador(a)": "fa-calculator",
  "Psicólogo(a)": "fa-brain",
  "Dentista": "fa-tooth",
  "Farmacêutico(a)": "fa-pills",
  "Eletricista": "fa-bolt",
  "Mecânico(a)": "fa-wrench",
  "Fotógrafo(a)": "fa-camera",
  "Ator/Atriz": "fa-masks-theater",
  "Músico(a)": "fa-music",
  "Veterinário(a)": "fa-paw",
  "Biólogo(a)": "fa-leaf",
  "Químico(a)": "fa-vial",
  "Físico(a)": "fa-atom",
  "Economista": "fa-chart-line",
  "Administrador(a)": "fa-briefcase",
  "Analista de Dados": "fa-chart-pie",
  "Cientista de Dados": "fa-database",
  "Administrador(a) de Redes": "fa-network-wired",
  "Técnico(a) de Informática": "fa-desktop",
  "UX Designer": "fa-mobile-screen-button",
  "Profissional de Marketing Digital": "fa-bullhorn",
  "Publicitário(a)": "fa-rectangle-ad",
  "Nutricionista": "fa-apple-whole",
  "Fisioterapeuta": "fa-child-reaching",
  "Professor(a) de Educação Física": "fa-dumbbell",
  "Piloto(a) de Avião": "fa-plane",
  "Motorista": "fa-car",
  "Eletricista Industrial": "fa-industry",
  "Soldador(a)": "fa-fire",
  "Agrônomo(a)": "fa-wheat-awn"
};

let possiveis = [];
let perguntasFeitas = new Set();
let perguntaAtual = null;
let contadorPerguntas = 0;
let historico = [];

document.addEventListener("DOMContentLoaded", () => {
  atualizarContadorTotal();
});

function atualizarContadorTotal() {
  const el = document.getElementById('totalProfissoesCount');
  if (el) el.innerText = profissoesData.length;
}



function iniciarJogo() {
  possiveis = [...profissoesData];
  perguntasFeitas = new Set();
  contadorPerguntas = 0;
  historico = [];

  document.getElementById('screenStart').classList.add('hidden');
  document.getElementById('screenResult').classList.add('hidden');
  document.getElementById('screenQuestion').classList.remove('hidden');

  proximaPergunta();
}

function reiniciarJogo() {
  iniciarJogo();
}

function calcularProximaPergunta() {
  if (possiveis.length <= 1) return null;

  const comTec = possiveis.filter(p => p.tecnologia).length;
  if (comTec > 0 && comTec < possiveis.length && !perguntasFeitas.has('tecnologia')) {
    return {
      tipo: 'tecnologia',
      texto: 'Sua profissão lida diretamente com tecnologia?',
      split: Math.abs(possiveis.length / 2 - comTec)
    };
  }

  if (!perguntasFeitas.has('salario') && possiveis.length > 2) {
    const salarios = possiveis.map(p => p.salario).sort((a, b) => a - b);
    const mediana = salarios[Math.floor(salarios.length / 2)];
    const acimaOuIgual = possiveis.filter(p => p.salario >= mediana).length;

    if (acimaOuIgual > 0 && acimaOuIgual < possiveis.length) {
      return {
        tipo: 'salario',
        mediana: mediana,
        texto: `O salário dessa profissão é maior ou igual a R$ ${mediana.toLocaleString('pt-BR')}?`,
        split: Math.abs(possiveis.length / 2 - acimaOuIgual)
      };
    }
  }

  const contagemTags = {};
  possiveis.forEach(p => {
    if (p.tags && Array.isArray(p.tags)) {
      p.tags.forEach(tag => {
        if (!perguntasFeitas.has(`tag:${tag}`)) {
          contagemTags[tag] = (contagemTags[tag] || 0) + 1;
        }
      });
    }
  });

  let melhorTag = null;
  let menorDiferenca = Infinity;

  Object.keys(contagemTags).forEach(tag => {
    const diff = Math.abs(possiveis.length / 2 - contagemTags[tag]);
    if (diff < menorDiferenca) {
      menorDiferenca = diff;
      melhorTag = tag;
    }
  });

  if (melhorTag) {
    return {
      tipo: 'tag',
      tag: melhorTag,
      texto: `Sua profissão está relacionada a '${melhorTag}'?`,
      split: menorDiferenca
    };
  }

  return null;
}

function proximaPergunta() {
  perguntaAtual = calcularProximaPergunta();

  if (!perguntaAtual || possiveis.length <= 1) {
    exibirResultado();
    return;
  }

  contadorPerguntas++;

  document.getElementById('questionCounter').innerText = `Pergunta #${contadorPerguntas}`;
  document.getElementById('questionText').innerText = perguntaAtual.texto;
  document.getElementById('remainingCount').innerText = `${possiveis.length} opções possíveis`;

  const progresso = Math.min(100, Math.round(((profissoesData.length - possiveis.length + 1) / profissoesData.length) * 100));
  document.getElementById('progressBar').style.width = `${Math.max(8, progresso)}%`;

  document.getElementById('btnUndo').disabled = historico.length === 0;
}

function responder(respostaSim) {
  if (!perguntaAtual) return;

  historico.push({
    possiveis: [...possiveis],
    perguntasFeitas: new Set(perguntasFeitas),
    contadorPerguntas: contadorPerguntas,
    perguntaAtual: perguntaAtual
  });

  if (perguntaAtual.tipo === 'tecnologia') {
    perguntasFeitas.add('tecnologia');
    possiveis = possiveis.filter(p => p.tecnologia === respostaSim);
  } else if (perguntaAtual.tipo === 'salario') {
    perguntasFeitas.add('salario');
    const med = perguntaAtual.mediana;
    possiveis = respostaSim 
      ? possiveis.filter(p => p.salario >= med)
      : possiveis.filter(p => p.salario < med);
  } else if (perguntaAtual.tipo === 'tag') {
    const tag = perguntaAtual.tag;
    perguntasFeitas.add(`tag:${tag}`);
    possiveis = respostaSim
      ? possiveis.filter(p => p.tags && p.tags.includes(tag))
      : possiveis.filter(p => !p.tags || !p.tags.includes(tag));
  }

  proximaPergunta();
}

function desfazer() {
  if (historico.length === 0) return;

  const ultimoEstado = historico.pop();
  possiveis = ultimoEstado.possiveis;
  perguntasFeitas = ultimoEstado.perguntasFeitas;
  contadorPerguntas = ultimoEstado.contadorPerguntas - 1;

  proximaPergunta();
}

function exibirResultado() {
  document.getElementById('screenQuestion').classList.add('hidden');
  document.getElementById('screenResult').classList.remove('hidden');

  const singleBox = document.getElementById('singleResultBox');
  const multipleBox = document.getElementById('multipleResultBox');
  const resultTitle = document.getElementById('resultTitle');
  const resultTag = document.getElementById('resultTag');

  if (possiveis.length === 1) {
    const item = possiveis[0];
    singleBox.classList.remove('hidden');
    multipleBox.classList.add('hidden');

    resultTag.innerText = "Adivinhação Concluída!";
    resultTitle.innerText = "Sua profissão é...";

    document.getElementById('resultProfessionName').innerText = item.nome;
    document.getElementById('resultSalary').innerText = `R$ ${(item.salario || 0).toLocaleString('pt-BR')}`;
    document.getElementById('resultTech').innerText = item.tecnologia ? "Sim" : "Não";

    const iconClass = iconesProfissao[item.nome] || "fa-briefcase";
    document.getElementById('resultIcon').className = `fa-solid ${iconClass}`;

    const tagsContainer = document.getElementById('resultTags');
    tagsContainer.innerHTML = (item.tags || []).map(t => 
      `<span class="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs">#${t}</span>`
    ).join('');

  } else if (possiveis.length > 1) {
    singleBox.classList.add('hidden');
    multipleBox.classList.remove('hidden');

    resultTag.innerText = "Fiquei na dúvida!";
    resultTitle.innerText = "Encontrei mais de uma opção:";

    const list = document.getElementById('multipleList');
    list.innerHTML = possiveis.map(p => `
      <li class="p-3 rounded-xl bg-slate-900/80 border border-slate-700/50 flex justify-between items-center">
        <span class="font-semibold text-purple-300">${p.nome}</span>
        <span class="text-xs text-emerald-400 font-mono">R$ ${(p.salario || 0).toLocaleString('pt-BR')}</span>
      </li>
    `).join('');

  } else {
    singleBox.classList.add('hidden');
    multipleBox.classList.remove('hidden');

    resultTag.innerText = "Sem correspondência";
    resultTitle.innerText = "Não encontrei essa profissão!";

    const list = document.getElementById('multipleList');
    list.innerHTML = `
      <p class="text-xs text-slate-400 p-2 text-center">
        Respostas contraditórias ou não há profissão correspondente no banco JSON fornecido.
      </p>
    `;
  }
}