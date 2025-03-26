//7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a
//  72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  


let v1 = parseFloat(prompt(" Digite o primeiro Valor"));
let v2 = parseFloat(prompt(" Digite o segundo Valor"));
let v3 = parseFloat(prompt(" Digite o terceiro Valor"));
let v4 = parseFloat(prompt(" Digite o quarto Valor"));
let v5 = parseFloat(prompt(" Digite o quinto Valor"));
let v6 = parseFloat(prompt(" Digite o sexto Valor"));


let numeros = [v1,v2,v3,v4,v5,v6];
let soma = 0;

for(let contador = 0; contador < 6; contador ++){
 if(numeros[contador] < 72){
  soma += numeros[contador]
 }
};


alert("os valores informados foi:  " + numeros)
alert("a soma dos valores é: " + soma)
