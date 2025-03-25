//4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo o valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor"));


while(valor1==valor2 || valor2==valor3 || valor3==valor1){
    alert("os valores não podem ser iguais");
    
    valor1 = parseFloat (prompt("digite o primeiro valor: "));
    valor2 = parseFloat (prompt("digite o segundo valor: "));
    valor3 = parseFloat (prompt(" digite o terceiro valor: "));


} 

let soma

if(valor1>valor2 && valor1>alor3){
   soma =  valor1 + Math.max(valor3,valor2);
    alert( " a soma dos maiores valor são: " + soma);

}else if(valor2>valor1 && valor2>valor3){
    soma =  valor2 + Math.max(valor1,valor3);
    alert( " a soma dos maiores valor são: " + soma);

}else{

    soma =  valor3 + Math.max(valor1,valor2);
    alert( " a soma dos maiores valor são: " + soma);
}

