// desafio Alunos Aprovados pela plataforma de estudo DIO

function alunosAprovados(arrayAlunos, mediaFinal){
  const alunosAprovados = [];

  // Indo pelo array de alunos usando loop
  for(const aluno of arrayAlunos){
    const { nome, nota } = aluno;

    if(nota >= mediaFinal){
      alunosAprovados.push({ nome,nota });
    }
  }

  return alunosAprovados;
}


const listaAlunos = [
  { nome: "Yhago", nota:10 },
  { nome: "Gabriel", nota:4 },
  { nome: "Felipe", nota:8 },
  { nome: "Henri", nota:4 }
];

const mediaMinima = 7;

const alunosAprovadosArray = alunosAprovados(listaAlunos, mediaMinima);

console.log("Alunos Aprovados: ", alunosAprovadosArray)