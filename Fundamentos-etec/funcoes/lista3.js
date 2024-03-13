console.log('Lista 03')
/*
Leia dois números e a opção escolhida pelo usuário, sendo:
1 – Apresente a média aritmética dos números. (Com parâmetros e Com retorno).
2 – Apresenta o menor número. (Com parâmetros e Com retorno).
3 – Apresenta a diferença entre o maior e o menor número. (Com parâmetros e Com retorno).
4 – Apresenta os números em ordem crescente. (Com parâmetros e Sem retorno).

Os dois números devem ser diferentes. Caso sejam informados números iguais 
apresente mensagem de “erro” e solicite novamente os números.

Cada opção será implementada em uma função.

*/

// Função para ler números e verificar se são diferentes


function lerNumeros() {
  let numero1, numero2;

  while (true) {
      numero1 = parseFloat(prompt("Digite o primeiro número:"));
      numero2 = parseFloat(prompt("Digite o segundo número:"));

      if (numero1 !== numero2) {
          break; // Números diferentes, sai do loop
      } else {
          alert("Erro: Os números devem ser diferentes. Por favor, tente novamente.");
      }
  }

  return [numero1, numero2];
}

// Função para calcular a média aritmética
function calcularMedia(numero1, numero2) {
  return (numero1 + numero2) / 2;
}

// Função para encontrar o menor número
function encontrarMenor(numero1, numero2) {
  return Math.min(numero1, numero2);
}

// Função para calcular a diferença entre o maior e o menor número
function calcularDiferenca(numero1, numero2) {
  return Math.abs(numero1 - numero2);
}

// Função para ordenar os números em ordem crescente
function ordenarCrescente(numero1, numero2) {
  return [Math.min(numero1, numero2), Math.max(numero1, numero2)];
}

// Chama a função para ler números
const [num1, num2] = lerNumeros();

// Menu de opções
const opcao = parseInt(prompt("Escolha uma opção:\n1 - Média aritmética\n2 - Menor número\n3 - Diferença entre números\n4 - Ordenar em ordem crescente"));

// Executa a operação escolhida
switch (opcao) {
  case 1:
      alert("Média aritmética: " + calcularMedia(num1, num2));
      break;
  case 2:
      alert("Menor número: " + encontrarMenor(num1, num2));
      break;
  case 3:
      alert("Diferença entre números: " + calcularDiferenca(num1, num2));
      break;
  case 4:
      const [menor, maior] = ordenarCrescente(num1, num2);
      alert("Números em ordem crescente: " + menor + ", " + maior);
      break;
  default:
      alert("Opção inválida. Por favor, escolha uma opção de 1 a 4.");
}