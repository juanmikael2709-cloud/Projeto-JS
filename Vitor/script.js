// JOGO DE ESCOLHAS — JAVASCRIPT PURO (VERSÃO OTIMIZADA E AMPLIADA)
// Cole TUDO no console do navegador e pressione ENTER.

const p = {
  nome: "",
  idade: 15,
  dinheiro: 60,
  felicidade: 55,
  estresse: 20,
  inteligencia: 50,
  humanidade: 50,
  caos: 0,
  estudo: 0,
  experiencia: 0,
  reputacao: 0,
  sorte: 50,

  emprego: false,
  estagio: false,
  faculdade: false,
  formado: false,
  tecnico: false,
  empresario: false,
  relacionamento: false,
  filhos: 0,

  computador: false,
  celular: false,
  switch: false,
  bicicleta: false,
  carro: false,
  casa: false,

  carreira: "Nenhuma",
  curso: "Nenhum",
  amigos: 0,
  inimigos: 0,

  flags: {},
  decisoes: [],
  conquistas: [],
  historico: []
};

const clamp = n => Math.max(0, Math.min(100, n));

function add(k, v) {
  if (typeof p[k] === "number") p[k] = clamp(p[k] + v);
}

function money(v) {
  p.dinheiro += v;
}

function spend(v) {
  if (p.dinheiro < v) {
    alert("Você não tem dinheiro suficiente.");
    return false;
  }
  p.dinheiro -= v;
  return true;
}

function flag(k, v = true) {
  p.flags[k] = v;
}

function achievement(x) {
  if (!p.conquistas.includes(x)) {
    p.conquistas.push(x);
    console.log("🏆 CONQUISTA:", x);
  }
}

function record(x) {
  p.decisoes.push(x);
  p.historico.push(`${p.idade} anos — ${x}`);
}

class SairDoJogo extends Error {}

function confirmarSaida() {
  if (confirm("Deseja realmente sair do jogo?")) {
    if (confirm("Deseja salvar seu progresso antes de sair?")) {
      save();
    }
    throw new SairDoJogo();
  }
}

const ATRIBUTOS_INFO = {
  dinheiro: { label: "Dinheiro", emoji: "💰", prefixo: "R$", sufixo: "" },
  felicidade: { label: "Felicidade", emoji: "😊", prefixo: "", sufixo: "/100" },
  estresse: { label: "Estresse", emoji: "😖", prefixo: "", sufixo: "/100" },
  inteligencia: { label: "Inteligência", emoji: "🧠", prefixo: "", sufixo: "/100" },
  humanidade: { label: "Humanidade", emoji: "💙", prefixo: "", sufixo: "/100" },
  caos: { label: "Caos", emoji: "🌀", prefixo: "", sufixo: "/100" },
  estudo: { label: "Estudo", emoji: "📘", prefixo: "", sufixo: "" },
  experiencia: { label: "Experiência", emoji: "💼", prefixo: "", sufixo: "" },
  reputacao: { label: "Reputação", emoji: "⭐", prefixo: "", sufixo: "/100" },
  sorte: { label: "Sorte", emoji: "🍀", prefixo: "", sufixo: "/100" },
  amigos: { label: "Amigos", emoji: "🧑‍🤝‍🧑", prefixo: "", sufixo: "" },
  inimigos: { label: "Inimigos", emoji: "😠", prefixo: "", sufixo: "" },
  filhos: { label: "Filhos", emoji: "👶", prefixo: "", sufixo: "" }
};

function capturarSnapshot() {
  const snap = {};
  Object.keys(ATRIBUTOS_INFO).forEach(k => {
    snap[k] = p[k];
  });
  return snap;
}

function mostrarResultado(snapshotAntes) {
  const ultimaAcao = p.decisoes[p.decisoes.length - 1] || "Ação registrada.";
  const linhas = [];

  Object.keys(ATRIBUTOS_INFO).forEach(k => {
    const antes = snapshotAntes[k];
    const depois = p[k];
    const delta = depois - antes;

    if (delta === 0) return;

    const info = ATRIBUTOS_INFO[k];
    const sinal = delta > 0 ? "+" : "-";
    const emojiDirecao = k === "humanidade"
      ? (delta > 0 ? "💙" : "💔")
      : (delta > 0 ? "⬆️" : "⬇️");

    linhas.push(
      `${emojiDirecao} ${info.label}: ${sinal}${info.prefixo}${Math.abs(delta)}` +
      ` (agora ${info.prefixo}${depois}${info.sufixo})`
    );
  });

  const corpo = linhas.length
    ? linhas.join("\n")
    : "Nenhum atributo mudou nesta ação.";

  const texto = `RESULTADO\n\n${ultimaAcao}\n\n${corpo}`;
  console.log(texto);
  alert(texto);
}

function narrar(...linhas) {
  const texto = linhas.join("\n");
  console.log(texto);
  alert(texto);
}

function clear() {
  console.clear();
}

function header(title) {
  clear();
  console.log("============================================================");
  console.log("                       T.O.P.");
  console.log("                 TRABALHA OU PARA");
  console.log("============================================================");
  console.log(title);
  console.log("------------------------------------------------------------");
}

function choice(question, options) {
  while (true) {
    const text =
      question +
      "\n\n" +
      options.map((x, i) => `${i + 1}. ${x}`).join("\n") +
      "\n\nDigite o número (ou Cancelar para sair do jogo):";

    const r = prompt(text);

    if (r === null) {
      confirmarSaida();
      continue;
    }

    const n = Number(r);

    if (Number.isInteger(n) && n >= 1 && n <= options.length) {
      return n;
    }

    alert("Escolha inválida.");
  }
}

