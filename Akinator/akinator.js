//Roteiro:

/*
    O site vai ter um sistema semelhante ao "Akinator" onde o usuário responde uma série da perguntas feitas para induzi-lo a chegar na profissão desejada pelo usuário,
o sistema onde a resposta de todas as perguntas irá ficar em um arquivo json, armazenado com todos os valores das profissões. Por exemplo: profissão 1 - valor x (armazenado no json) 
    link da ideia: https://gemini.google.com/app/d2e0cdaacfe84e88?dest=manage
    */

let profissoesOriginal = [];
let possiveis = [];
let perguntasFeitas = new Set();
let historico = [];
let perguntaAtual = null;

//Elemntos do DOM

const perguntaTexto = document.getElementById("pergunta-texto");
const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const btnDesfazer = document.getElementById("btn-desfazer");
const btnReiniciar = document.getElementById("btn-reiniciar");
const elementoJogo = document.getElementById("jogo");
const elementoResultado = document.getElementById("resultado");
const resultadoTitulo = document.getElementById("resultado-titulo");
const resultadoDetalhe = document.getElementById("resultado-detalhe");


