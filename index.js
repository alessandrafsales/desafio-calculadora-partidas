//Calculadora de partidas Rankeadas

// Referente ao herói, preencha o seu nome
let nomeHeroi = ""
let level = ""

function calcularPartidas(quantVitorias, quantDerrotas) {
    return (quantVitorias - quantDerrotas)
}

saldoVitorias = calcularPartidas("", "") // Preencher quantVitorias, quantDerrotas

// Classificação do nível
if(saldoVitorias <= 10){
    level = "Ferro"
}else if(saldoVitorias <= 20){
    level = "Bronze"
}else if(saldoVitorias <= 50){
    level = "Prata"
}else if(saldoVitorias <= 80){
    level = "Ouro"
}else if(saldoVitorias <= 90){
    level = "Diamante"
}else if(saldoVitorias <= 100){
    level = "Lendário"
}else{
    level = "Imortal"
}

// Output
console.log(` O herói(a) ${nomeHeroi} possui o saldo de ${saldoVitorias} vitórias, e está no nível de ${level}` )
