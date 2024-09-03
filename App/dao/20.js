var n = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

if (n < 0) {
  console.log("O fatorial não está definido para números negativos.");
} else {
  var resultado = 1;
  for (i = 1; i <= n; i++) {
    resultado *= i;
  }
  console.log(`O fatorial de ${n} é ${resultado}`);
}
