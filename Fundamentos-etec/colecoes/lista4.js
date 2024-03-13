console.log('Lista 04')
/*


2. Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração 
   apresente a média aritméticas desses valores.

3. Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.

4. Desenvolva um programa que leia 10 números e apresente os valores pares. 
   Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”

5. Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 
   (caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.

6. Desenvolva um programa que a partir de um vetor de Strings com 10 nomes inicializados na declaração 
   leia um novo nome e verifique se ele está armazenado no vetor, se estiver, apresenta a posição (índice) onde ele está, 
   caso contrário, apresente a mensagem “Nome não encontrado!”

7. Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
   Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.

8. Desenvolva um programa que leia 6 números inteiros e armazene em um vetor A. 
   Carregue um vetor B (de mesmo tipo e tamanho) com a metade dos valores armazenados em A. 
   Apresente os valores dos dois vetores.

9. Desenvolva um programa que leia 5 números inteiros e armazene em um vetor A. 
   Leia 5 números inteiros e armazene em um vetor B. 
   Carregue e apresente um vetor C com os valores de A e B alternados. 
*/


// Exercício 1
const vetor1 = [5, 8, 12, 3, 7];
const resultado1 = vetor1.map(valor => valor * 2);
console.log("Exercício 1:", resultado1);

// Exercício 2
const vetor2 = [10, 15, 20, 25, 30, 35, 40, 45];
const media2 = vetor2.reduce((soma, valor) => soma + valor, 0) / vetor2.length;
console.log("Exercício 2:", media2);

// Exercício 3
const idades = []; // Preencha com as idades
const mediaIdades = idades.reduce((soma, idade) => soma + idade, 0) / idades.length;
const acimaMedia = idades.filter(idade => idade > mediaIdades);
console.log("Exercício 3:", acimaMedia);

// Exercício 4
const numeros4 = [3, 8, 12, 7, 5, 9, 14, 21, 16, 11];
const pares4 = numeros4.filter(numero => numero % 2 === 0);
console.log("Exercício 4:", pares4.length > 0 ? pares4 : "Todos os números são ímpares.");

// Exercício 5
const numeros5 = []; // Preencha com 8 números entre 100 e 200
const validos5 = numeros5.filter(numero => numero >= 100 && numero <= 200);
console.log("Exercício 5:", validos5);

// Exercício 6
const nomes6 = ["Ana", "Carlos", "Maria", "João", "Pedro", "Laura", "Lucas", "Julia", "Rafael", "Fernanda"];
const nomeBuscado6 = prompt("Digite um nome:");
const indice6 = nomes6.indexOf(nomeBuscado6);
console.log("Exercício 6:", indice6 !== -1 ? `Nome encontrado na posição ${indice6}` : "Nome não encontrado!");

// Exercício 7
const nomes7 = ["Ana", "Carlos", "Maria", "João", "Pedro", "Laura", "Lucas", "Julia", "Rafael", "Fernanda"];
let tentativas7 = 5;
let encontrado7 = false;

while (tentativas7 > 0 && !encontrado7) {
    const nomeBuscado7 = prompt("Digite um nome:");
    const indice7 = nomes7.indexOf(nomeBuscado7);

    if (indice7 !== -1) {
        console.log(`Exercício 7: Nome encontrado na posição ${indice7} na tentativa ${(6 - tentativas7)}`);
        encontrado7 = true;
    } else {
        alert("Nome não encontrado. Tente novamente.");
        tentativas7--;
    }
}

if (!encontrado7) {
    console.log("Exercício 7: Limite de tentativas atingido. Nome não encontrado.");
}

// Exercício 8
const vetor8A = [10, 20, 30, 40, 50, 60];
const vetor8B = vetor8A.map(valor => valor / 2);
console.log("Exercício 8 - Vetor A:", vetor8A);
console.log("Exercício 8 - Vetor B:", vetor8B);

// Exercício 9
const vetor9A = [5, 10, 15, 20, 25];
const vetor9B = [30, 35, 40, 45, 50];
const vetor9C = [];

for (let i = 0; i < vetor9A.length; i++) {
    vetor9C.push(vetor9A[i], vetor9B[i]);
}

console.log("Exercício 9 - Vetor C:", vetor9C);