function status() {
  console.log({ ...p });
}

function socialClass() {
  if (p.dinheiro < 20) return "Indigente";
  if (p.dinheiro < 50) return "Pobre";
  if (p.dinheiro < 70) return "Classe média";
  if (p.dinheiro < 100) return "Confortável";
  return "Bem-sucedido";
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(percent) {
  return Math.random() * 100 < percent;
}

function chanceBonus(base) {
  return clamp(base + (p.sorte - 50) * 0.25 + p.reputacao * 0.1);
}

function save() {
  localStorage.setItem("TOP_SAVE", JSON.stringify(p));
  console.log("Jogo salvo.");
}

function load() {
  const raw = localStorage.getItem("TOP_SAVE");
  if (!raw) return console.log("Nenhum save encontrado.");
  const data = JSON.parse(raw);
  Object.keys(data).forEach(k => { p[k] = data[k]; });
  console.log("Save carregado.");
  status();
}

function reset() {
  localStorage.removeItem("TOP_SAVE");
  console.log("Save apagado.");
}

function intro() {
  header("INÍCIO");
  narrar(
    "Você está prestes a viver uma vida inteira.",
    "Não existe caminho perfeito.",
    "Algumas escolhas só mostrarão suas consequências anos depois."
  );

  p.nome = (prompt("Qual é o seu nome?") || "Sem Nome").trim();
  if (!p.nome) p.nome = "Sem Nome";

  record("Começou uma nova vida.");
  escola();
}

function escola() {
  header("15 ANOS — ESCOLA");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Seu professor passou uma atividade importante.",
    [
      "Fazer a atividade",
      "Estudar outra matéria",
      "Conversar com os amigos",
      "Copiar de alguém",
      "Não fazer nada"
    ]
  );

  if (c === 1) { p.estudo += 8; add("inteligencia", 4); add("reputacao", 2); record("Fez a atividade."); }
  if (c === 2) { p.estudo += 10; add("inteligencia", 5); add("estresse", 4); record("Estudou outra matéria."); }
  if (c === 3) { p.amigos++; add("felicidade", 6); add("estresse", -5); record("Conversou com os amigos."); }
  if (c === 4) { add("humanidade", -4); add("caos", 6); record("Copiou a atividade."); }
  if (c === 5) { add("estresse", -2); add("caos", 3); record("Não fez a atividade."); }

  mostrarResultado(snapshotAntes);
  escola_amizade();
}

function escola_amizade() {
  header("A AMIZADE");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Um colega novo tenta falar com você.",
    [
      "Puxar assunto",
      "Fazer uma piada",
      "Ignorar",
      "Perguntar se ele quer estudar junto",
      "Mandar ele embora"
    ]
  );

  if (c === 1) { p.amigos++; add("felicidade", 8); add("humanidade", 3); flag("amizade_escola"); record("Fez uma nova amizade."); }
  if (c === 2) { p.amigos++; add("felicidade", 6); add("caos", 4); flag("amizade_escola"); record("Fez amizade através de uma piada."); }
  if (c === 3) { add("estresse", -2); record("Ignorou o colega."); }
  if (c === 4) { p.amigos++; p.estudo += 6; add("inteligencia", 3); flag("amizade_estudos"); record("Criou uma amizade de estudos."); }
  if (c === 5) { p.inimigos++; add("reputacao", -3); add("caos", 5); record("Mandou o colega embora."); }

  mostrarResultado(snapshotAntes);
  cantina();
}

function cantina() {
  header("INTERVALO");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    `Você tem R$${p.dinheiro}.`,
    [
      "Comprar salgado — R$5",
      "Comprar lanche — R$10",
      "Guardar dinheiro",
      "Pedir para alguém pagar",
      "Dividir comida com alguém"
    ]
  );

  if (c === 1 && spend(5)) { add("felicidade", 5); add("estresse", -2); record("Comprou um salgado."); }
  if (c === 2 && spend(10)) { add("felicidade", 9); add("estresse", -4); record("Comprou um lanche."); }
  if (c === 3) { add("inteligencia", 1); record("Guardou dinheiro."); }
  if (c === 4) {
    if (roll(50)) { money(5); add("caos", 5); record("Convenceu alguém a pagar."); }
    else { add("reputacao", -2); record("Tentou conseguir comida de graça e falhou."); }
  }
  if (c === 5) { add("humanidade", 5); add("felicidade", 4); record("Dividiu sua comida."); }

  mostrarResultado(snapshotAntes);
  computador_evento();
}

function computador_evento() {
  header("O COMPUTADOR");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Seu computador está ficando velho.",
    [
      "Comprar outro — R$40",
      "Fazer upgrade — R$20",
      "Continuar usando",
      "Tentar consertar sozinho",
      "Vender e ficar sem computador"
    ]
  );

  if (c === 1 && spend(40)) { p.computador = true; add("felicidade", 12); p.estudo += 8; achievement("Primeiro Setup"); record("Comprou um computador."); }
  if (c === 2 && spend(20)) { p.computador = true; add("felicidade", 7); p.estudo += 5; record("Melhorou o computador."); }
  if (c === 3) { add("estresse", 6); record("Continuou usando o computador antigo."); }
  if (c === 4) {
    p.computador = true;
    if (roll(55)) { add("inteligencia", 4); achievement("Gambiarra Profissional"); record("Consertou o computador sozinho."); }
    else { add("felicidade", -8); add("caos", 8); record("Destruiu parcialmente o computador."); }
  }
  if (c === 5) {
    if (p.computador) { p.computador = false; money(25); add("felicidade", -5); record("Vendeu o computador."); }
    else record("Você nem tinha computador.");
  }

  mostrarResultado(snapshotAntes);
  oportunidade();
}

