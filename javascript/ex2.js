const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// Gera um número aleatório entre 1 e 100

// Inicializa o contador de tentativas
let tentativas = 0;

let palpite; 

// Loop que continua enquanto o usuário não acertar o número
while (palpite !== numeroSecreto) {

  // Pede ao usuário um número e converte para número inteiro
  palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));

  // Aqui irá incrementar número de tentativas
  tentativas++;

  // Verifica se o palpite é menor que o número secreto
  if (palpite < numeroSecreto) {
    alert("Mais alto! Tente novamente.");

  }
  // Verifica se o palpite é maior que o número secreto
  else if (palpite > numeroSecreto) {
    alert("Mais baixo! Tente novamente.");
  }

  else {
    alert(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
  }
}
