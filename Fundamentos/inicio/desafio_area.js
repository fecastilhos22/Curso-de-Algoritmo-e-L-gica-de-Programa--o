// PI = 3.141592 por uma questão de boas práticas o que está escrito em letras maiuscúlas são constantes
// PI * raio * raio
//console.log(Math.PI); valor de PI com precisão

let raio = 10;
const PI = 3.141592;
let area = PI * raio * raio;

console.log("O valor da área é " + area + "m2.");

area = Math.PI * raio * raio;
console.log("O valor da área é " + area + "m2.");