function oportunidade() {
  header("UMA OPORTUNIDADE");
  narrar("Seu celular vibra.", "", "VOCÊ FOI CHAMADO PARA UMA ENTREVISTA DE ESTÁGIO");

  const snapshotAntes = capturarSnapshot();
  const c = choice(
    "O que você faz?",
    ["Aceitar", "Recusar", "Ignorar", "Responder com um meme", "Perguntar quanto paga"]
  );

  if (c === 1) {
    p.estagio = true; p.carreira = "Estagiário"; p.experiencia += 12; money(15); add("reputacao", 5);
    record("Aceitou o estágio."); mostrarResultado(snapshotAntes); entrevista(); return;
  }
  if (c === 2) { add("felicidade", 3); record("Recusou o estágio."); }
  if (c === 3) { add("reputacao", -4); record("Ignorou a oportunidade."); }
  if (c === 4) {
    add("caos", 15);
    if (roll(45)) {
      p.estagio = true; p.carreira = "Estagiário"; p.experiencia += 8; money(20);
      record("Respondeu com meme e foi contratado!"); mostrarResultado(snapshotAntes); entrevista(); return;
    }
    record("Respondeu com meme e foi ignorado.");
  }
  if (c === 5) { money(5); add("reputacao", 1); record("Perguntou primeiro sobre o salário."); }

  mostrarResultado(snapshotAntes);
  rua();
}

function entrevista() {
  header("ENTREVISTA");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "O entrevistador pergunta: 'Por que devemos contratar você?'",
    [
      "Porque quero aprender",
      "Porque preciso do dinheiro",
      "Porque sou melhor que todo mundo",
      "Porque sim",
      "Ficar em silêncio",
      "Beijar a mão do entrevistador"
    ]
  );

  if (c === 1) { p.experiencia += 6; add("reputacao", 7); add("humanidade", 2); money(10); record("Mostrou vontade de aprender."); }
  if (c === 2) { money(8); add("reputacao", 2); record("Foi honesto sobre precisar de dinheiro."); }
  if (c === 3) { add("reputacao", -8); add("caos", 8); record("Se achou melhor que todo mundo."); }
  if (c === 4) { add("caos", 12); record("Respondeu 'porque sim'."); }
  if (c === 5) { add("reputacao", -5); add("estresse", 5); record("Ficou em silêncio."); }
  if (c === 6) {
    add("caos", 20);
    if (roll(30)) { money(20); add("reputacao", 5); record("Beijou a mão do entrevistador e passou!"); achievement("Entrevista Mais Estranha"); }
    else { add("reputacao", -10); record("Beijou a mão do entrevistador e foi expulso."); }
  }

  mostrarResultado(snapshotAntes);
  rua();
}

function rua() {
  header("NO CAMINHO PARA CASA");
  narrar("Você encontra uma pessoa em situação de rua precisando de ajuda.");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "O que você faz?",
    ["Ignorar", "Dar R$5", "Conversar", "Oferecer comida", "Dar todo o dinheiro que tem", "Fazer uma piada sem noção"]
  );

  if (c === 1) { add("humanidade", -4); record("Ignorou a pessoa."); mostrarResultado(snapshotAntes); futuro(); return; }
  if (c === 2 && spend(5)) { add("humanidade", 9); record("Deu R$5 para a pessoa."); mostrarResultado(snapshotAntes); ceo(); return; }
  if (c === 3) { add("humanidade", 8); add("reputacao", 3); record("Conversou com a pessoa."); mostrarResultado(snapshotAntes); ceo(); return; }
  if (c === 4) { add("humanidade", 10); add("felicidade", 5); record("Ofereceu comida."); mostrarResultado(snapshotAntes); ceo(); return; }
  if (c === 5) { const v = p.dinheiro; p.dinheiro = 0; add("humanidade", 20); add("felicidade", 8); record(`Doou todos os R$${v}.`); mostrarResultado(snapshotAntes); ceo(); return; }
  if (c === 6) { add("humanidade", -6); add("caos", 15); record("Fez uma piada sem noção."); }

  mostrarResultado(snapshotAntes);
  futuro();
}

function ceo() {
  header("A REVELAÇÃO");
  narrar("A pessoa revela ser CEO de uma enorme empresa de tecnologia!", '"Eu estava testando se ainda existem pessoas decentes."');
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Ele oferece uma oportunidade.",
    ["Aceitar", "Recusar", "Perguntar quanto paga", "Achar que é golpe", "Pedir uma recomendação"]
  );

  if (c === 1) { p.empresario = true; p.carreira = "Funcionário de tecnologia"; p.experiencia += 25; money(35); add("reputacao", 10); achievement("O CEO Misterioso"); record("Aceitou a proposta do CEO."); }
  if (c === 2) { add("felicidade", 4); record("Recusou a proposta do CEO."); }
  if (c === 3) { money(15); add("reputacao", 2); record("Perguntou primeiro sobre o salário."); }
  if (c === 4) { add("inteligencia", 3); record("Desconfiou da proposta."); }
  if (c === 5) { add("reputacao", 8); record("Pediu recomendação."); achievement("Networking Improvável"); }

  mostrarResultado(snapshotAntes);
  futuro();
}

