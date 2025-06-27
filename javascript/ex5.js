function debounce(fn, delay) {
  let timeoutId; // Armazena o ID do timer

  // Retorna uma nova função
  return function (...args) {

    
  // Se já existe um timer, cancela ele
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Define um novo timer para executar fn depois do delay
    timeoutId = setTimeout(() => {
      fn(...args); // Executa a função original com os argumentos
    }, delay);
  };
}
