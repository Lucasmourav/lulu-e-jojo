var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));

if (valor1 > valor2 & valor1 > valor3) {
    if (valor2 > valor3) {
        var somaDosMaiores = valor1 + valor2;
    } else {
        var somaDosMaiores = valor1 + valor3;
    }
} else if (valor2 > valor1 & valor2 > valor3) {
    if (valor1 > valor3) {
        var somaDosMaiores = valor2 + valor1;
    } else {
        var somaDosMaiores = valor2 + valor3;
    }
} else {
    if (valor1 > valor2) {
        var somaDosMaiores = valor3 + valor1;
    } else {
        var somaDosMaiores = valor3 + valor2;
    }
}

console.log("A soma dos dois maiores valores é: " + somaDosMaiores);
