console.log('Lista 02')
/*
1. [while] Desenvolva uma página que leia as notas de uma disciplina de uma sala com “n” alunos 
   (ficará a critério do usuário indicar quando os alunos acabaram).  Ao término, apresente:
   -> A quantidade de notas lidas.
   -> A média aritmética das notas da sala.

2. [do..while] Desenvolva uma página que leia as idades de “n” pessoas até que a soma das idades 
   ultrapasse 100 anos. Ao término, apresente:
   -> A idade da pessoa mais velha.

3. [for] Desenvolva uma página que leia um número inicial e um número final e apresente os números 
   entre esse intervalo de 3 em 3. Por exemplo, de 10 a 30 seria apresentado 10, 13, 16, 19, 22, 25 e 28.
*/



/* DESAFIO COMPLETO COM SUCESSO
var TotalNotas = 0;
let SomaNotas = 0;

while(true){
   let nota = prompt("Digite a nota do aluno, ou 'fim' para encerrar");

   if(nota.toLowerCase() === 'fim'){
      break;
   }


   nota = parseFloat(nota);
   if(!isNaN(nota)){
      TotalNotas++
      SomaNotas += nota;
   } else {
      alert("Por favor, adicione uma nota válida")
   }
}

const media = TotalNotas > 0 ? SomaNotas / TotalNotas : 0;

alert(`Quantidade de notas lidas ${TotalNotas}`)
alert(`Média aritmética das notas ${media.toFixed(2)}`);
*/




/* DESAFIO COMPLETO COM SUCESSO
function obterIdade() {
   return parseInt(prompt("Digite a idade da pessoa (ou 0 para encerrar):"));
 }

 // Função principal
 function calcularIdadeMaisVelha() {
   let somaIdades = 0;
   let idadeMaisVelha = 0;

   do {
     let idade = obterIdade();

     if (idade > 0) {
       somaIdades += idade;

       if (idade > idadeMaisVelha) {
         idadeMaisVelha = idade;
       }
     } else {
       alert("Idade inválida. Por favor, digite uma idade válida.");
     }
   } while (somaIdades <= 100);

   alert("Soma das idades ultrapassou 100 anos. Idade da pessoa mais velha: " + idadeMaisVelha);
 }

 calcularIdadeMaisVelha();
 */





/* DESAFIO FEITO COM SUCESSO
  function obterLimites() {
   const inicial = parseInt(prompt("Digite o número inicial:"));
   const final = parseInt(prompt("Digite o número final:"));

   if (!isNaN(inicial) && !isNaN(final) && inicial <= final) {
     return [inicial, final];
   } else {
     alert("Por favor, insira números válidos e o inicial deve ser menor ou igual ao final.");
     return obterLimites();
   }
 }


 function imprimirNumerosDe3Em3() {
   const [inicial, final] = obterLimites();

   for (let i = inicial; i <= final; i += 3) {
     console.log(i);
   }
 }

 imprimirNumerosDe3Em3();
 */