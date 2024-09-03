function varValores() {
    let A = parseFloat(prompt("Digite o valor A:"));
    let B = parseFloat(prompt("Digite o valor B:"));
    let C = parseFloat(prompt("Digite o valor C:"));
    return [A, B, C];
  }

  function mostrarOrdemLida(valores) {
    console.log("Valores na ordem lida: " + valores.join(""));
  }

  function mostrarOrdemCrescente(valores) {
    var valoresOrdenados = valores.slice().sort(function(a, b) {
      return a - b;
    });
    console.log("Valores em ordem crescente: " + valoresOrdenados.join(", "));
  }

  function mostrarOrdemDecrescente(valores) {
    var valoresOrdenados = valores.slice().sort(function(a, b) {
      return b - a;
    });
    console.log("Valores em ordem decrescente: " + valoresOrdenados.join(", "));
  }

  var valores = varValores();
  mostrarOrdemLida(valores);
  mostrarOrdemCrescente(valores);
  mostrarOrdemDecrescente(valores);
  