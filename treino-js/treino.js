//1.Variáveis
let nome = "Fernanda";
let idade = 39;

console.log("Olá ", nome, "vc tem ", idade ,"anos!");

//2.Condicoes(if/else)
console.log(nome, ", qual a sua idade?")    
console.log(nome, "vc tem ", idade ,"anos!");// deveria ter pedido a entrada dos dados e imprimir o que usuário digitar??

if(idade >= 18){
    console.log('Pode dirigir!')
} else
    console.log('Não pode dirigir');

//3. Laço
let numero = 1;

while (numero <= 10) {
    console.log(numero);
    numero++;
}