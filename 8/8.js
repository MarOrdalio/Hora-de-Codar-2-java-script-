//8. Escreva um programa que calcule a média de quatro números informados pelo usuário,
//  mas somente se esses números forem maiores que 0 e menores que 10. No final,
//  se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". 
// Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

let valor1 = parseFloat(prompt(" digite o valor 1: "));
let valor2 = parseFloat(prompt(" digite o valor 2: "));
let valor3 = parseFloat(prompt(" digite o valor 3: "));
let valor4 = parseFloat(prompt(" digite o valor 4: "));

let numeros = [valor1,valor2,valor3,valor4];
let soma = 0;

for(let contador =0; contador < 4; contador ++){ 
   if(numeros[contador] < 10 && numeros[contador] >0 );
   soma += numeros[contador] // += adiciona os numeros em soma
}
media = soma/4
if(media>5){
    alert(`sua média foi ${media} você passou no teste!`)
}else { alert("sua média foi" + media + "você não passou no teste!")}