function futuro() {
  header("18 ANOS — FIM DO ENSINO MÉDIO");
  p.idade = 18;
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Qual caminho você escolhe para o seu futuro?",
    ["Faculdade", "Curso técnico", "Trabalhar", "Abrir um negócio", "Ano sabático", "Tentar viver de internet"]
  );

  if (c === 1) { p.faculdade = true; p.curso = "Faculdade"; p.carreira = "Universitário"; p.estudo += 15; add("inteligencia", 7); record("Escolheu a faculdade."); mostrarResultado(snapshotAntes); faculdade(); return; }
  if (c === 2) { p.tecnico = true; p.curso = "Técnico"; p.carreira = "Técnico"; p.experiencia += 15; money(15); record("Escolheu um curso técnico."); mostrarResultado(snapshotAntes); tecnico(); return; }
  if (c === 3) { p.emprego = true; p.carreira = "Trabalhador"; p.experiencia += 20; money(30); record("Começou a trabalhar."); mostrarResultado(snapshotAntes); primeiro_emprego(); return; }
  if (c === 4) { record("Tentou abrir um negócio."); mostrarResultado(snapshotAntes); empreendedorismo(); return; }
  if (c === 5) { add("felicidade", 15); add("estresse", -15); record("Escolheu um ano sabático."); mostrarResultado(snapshotAntes); ano_sabatico(); return; }
  if (c === 6) { record("Tentou viver de internet."); mostrarResultado(snapshotAntes); internet(); }
}

function faculdade() {
  header("FACULDADE");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Como você encara a faculdade?",
    ["Estudar muito", "Equilibrar estudo e lazer", "Estudar só antes da prova", "Colar", "Desistir", "Montar um projeto próprio"]
  );

  if (c === 1) { p.estudo += 25; p.experiencia += 10; add("inteligencia", 12); add("estresse", 15); record("Estudou muito."); }
  if (c === 2) { p.estudo += 15; p.experiencia += 10; add("felicidade", 8); record("Equilibrou estudo e lazer."); }
  if (c === 3) { p.estudo += 8; add("estresse", 8); record("Estudou apenas antes das provas."); }
  if (c === 4) {
    add("humanidade", -6); add("caos", 12);
    if (roll(35)) { add("reputacao", -10); record("Foi pego colando."); }
    else { p.estudo += 4; record("Colou e não foi pego."); }
  }
  if (c === 5) { p.faculdade = false; p.carreira = "Desistente"; add("felicidade", 5); record("Abandonou a faculdade."); mostrarResultado(snapshotAntes); primeiro_emprego(); return; }
  if (c === 6) { p.experiencia += 20; p.estudo += 10; add("reputacao", 10); achievement("Projeto Próprio"); record("Criou um projeto próprio na faculdade."); }

  p.formado = true;
  p.idade = 22;
  achievement("Diploma");
  mostrarResultado(snapshotAntes);
  carreira_pos_faculdade();
}

function tecnico() {
  header("CURSO TÉCNICO");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Seu curso técnico exige dedicação.",
    ["Estudar sério", "Fazer projetos", "Só fazer o mínimo", "Arrumar estágio", "Virar especialista em uma área"]
  );

  if (c === 1) { p.estudo += 18; p.experiencia += 10; add("inteligencia", 8); record("Levou o curso a sério."); }
  if (c === 2) { p.estudo += 10; p.experiencia += 25; add("reputacao", 6); achievement("Projetista"); record("Fez vários projetos."); }
  if (c === 3) { p.estudo += 4; add("felicidade", 3); record("Fez apenas o mínimo."); }
  if (c === 4) { p.estagio = true; p.experiencia += 20; money(20); add("reputacao", 7); achievement("Estágio Técnico"); record("Arrumou um estágio."); }
  if (c === 5) { p.experiencia += 30; p.estudo += 20; add("inteligencia", 10); achievement("Especialista"); record("Virou especialista em uma área."); }

  p.idade = 21;
  mostrarResultado(snapshotAntes);
  carreira_pos_tecnico();
}

function primeiro_emprego() {
  header("PRIMEIRO EMPREGO");
  const salario = 25 + p.experiencia + Math.floor(p.reputacao / 2);
  money(salario);
  narrar(`Você recebeu R$${salario} no seu primeiro salário.`);
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "O que faz com seu primeiro salário?",
    ["Guardar", "Comprar coisas", "Investir em estudos", "Ajudar em casa", "Comprar um Switch — R$50", "Gastar tudo em comida"]
  );

  if (c === 1) { add("inteligencia", 2); record("Guardou o salário."); }
  if (c === 2) { const v = Math.min(20, p.dinheiro); if (spend(v)) add("felicidade", 12); record("Gastou parte do salário."); }
  if (c === 3) { const v = Math.min(15, p.dinheiro); if (spend(v)) { p.estudo += 12; add("inteligencia", 6); } record("Investiu em estudos."); }
  if (c === 4) { const v = Math.min(15, p.dinheiro); if (spend(v)) { add("humanidade", 6); achievement("Responsável"); } record("Ajudou em casa."); }
  if (c === 5 && spend(50)) { p.switch = true; add("felicidade", 20); add("estresse", -12); achievement("Console Novo"); record("Comprou um Nintendo Switch."); }
  if (c === 6) { const v = Math.min(25, p.dinheiro); if (spend(v)) { add("felicidade", 8); add("estresse", -5); } record("Gastou dinheiro com comida."); }

  mostrarResultado(snapshotAntes);
  rotina_trabalho();
}

