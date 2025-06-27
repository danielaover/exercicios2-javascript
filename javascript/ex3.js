const frase = "olá olá mundo mundo";

// Split é um método string utilizado para separar as palavras
const palavras = frase.split(" ");

const unicas = [];

// Percorre cada palavra da frase
for (let i = 0; i < palavras.length; i++) {
  const palavra = palavras[i];

  // Verifica se a palavra ainda não está no array "unicas"
  let jaExiste = false;

  // Loop interno para verificar duplicatas
  for (let j = 0; j < unicas.length; j++) {
    if (palavra === unicas[j]) {
      jaExiste = true;
      break; // É utilizado para caso encontrado usa-se para quebrar o seguimento
    }
  }

  // Se não existe, adiciona ao array de únicas
  if (!jaExiste) {
    unicas.push(palavra);
  }
}


console.log(unicas);
