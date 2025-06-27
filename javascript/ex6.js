function memoize(fn) {
  const cache = {}; // Objeto para armazenar resultados

  return function (...args) {
    const chave = JSON.stringify(args); // Converte os argumentos array ou objeto para uma string

    // Se já existe resultado no cache, retorna direto
    if (cache.hasOwnProperty(chave)) {
      return cache[chave];
    }

    // Se não existe, calcula e guarda o resultado
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}