function carreira_pos_faculdade() {
  header("22 ANOS — DIPLOMADO");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Agora que você se formou, qual será sua próxima jogada?",
    ["Buscar emprego", "Fazer pós-graduação", "Abrir empresa", "Trabalhar por conta própria", "Viajar antes de trabalhar"]
  );

  if (c === 1) { p.emprego = true; p.carreira = "Profissional formado"; p.experiencia += 15; money(45); record("Conseguiu emprego após a faculdade."); }
  if (c === 2) { p.estudo += 25; p.experiencia += 10; add("inteligencia", 12); add("estresse", 10); money(25); record("Fez uma pós-graduação."); }
  if (c === 3) { record("Tentou abrir uma empresa."); mostrarResultado(snapshotAntes); empreendedorismo(); return; }
  if (c === 4) { p.experiencia += 20; money(35); add("felicidade", 8); record("Trabalhou por conta própria."); }
  if (c === 5) { money(-20); add("felicidade", 20); add("estresse", -15); record("Viajou antes do mercado."); }

  mostrarResultado(snapshotAntes);
  rotina_trabalho();
}

function carreira_pos_tecnico() {
  header("21 ANOS — PROFISSIONAL TÉCNICO");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Você já tem experiência. O que faz agora?",
    ["Buscar emprego melhor", "Continuar no estágio", "Faculdade", "Freelancer", "Abrir negócio"]
  );

  if (c === 1) { p.emprego = true; p.carreira = "Profissional técnico"; p.experiencia += 20; money(45); record("Conseguiu emprego melhor."); }
  if (c === 2) { p.experiencia += 15; money(20); add("felicidade", 3); record("Continuou no estágio."); }
  if (c === 3) { p.faculdade = true; p.curso = "Faculdade"; p.estudo += 15; record("Entrou na faculdade."); mostrarResultado(snapshotAntes); faculdade(); return; }
  if (c === 4) { money(40); p.experiencia += 15; add("caos", 5); record("Virou freelancer."); }
  if (c === 5) { record("Decidiu empreender."); mostrarResultado(snapshotAntes); empreendedorismo(); return; }

  mostrarResultado(snapshotAntes);
  rotina_trabalho();
}

// ---- NOVAS MÓDULOS DE TRABALHO E CARREIRA ----
function rotina_trabalho() {
  header("ROTINA DE TRABALHO");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Sua equipe está lidando com uma demanda gigante e prazos apertados no trabalho. Como age?",
    [
      "Fazer hora extra e entregar tudo impecável (Foco na carreira)",
      "Entregar o básico bem feito e ir embora no horário",
      "Delegar e empurrar tarefas para outros colegas",
      "Propor automação/otimização do trabalho com tecnologia",
      "Reclamar publicamente da gerência"
    ]
  );

  if (c === 1) {
    p.experiencia += 18;
    add("reputacao", 10);
    add("estresse", 20);
    money(25);
    record("Trabalhou duro nas horas extras.");
  }
  if (c === 2) {
    add("estresse", -10);
    add("felicidade", 8);
    p.experiencia += 5;
    record("Priorizou a saúde mental no trabalho.");
  }
  if (c === 3) {
    add("reputacao", -8);
    add("humanidade", -5);
    add("caos", 10);
    record("Empurrou seu trabalho para os outros.");
  }
  if (c === 4) {
    add("inteligencia", 10);
    p.experiencia += 15;
    add("reputacao", 12);
    achievement("Inovador Corporativo");
    record("Otimizou a rotina da empresa.");
  }
  if (c === 5) {
    add("reputacao", -15);
    p.inimigos++;
    add("caos", 15);
    record("Critica publicamente a gerência.");
  }

  mostrarResultado(snapshotAntes);
  trabalho_evento();
}

function trabalho_evento() {
  header("OPORTUNIDADE DE CARREIRA");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Seu chefe te chama para uma conversa individual.",
    [
      "Pedir uma promoção apontando seus resultados",
      "Pedir aumento salarial direto",
      "Pedir autorização para Home Office full-time",
      "Assumir um projeto de alto risco que ninguém quer",
      "Trocar de empresa por uma proposta concorrente"
    ]
  );

  if (c === 1) {
    if (roll(chanceBonus(60))) {
      money(50);
      add("reputacao", 12);
      p.carreira = "Líder de Equipe";
      achievement("Promovido");
      record("Foi promovido por mérito.");
    } else {
      add("estresse", 8);
      record("A promoção foi negada desta vez.");
    }
  }
  if (c === 2) {
    if (roll(chanceBonus(50))) {
      money(40);
      achievement("Aumento Salarial");
      record("Conseguiu o aumento.");
    } else {
      add("reputacao", -4);
      record("Aumento recusado.");
    }
  }
  if (c === 3) {
    if (roll(65)) {
      add("felicidade", 15);
      add("estresse", -15);
      record("Conseguiu trabalhar 100% Home Office.");
    } else {
      record("Pedido de Home Office foi negado.");
    }
  }
  if (c === 4) {
    p.experiencia += 25;
    add("estresse", 15);
    if (roll(60)) {
      money(70);
      add("reputacao", 20);
      achievement("Salva-Vidas da Firma");
      record("Teve grande sucesso no projeto de alto risco.");
    } else {
      add("reputacao", -10);
      record("O projeto arriscado falhou.");
    }
  }
  if (c === 5) {
    money(60);
    p.experiencia += 15;
    add("felicidade", 10);
    record("Mudou para uma empresa concorrente pagando mais.");
  }

  mostrarResultado(snapshotAntes);
  compras();
}

