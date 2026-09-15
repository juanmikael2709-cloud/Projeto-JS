// Estrutura de dados das perguntas
const questions = [
    {
        image: "img/guilherme.jpg",
        question: "Qual matéria esse professor leciona ao 1 ano?",
        options: ["Física", "Química", "Biologia", "Matemática"],
        correctAnswer: 0
    },
    {
        image: "img/heitor.jpg",
        question: "Qual matéria esse professor leciona ao 1 ano?",
        options: ["História", "Filosofia", "Sociologia", "Português"],
        correctAnswer: 1
    },
    {
        image: "img/ibsen.jpg",
        question: "Qual matéria esse professor leciona ao 1 ano?",
        options: ["Artes", "Inglês", "Educação Física", "Espanhol"],
        correctAnswer: 2
    },
    {
        image: "img/noboru.jpg",
        question: "Qual matéria esse professor leciona ao 1 ano?",
        options: ["Algoritmos", "Banco de Dados", "Redes", "Sistemas Operacionais"],
        correctAnswer: 0
    },
    {
        image: "img/wanderson.jpg",
        question: "Qual matéria esse professor leciona ao 1 ano?",
        options: ["Design Digital", "Hardware", "Lógica de Programação", "Desenvolvimento Web"],
        correctAnswer: 3
    },
    // BÔNUS 1 (Escondida)
    {
        image: "img/Sem título.jpg",
        question: "BÔNUS 1: Qual matéria esse professor leciona ao 1 ano?",
        options: ["Física", "Matemática", "Química", "Biologia"],
        correctAnswer: 1,
        bonusLevel: 1
    },
    // SUPER BÔNUS (Escondida e sem imagem)
    {
        image: "",
        question: "BÔNUS 2: Qual o professor que chama os alunos do 1 ano de chato de galocha",
        options: ["Ronaldo", "Heitor", "Noboru", "Ibsen"],
        correctAnswer: 1,
        bonusLevel: 2
    }
];

// Variáveis de estado
let currentQuestionIndex = 0;
let score = 0;

// Referências do DOM
const imgElement = document.getElementById("teacher-image");
const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const finalScoreElement = document.getElementById("final-score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartBtn = document.getElementById("restart-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeText = document.getElementById("theme-text");

// Lógica de Alternância do Modo Escuro
themeToggleBtn.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    
    if (document.documentElement.classList.contains("dark")) {
        themeText.textContent = "Modo Claro";
    } else {
        themeText.textContent = "Modo Escuro";
    }
});

// Função para carregar a pergunta
function loadQuestion() {
    const currentQuiz = questions[currentQuestionIndex];

    // Oculta/Exibe a imagem dinamicamente
    if (currentQuiz.image && currentQuiz.image !== "") {
        imgElement.src = currentQuiz.image;
        imageContainer.classList.remove("hidden");
    } else {
        imageContainer.classList.add("hidden");
    }

    questionElement.textContent = currentQuiz.question;
    optionsContainer.innerHTML = "";

    // Botões estilizados com classes para Dark Mode
    currentQuiz.options.forEach(function (optionText, index) {
        const button = document.createElement("button");
        button.textContent = optionText;
        button.className = "w-full py-3 px-4 bg-slate-50 dark:bg-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-slate-200 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-200 font-medium rounded-xl text-left transition flex justify-between items-center";

        button.onclick = function () {
            selectOption(index);
        };

        optionsContainer.appendChild(button);
    });

    updateProgress();
}

// Trata a seleção da resposta
function selectOption(selectedIndex) {
    const currentQuiz = questions[currentQuestionIndex];

    if (selectedIndex === currentQuiz.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < 5) {
        loadQuestion();
    } else if (currentQuestionIndex === 5) {
        if (score === 5) {
            loadQuestion();
        } else {
            showResults();
        }
    } else if (currentQuestionIndex === 6) {
        if (score === 6) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        showResults();
    }
}

// Atualiza a barra de progresso
function updateProgress() {
    const totalMainQuestions = 5;
    const currentQuiz = questions[currentQuestionIndex];

    if (currentQuiz.bonusLevel === 1) {
        progressBar.style.width = "100%";
        progressText.textContent = "FASE BÔNUS 1! 🔥";
        progressPercent.textContent = "100%+";
    } else if (currentQuiz.bonusLevel === 2) {
        progressBar.style.width = "100%";
        progressText.textContent = "SUPER BÔNUS FINAL! ⚡";
        progressPercent.textContent = "100%++";
    } else {
        const current = currentQuestionIndex + 1;
        const percentage = (current / totalMainQuestions) * 100;

        progressBar.style.width = percentage + "%";
        progressText.textContent = `Pergunta ${current} de ${totalMainQuestions}`;
        progressPercent.textContent = `${Math.round(percentage)}%`;
    }
}

// Exibe a tela final de resultados
function showResults() {
    quizContainer.classList.add("hidden");
    quizContainer.classList.remove("block");
    resultContainer.classList.remove("hidden");

    finalScoreElement.textContent = score;

    if (currentQuestionIndex === 7) {
        totalQuestionsElement.textContent = "7 (Perfeito! Com Super Bônus!)";
    } else if (currentQuestionIndex === 6) {
        totalQuestionsElement.textContent = "6 (com Bônus 1)";
    } else {
        totalQuestionsElement.textContent = "5";
    }
}

// Reinicia o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    quizContainer.classList.add("block");

    loadQuestion();
}

restartBtn.addEventListener("click", restartQuiz);

// Inicialização
loadQuestion();