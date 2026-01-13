//Variavel
//nome do heroi = let Herois
let herois = [
  { nome: "Sova", xp: 8000 }
] 


// Laço de repetição FOR
for (let i = 0; i < herois.length; i++) {

//variaveis
let xpHeroi = herois[i].xp
let nivel = ""


// Estrutura de Decição foi usada o if , else if, else
if (xpHeroi <=1000){
    nivel = "Ferro"

}else if (xpHeroi >= 1001 && xpHeroi<= 2000){
    nivel = "Bronze"

}else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivel = "Prata"

}else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivel = "Ouro"

}else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivel = "Platina"

}else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivel = "Ascendente"

}else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivel = "Imortal"

}else{
    nivel = "Radiante"
}

//Saída 
console.log( "O Herói de nome " + herois[i].nome + " está no nível de " + nivel)
  
}

