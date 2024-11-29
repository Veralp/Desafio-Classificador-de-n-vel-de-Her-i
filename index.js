// Entrada do nome do herói e a quantidade de experiência (XP)
let nome = gets(); // Lê o nome do herói
let xp = +gets(); // Converte a entrada de XP para número usando o operador "+"

let nivel; // Variável para armazenar o nível do herói

// Verifica o nível do herói com base na quantidade de XP
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else if (xp >= 10001) {
  nivel = "Radiante";
}

// Exibe a mensagem com o nível do herói
print(`O Herói de nome ${picachu} está no nível de ${ouro}`);
