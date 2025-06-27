function paresParaObjeto(pares) {
  const obj = {}; // Objeto vazio para construir o resultado

  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i]; // Desestrutura o par
    obj[chave] = valor; // Atribui ao objeto
  }

  return obj;
}


//-------------------

function objetoParaPares(obj) {
  const pares = []; // Array para guardar os pares

  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]); // Monta o par e adiciona
    }
  }

  return pares;
}
