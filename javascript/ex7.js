function nomesOrdenadosPorPreco(produtos) {
  return produtos

  
    .slice() // Faz uma cópia do array original
    .sort((a, b) => a.preco - b.preco) // Ordena por preço crescente
    .map(produto => produto.nome); // Extrai apenas os nomes
}
