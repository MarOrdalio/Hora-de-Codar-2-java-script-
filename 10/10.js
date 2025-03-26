//10. Tendo como entrada a altura e o gênero designado ao nascer 
// (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa,
//  construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas.


let genero = parseFloat(prompt("qual seu gênero designado ao nascer 1-FEMININO 2-MASCULINO: "))
let altura = parseFloat(prompt("qual é a sua altura? "))


if(genero == 1){
    conta = (61.1 * altura) - 44.7
    alert(" seu peso ideal é: " + conta)
}else if(genero == 2) {
    conta = (72.7 * altura)- 58
    alert(" seu peso ideal é: " + conta)
}