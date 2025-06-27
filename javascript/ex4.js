function fatorial(n) {
  

// Verifica se não é um fator negativo
  if (n < 0) {
    throw new Error("Fatorial não é definido para números negativos.");
  }

  // Caso base: fatorial de 0 é 1
  if (n === 0) {
    return 1;
  }

  // Chamada recursiva: n! = n * (n - 1)!
  return n * fatorial(n - 1);
}
