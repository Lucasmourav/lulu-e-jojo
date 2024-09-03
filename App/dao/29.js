function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const numero1 = gerarNumeroAleatorio();
  const numero2 = gerarNumeroAleatorio();
  const numero3 = gerarNumeroAleatorio();

  const numeros = [numero1, numero2, numero3];

  numeros.sort(function(a, b) {
    return b - a;
  });
  console.log("Números em ordem decrescente:", numeros);
  