function compras() {
  header("DINHEIRO E BENS");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Você juntou algum dinheiro. O que compra?",
    ["Bicicleta — R$10", "Celular — R$25", "Computador — R$40", "Carro — R$80", "Casa — R$100", "Guardar tudo"]
  );

  if (c === 1 && spend(10)) { p.bicicleta = true; add("felicidade", 8); achievement("Duas Rodas"); record("Comprou uma bicicleta."); }
  if (c === 2 && spend(25)) { p.celular = true; add("felicidade", 8); achievement("Celular Novo"); record("Comprou um celular."); }
  if (c === 3 && spend(40)) { p.computador = true; p.estudo += 8; add("felicidade", 12); achievement("Setup Definitivo"); record("Comprou um computador."); }
  if (c === 4 && spend(80)) { p.carro = true; add("felicidade", 15); achievement("Motorista"); record("Comprou um carro."); }
  if (c === 5 && spend(100)) { p.casa = true; add("felicidade", 25); achievement("Casa Própria"); record("Comprou uma casa."); }
  if (c === 6) { add("inteligencia", 3); record("Decidiu guardar o dinheiro."); }

  mostrarResultado(snapshotAntes);
  evento_social();
}

function evento_social() {
  header("VIDA SOCIAL");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Você recebe convites de três pessoas diferentes.",
    ["Sair com amigos", "Ficar em casa", "Ir a um evento profissional", "Visitar alguém da família", "Organizar uma festa"]
  );

  if (c === 1) { p.amigos += 2; add("felicidade", 15); add("estresse", -10); record("Saiu com amigos."); }
  if (c === 2) { add("estresse", -5); add("felicidade", 4); record("Ficou em casa."); }
  if (c === 3) { add("reputacao", 10); p.experiencia += 12; achievement("Networking"); record("Foi a um evento profissional."); }
  if (c === 4) { add("humanidade", 8); add("felicidade", 10); record("Visitou a família."); }
  if (c === 5) { if (p.dinheiro >= 10) spend(10); p.amigos += 3; add("felicidade", 20); add("caos", 8); record("Organizou uma festa."); }

  mostrarResultado(snapshotAntes);
  relacionamento();
}

function relacionamento() {
  header("RELACIONAMENTOS");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Você conhece alguém interessante.",
    ["Ser sincero", "Ser engraçado", "Fingir ser rico", "Virar amigo primeiro", "Não fazer nada", "Fugir"]
  );

  if (c === 1) { p.relacionamento = true; add("felicidade", 18); add("humanidade", 6); achievement("Relacionamento"); record("Começou um relacionamento sendo sincero."); }
  if (c === 2) { p.relacionamento = true; add("felicidade", 15); add("caos", 5); achievement("Romântico do Caos"); record("Começou relacionamento com humor."); }
  if (c === 3) {
    add("caos", 15); add("humanidade", -5);
    if (roll(40)) { p.relacionamento = true; record("Relacionamento fingindo riqueza."); }
    else { p.inimigos++; record("Descobriram a mentira."); }
  }
  if (c === 4) { p.amigos++; add("felicidade", 6); record("Virou amigo primeiro."); }
  if (c === 5) { add("estresse", -2); record("Não fez nada."); }
  if (c === 6) { add("caos", 10); record("Fugiu da situação."); }

  mostrarResultado(snapshotAntes);

  // Pergunta sobre filhos única e contextualizada
  if (p.relacionamento && !p.flags.decidiu_filhos) {
    familia();
  } else {
    crise();
  }
}

// Pergunta sobre filhos agora roda apenas UMA VEZ
function familia() {
  header("FAMÍLIA E FUTURO");
  p.flags.decidiu_filhos = true;
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Com o relacionamento estabelecido, você e seu cônjuge conversam sobre filhos.",
    [
      "Ter um filho agora",
      "Decidir não ter filhos",
      "Focar no trabalho por enquanto",
      "Adotar no futuro"
    ]
  );

  if (c === 1) { p.filhos++; add("felicidade", 18); add("estresse", 15); achievement("Família"); record("Teve um filho."); }
  if (c === 2) { add("felicidade", 6); record("Decidiram não ter filhos."); }
  if (c === 3) { add("estresse", 2); record("Adiaram os planos de família."); }
  if (c === 4) { add("humanidade", 12); add("felicidade", 10); record("Planejou adotar no futuro."); }

  mostrarResultado(snapshotAntes);
  crise();
}

function crise() {
  header("UMA CRISE");
  narrar("Nem tudo está dando certo.", "Uma série de problemas surge ao mesmo tempo.");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Como você reage?",
    ["Pedir ajuda", "Resolver sozinho", "Tirar dias de descanso", "Trabalhar ainda mais", "Ignorar tudo", "Recomeçar do zero"]
  );

  if (c === 1) { add("estresse", -20); add("humanidade", 6); add("felicidade", 7); record("Pediu ajuda."); }
  if (c === 2) { add("inteligencia", 5); add("estresse", 10); record("Resolveu sozinho."); }
  if (c === 3) { add("estresse", -18); add("felicidade", 12); record("Descansou."); }
  if (c === 4) { money(40); add("estresse", 20); p.experiencia += 10; record("Trabalhou mais."); }
  if (c === 5) { add("estresse", 15); add("caos", 8); record("Ignorou os problemas."); }
  if (c === 6) { add("caos", 20); add("felicidade", 8); record("Mudou de rumo."); }

  mostrarResultado(snapshotAntes);
  empreendedorismo();
}

