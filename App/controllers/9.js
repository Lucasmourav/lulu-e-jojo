var salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
var valorVendas = parseFloat(prompt("Digite o valor das vendas efetuadas pelo vendedor:"));

var comissao1 = Math.min(valorVendas, 1500) * 0.03;
var comissao2 = (valorVendas > 1500) ? (valorVendas - 1500) * 0.05 : 0;
var salarioTotal = salarioFixo + comissao1 + comissao2;

console.log("Salário Total do Vendedor: R$" + salarioTotal);
