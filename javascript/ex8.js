const totaisPorCliente = vendas.reduce((acumulador, venda) => {
  const { cliente, total } = venda;

  // Se o cliente já está no acumulador, soma
  if (acumulador[cliente]) {
    acumulador[cliente] += total;
  } else {

    // Senão, cria a chave com o valor inicial
    acumulador[cliente] = total;
  }

  return acumulador;
}, {}); 
