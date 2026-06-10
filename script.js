const frases = [
    "Nunca desista dos seus objetivos.",
    "A persistência leva ao sucesso.",
    "Grandes conquistas começam com pequenos passos.",
    "Aprender todos os dias faz a diferença."
];

function novaFrase(){
    const indice = Math.floor(Math.random()*frases.length);
    document.getElementById("frase").innerText = frases[indice];
}

novaFrase();