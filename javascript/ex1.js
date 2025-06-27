function ehDataValida(dia, mes, ano) {
  // Verifica se o mês está no intervalo válido (1 a 12)
  if (mes < 1 || mes > 12) {
    return false;
  }

  if (dia < 1) {
    return false;
  }

  // Define a quantidade de dias em cada mês
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Verifica se o ano é bissexto para ajustar fevereiro
  if (mes === 2 && anoBissexto(ano)) {
    diasPorMes[1] = 29; // Ajusta fevereiro para 29 dias
  }

  if (dia > diasPorMes[mes - 1]) {
    return false;
  }

  return true;
}

// Função auxiliar para verificar se um ano é bissexto
function anoBissexto(ano) {
  // Um ano é bissexto se for múltiplo de 4 e não de 100, ou se for múltiplo de 400
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