function empreendedorismo() {
  header("EMPREENDEDORISMO");
  const pode = p.dinheiro >= 30 || p.experiencia >= 30 || p.estudo >= 40;

  if (!pode) {
    narrar("Você ainda não tem recursos/experiência para abrir uma empresa.");
    vida_adulta();
    return;
  }

  const snapshotAntes = capturarSnapshot();
  const c = choice(
    "Surge uma oportunidade de negócio.",
    ["Abrir empresa — R$30", "Procurar sócios", "Continuar empregado", "Criar produto digital", "Desistir"]
  );

  if (c === 1 && spend(30)) {
    p.empresario = true; p.carreira = "Empresário"; add("reputacao", 10); achievement("Empresário");
    if (roll(chanceBonus(55))) { money(120); achievement("Grande Negócio"); record("Empresa de sucesso!"); }
    else { add("estresse", 15); record("Empresa lutando para sobreviver."); }
  }
  if (c === 2) { p.empresario = true; money(50); p.experiencia += 20; add("reputacao", 8); achievement("Sócios"); record("Encontrou sócios."); }
  if (c === 3) { money(40); p.experiencia += 10; record("Continuou empregado."); }
  if (c === 4) { p.experiencia += 25; p.estudo += 15; add("caos", 10); achievement("Criador"); record("Criou produto digital."); }
  if (c === 5) { add("estresse", -5); record("Desistiu de empreender."); }

  mostrarResultado(snapshotAntes);
  vida_adulta();
}

function ano_sabatico() {
  header("ANO SABÁTICO");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Você tem um ano livre.",
    ["Viajar", "Aprender programação", "Trabalhar temporariamente", "Não fazer nada", "Criar um projeto"]
  );

  if (c === 1) { money(-20); add("felicidade", 20); p.experiencia += 12; record("Viajou no ano sabático."); }
  if (c === 2) { p.estudo += 30; add("inteligencia", 12); p.experiencia += 10; achievement("Autodidata"); record("Aprendeu programação."); }
  if (c === 3) { money(35); p.experiencia += 15; record("Trabalhou no ano sabático."); }
  if (c === 4) { add("felicidade", 5); add("estresse", -10); add("caos", 5); record("Não fez nada."); }
  if (c === 5) { p.estudo += 15; p.experiencia += 20; achievement("Projeto Pessoal"); record("Criou projeto pessoal."); }

  p.idade = 19;
  mostrarResultado(snapshotAntes);
  vida_adulta();
}

function internet() {
  header("A INTERNET");
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Você tenta ganhar dinheiro na internet.",
    ["Criar vídeos", "Fazer lives", "Criar conteúdo técnico", "Criar conteúdo absurdo", "Desistir"]
  );

  if (c === 1) {
    add("reputacao", 15); p.experiencia += 15;
    if (roll(35)) { money(100); achievement("Viral"); record("Vídeo viralizou!"); }
    else { money(15); record("Conteúdo regular."); }
  }
  if (c === 2) {
    p.experiencia += 15; add("felicidade", 10);
    if (roll(25)) { money(80); add("reputacao", 20); achievement("Streamer"); record("Lives deram certo!"); }
    else { record("Lives pequenas."); }
  }
  if (c === 3) { p.estudo += 20; add("reputacao", 12); p.experiencia += 20; money(35); achievement("Criador Técnico"); record("Criou conteúdo técnico."); }
  if (c === 4) {
    add("caos", 20); add("reputacao", 10);
    if (roll(40)) { money(70); achievement("Meme Lord"); record("Conteúdo absurdo viralizou!"); }
    else record("Ninguém entendeu.");
  }
  if (c === 5) { add("felicidade", 4); record("Desistiu da internet."); }

  mostrarResultado(snapshotAntes);
  vida_adulta();
}

function vida_adulta() {
  header("MATURIDADE");
  p.idade = Math.max(p.idade, 25);
  const snapshotAntes = capturarSnapshot();

  const c = choice(
    "Sua prioridade principal aos 25+ anos é:",
    ["Consolidar Carreira Executiva", "Investimento e Renda Passiva", "Qualidade de Vida e Família", "Explorar o Mundo", "Mudança Radical de Vida"]
  );

  if (c === 1) { p.experiencia += 20; add("reputacao", 8); add("estresse", 8); record("Priorizou carreira."); }
  if (c === 2) { money(50); add("inteligencia", 5); record("Focou em renda passiva."); }
  if (c === 3) { add("humanidade", 12); add("felicidade", 10); record("Priorizou família."); }
  if (c === 4) { money(-25); add("felicidade", 20); add("estresse", -15); record("Explorou o mundo."); }
  if (c === 5) { money(-20); p.experiencia += 15; add("felicidade", 10); record("Mudança radical."); }

  mostrarResultado(snapshotAntes);
  eventos_especiais();
}

function eventos_especiais() {
  header("ACONTECIMENTOS DA VIDA");
  const eventos = ["pc", "trabalho", "amor", "empresa", "amigos", "loteria", "acidente", "fama", "vizinho", "viagem", "objeto", "professor"];
  const e = eventos[random(0, eventos.length - 1)];

  if (e === "pc") evento_pc();
  else if (e === "trabalho") evento_trabalho_aleatorio();
  else if (e === "amor") evento_amor();
  else if (e === "empresa") evento_empresa();
  else if (e === "amigos") evento_amigos();
  else if (e === "loteria") evento_loteria();
  else if (e === "acidente") evento_acidente();
  else if (e === "fama") evento_fama();
  else if (e === "vizinho") evento_vizinho();
  else if (e === "viagem") evento_viagem();
  else if (e === "objeto") evento_objeto();
  else evento_professor();
}

