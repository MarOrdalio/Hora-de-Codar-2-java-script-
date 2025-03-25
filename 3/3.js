//3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo o valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor"));


while(valor1==valor2 || valor2==valor3 || valor3==valor1){
    alert("os valores não podem ser iguais");
    
    valor1 = parseFloat(prompt("digite o primeiro valor: "));//onde tiver prompt nã precisa do ALERT
    valor2 = parseFloat(prompt("digite o segundo valor: "));
    valor3 + parseFloat(prompt(" digite o terceiro valor: "));


} if(valor1>valor2 && valor1>valor3){
    alert( valor1  + " é o maior valor");
}else if(valor2>valor1 && valor2>valor3){
    alert(valor2+ " é o maior valor");
}else{
    alert(valor3 + " é o maior valor");
}