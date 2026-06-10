const frases = [
  "Nunca desista dos seus objetivos.",
  "O sucesso é construído um passo de cada vez.",
  "Aprender algo novo todos os dias faz a diferença.",
  "Grandes conquistas começam com pequenas ações.",
  "A persistência é o caminho para a realização."
];

const indice = Math.floor(Math.random() * frases.length);

console.log("Frase do dia:");
console.log(frases[indice]);