function evento_pc() {
  header("EVENTO — COMPUTADOR");
  const snapshotAntes = capturarSnapshot();
  const c = choice("Seu computador faz um barulho estranho.", ["Ignorar", "Abrir o gabinete", "Levar na assistência", "Comprar outro", "Dar três tapas"]);

  if (c === 1) add("estresse", 5);
  if (c === 2) { if (roll(60)) add("inteligencia", 5); else add("caos", 10); }
  if (c === 3 && spend(15)) add("estresse", -5);
  if (c === 4 && spend(40)) add("felicidade", 15);
  if (c === 5) add("caos", 15);

  mostrarResultado(snapshotAntes);
  proximoCiclo();
}

function evento_trabalho_aleatorio() {
  header("EVENTO — TRABALHO");
  const snapshotAntes = capturarSnapshot();
  const c = choice("Seu chefe cometeu um erro e jogou a culpa em você.", ["Mostrar provas", "Assumir a culpa", "Confrontar o chefe", "Ignorar", "Pedir demissão"]);

  if (c === 1) { add("reputacao", 8); money(20); }
  if (c === 2) add("estresse", 15);
  if (c === 3) add("caos", 12);
  if (c === 4) add("estresse", 5);
  if (c === 5) { p.emprego = false; p.carreira = "Desempregado"; }

  mostrarResultado(snapshotAntes);
  proximoCiclo();
}

function evento_amor() {
  header("EVENTO — RELACIONAMENTO");
  const snapshotAntes = capturarSnapshot();
  const c = choice("Seu parceiro quer mudar de cidade.", ["Apoiar", "Discordar", "Conversar", "Terminar"]);

  if (c === 1) add("felicidade", 10);
  if (c === 2) add("estresse", 8);
  if (c === 3) add("inteligencia", 3);
  if (c === 4) { p.relacionamento = false; add("felicidade", -10); }

  mostrarResultado(snapshotAntes);
  proximoCiclo();
}

function evento_empresa() {
  header("EVENTO — NEGÓCIOS");
  const snapshotAntes = capturarSnapshot();
  const c = choice("Sua área enfrenta crise no mercado.", ["Cortar custos", "Investir mais", "Pedir empréstimo", "Mudar de ramo"]);

  if (c === 1) money(30);
  if (c === 2) { if (roll(60)) money(100); else add("estresse", 20); }
  if (c === 3) add("estresse", 15);
  if (c === 4) p.experiencia += 15;

  mostrarResultado(snapshotAntes);
  proximoCiclo();
}

function evento_amigos() { header("EVENTO — AMIGOS"); proximoCiclo(); }
function evento_loteria() { header("EVENTO — LOTERIA"); if (roll(30)) money(100); proximoCiclo(); }
function evento_acidente() { header("EVENTO — IMPREVISTO"); spend(20); proximoCiclo(); }
function evento_fama() { header("EVENTO — FAMA"); add("reputacao", 15); proximoCiclo(); }
function evento_vizinho() { header("EVENTO — VIZINHO"); add("caos", 5); proximoCiclo(); }
function evento_viagem() { header("EVENTO — VIAGEM"); add("felicidade", 15); proximoCiclo(); }
function evento_objeto() { header("EVENTO — CAIXA MISTERIOSA"); add("caos", 10); proximoCiclo(); }
function evento_professor() { header("EVENTO — PROFESSOR"); add("inteligencia", 5); proximoCiclo(); }

function proximoCiclo() {
  p.idade += random(3, 6);

  if (p.idade >= 65 || p.dinheiro <= -80) {
    final();
  } else {
    eventos_especiais();
  }
}

function finalType() {
  if (p.estresse >= 90 && p.felicidade <= 20) return "ESGOTAMENTO";
  if (p.dinheiro >= 250 && p.empresario) return "IMPÉRIO EMPRESARIAL";
  if (p.formado && p.inteligencia >= 80) return "CARREIRA DE SUCESSO";
  if (p.dinheiro >= 180 && p.felicidade >= 75) return "VIDA CONFORTÁVEL";
  if (p.humanidade >= 85) return "PESSOA QUE FEZ A DIFERENÇA";
  if (p.caos >= 80) return "LENDÁRIO DO CAOS";
  if (p.felicidade >= 85) return "VIDA FELIZ";
  return "VIDA NORMAL";
}

function final() {
  header("FIM DA HISTÓRIA");
  const f = finalType();

  console.log(`\nFINAL: ${f}\nNome: ${p.nome}\nIdade: ${p.idade}\nDinheiro: R$${p.dinheiro}`);
  alert(`${p.nome}\n\nFINAL: ${f}\n\nDinheiro: R$${p.dinheiro}\nFelicidade: ${p.felicidade}/100\nHumanidade: ${p.humanidade}/100\nCaos: ${p.caos}/100`);

  save();
  if (confirm("Jogar novamente?")) location.reload();
}

window.TOP = p;
window.TOP.status = status;
window.TOP.save = save;
window.TOP.load = load;
window.TOP.reset = reset;

console.log("T.O.P. recarregado e ajustado!");

try {
  intro();
} catch (e) {
  if (e instanceof SairDoJogo) {
    clear();
    console.log("Você saiu do jogo T.O.P.");
  } else {
    throw e;
  }
}


