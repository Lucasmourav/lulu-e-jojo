var precoProduto1 = parseInt(prompt("Digite o preço do primeiro produto:"));
var precoProduto2 = parseInt(prompt("Digite o preço do segundo produto:"));
var precoProduto3 = parseInt(prompt("Digite o preço do terceiro produto:"));

var produtoMaisBarato;
var menorPreco;

if (precoProduto1 < precoProduto2 & precoProduto1 < precoProduto3) {
  produtoMaisBarato = "Produto 1";
  menorPreco = precoProduto1;
} else if (precoProduto2 < precoProduto1 & precoProduto2 < precoProduto3) {
  produtoMaisBarato = "Produto 2";
  menorPreco = precoProduto2;
} else {
  produtoMaisBarato = "Produto 3";
  menorPreco = precoProduto3;
}
console.log("O produto mais barato é o " + produtoMaisBarato + " com preço de R$" + menorPreco);
