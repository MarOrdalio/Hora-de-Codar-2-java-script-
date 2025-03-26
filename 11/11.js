
// 11. Uma micro calculadora
//Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a
 //serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
//O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

//Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações


let valor1 = parseFloat(prompt(" escreva seu primeiro numero: "))
let valor2 = parseFloat(prompt(" escreva seu segundo numero: "))
while(true) { // true criamos o loop sempre sera verdadeirio
let opcao = parseFloat(prompt("escolha sua opção 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação "))
 

if( opcao == 1){
    soma = valor1 + valor2
    alert("escreva a soma dos numeros são: " + soma)

}else if( opcao==2){
    subtracao = valor1 - valor2
    alert("a subtração dos numeros são: " + subtracao)
}else if(opcao ==3){
    divisao = valor1 / valor2
    alert("a divisão dos numeros são: " + divisao )
}else if(opcao == 4){
    multiplicacao = valor1 * valor2
    alert(" a multiplicação dos numeros são: " + multiplicacao)
    
}
else{
    alert("opção inválida!")

}
}
