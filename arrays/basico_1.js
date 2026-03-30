// indice       0    1   2    3    4    5 
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8 ];

console.log(notas);//acessa todas as notas
console.log(notas[3]);//acessa o indice 3
console.log(notas[5]);//acessa o indice 5
console.log(notas[6]);//o resultado sera undefined por não existir

notas[4] = 8.7; //mesmo sendo uma constante em array permite alterar o valor do elemento, porque vc só altera os valores internos
//o que não pode é alterar o tipo de dado(variavel nota por ser uma constante
//ou declarar outra variavel nota nesse exemplo)

console.log(notas);