// Desafio Validade de erros por tipo, pela plataforma de estudo DIO

function validarArrayTamanho(array, numero){
    try{
      // Validação se os parâmetros foram enviados
      if(arguments.length !== 2){
        throw new ReferenceError("A função requrer dois parâmetros, um array e número.");
      }
      // Validação se o array não é do tipo 'object'
      if(!(array instanceof Object)){
        throw new TypeError("O primeiro parâmetro deve ser um objeto (array).");
      }
      // Validação se o número não do tipo 'number'
      if(typeof numero !== "number"){
        throw new TypeError("O segundo parâmetro deve ser um número");
      }
      // Validação se o tamanho da array é diferente do número
      if(array.length !== numero){
        throw new RangeError("O tamanho do array não corresponde ao número fornecido");
    }
  
  // Caso  todos os testes passem, retorna o array
  return array;
  }catch(error){
    // Vamos realizar as chamadas do catch por tipo de erro usando instanceoff
    if( error instanceof ReferenceError || error instanceof TypeError || error instanceof RangeError){
      console.log(`O erro  encontrado foi: ${error.name} - ${error.message}`);
    } else {
      throw error;
    }  
  }
}



// Exemplo do uso da função acima

  try{
    const meuArray = [1, 2, 3, 4, 5];
    const numeroAguardado = 5;

    const resultado = validarArrayTamanho(meuArray, numeroAguardado);
    console.log("Array válido: ", resultado);
  } catch (error) { // Lida com erros não especificados fora do escopo das validações
    console.error("Erro inesperado: ", error)
  }