// --- SISTEMA DE NAVEGAÇÃO DO MENU ---
function showScreen(screenId) {
  // Esconde todas as telas
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });

  // Mostra a tela selecionada
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.remove('hidden');
  }

  // Se entrou no Akinator, inicia ou reseta o jogo
  if (screenId === 'akinator-screen') {
    restartAkinator();
  }
}

// --- LÓGICA DO JOGO AKINATOR (OPÇÃO 1) ---
const akinatorTree = {
  pergunta: "Seu personagem é um ser humano?",
  sim: {
    pergunta: "É um programador/desenvolvedor?",
    sim: { resposta: "Linus Torvalds!" },
    nao: { resposta: "Akinator!" }
  },
  nao: {
    pergunta: "É um personagem de videogame?",
    sim: { resposta: "Sonic the Hedgehog!" },
    nao: { resposta: "Dragão!" }
  }
};

let currentNode = akinatorTree;

function renderAkinatorNode() {
  const questionEl = document.getElementById('akinator-question');
  const gameContent = document.getElementById('game-content');
  const gameResult = document.getElementById('game-result');
  const resultText = document.getElementById('result-text');

  // Caso seja um nó de resposta final
  if (currentNode.resposta) {
    gameContent.classList.add('hidden');
    gameResult.classList.remove('hidden');
    resultText.innerText = `Seu personagem é: ${currentNode.resposta}`;
  } else {
    // Caso ainda seja uma pergunta
    gameContent.classList.remove('hidden');
    gameResult.classList.add('hidden');
    questionEl.innerText = currentNode.pergunta;
  }
}

function handleAkinatorAnswer(isYes) {
  if (isYes && currentNode.sim) {
    currentNode = currentNode.sim;
  } else if (!isYes && currentNode.nao) {
    currentNode = currentNode.nao;
  }
  renderAkinatorNode();
}

function restartAkinator() {
  currentNode = akinatorTree;
  renderAkinatorNode();
}