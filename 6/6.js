//6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro,
// o último e o maior de todos eles (considere que todos os números informados serão diferentes)


let valor1 = parseFloat(prompt("Digite o primeiro numero: "));
let valor2 = parseFloat(prompt("Digite o segundo numero: "));
let valor3 = parseFloat(prompt("Digite o terceiro numero: "));
let valor4 = parseFloat(prompt("Digite o quarto numero: "));

let maioNumero = Math.max(valor1, valor2,valor3,valor4);

alert(` o maior valor é:  ${maioNumero} \n` + ` o primeiro valor digitado é: ${valor1} \n` + ` o ultimo valor digitado é: ${valor4}`); //com as `` já chamo dentro do texto com ${} em vez de  "o maior numero é" + maiorNumero



