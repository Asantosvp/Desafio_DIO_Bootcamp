let nomeDoHeroi = "Maria"
let xpDoHeroi = 5000

// Estrutura de decisão para determinar o nível do herói com base na XP
let nivel = "" // Variável para armazenar o nível do herói

if (xpDoHeroi < 1000){
    console.log(nivel = "ferro")
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
    console.log(nivel = "bronze")
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    console.log(nivel = "prata")
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7001){
    console.log(nivel = "ouro")
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    console.log(nivel = "platina")
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    console.log(nivel = "ascendente")
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    console.log(nivel = "imortal")
} else {
    nivel = "radiante"
}
// Exibindo a mensagem com o nível do herói
console.log("O herói de nome " + nomeDoHeroi + " está no nível de " + nivel)