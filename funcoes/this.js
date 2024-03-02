// Desafio de this, plataforma de estudo DIO

function calcularIdade(anos){
  return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const p1 = {
  nome: "Yhago",
  idade: 18
};

const p2 = {
  nome: "Beatriz",
  idade: 24
}

// Método call
const resultadoCall = calcularIdade.call(p1,5);
console.log(resultadoCall)

// Método apply
const resultadoApply = calcularIdade.apply(p2, [7]);
console.log(resultadoApply)