
//5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o primeiro valor: "));
let valor3 = parseFloat(prompt("Digite o primeiro valor: "));
let valor4 = parseFloat(prompt("Digite o primeiro valor: "));
let valor5 = parseFloat(prompt("Digite o primeiro valor: "));
let valor6 = parseFloat(prompt("Digite o primeiro valor: "));

alert("os numeros informados foi: " + valor1 + " "+ valor2+ " " + valor3+ " "+ valor4+ " "+ valor5+ " "+ valor6); // ou (${valor1}, ${valor2}, ${valor3}, ${valor4}, ${valor5}, ${valor6}`);


soma = valor1+valor2+valor3+valor4+valor5+valor6;
media = soma/6;

alert("a média aritmética dos valores informados é: " + media);