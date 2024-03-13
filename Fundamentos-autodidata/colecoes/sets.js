// Desafio para retornar outro array apenas com valores unicos, desafio da plataforma de estudo DIO

const arrayOriginal = [30, 30, 40, 5, 223, 2049, 3094, 5];

const arrayUnico = arrayOriginal.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(arrayUnico);