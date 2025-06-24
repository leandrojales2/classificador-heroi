// Lista de heróis com seus respectivos nomes e pontos de XP
const herois = [
  { nome: "Artemis", xp: 850 },
  { nome: "Baldur", xp: 1500 },
  { nome: "Celeste", xp: 3000 },
  { nome: "Drako", xp: 6000 },
  { nome: "Eclipse", xp: 7500 },
  { nome: "Fenrir", xp: 8900 },
  { nome: "Galahad", xp: 9500 },
  { nome: "Helena", xp: 12000 }
];

// Função utilizando operadores relacionais e lógicos
function classificarNivel(xp) {
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp > 2000 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp > 5000 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp > 7000 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  return nivel;
}

// Laço para percorrer cada herói da lista e exibir a mensagem
for (let i = 0; i < herois.length; i++) {
  const heroi = herois[i];
  const nivel = classificarNivel(heroi.xp);
  console.log("O Herói de nome " + heroi.nome + " está no nível de " + nivel);
}