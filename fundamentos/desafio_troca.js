let a = 7;
let b = 94;

// depois troca a = 94 e b = 7

let temp = a;
a = b ;
b = temp;

[a,b] = [b,a] //forma de alterar um valor em javascript

console.log(a);
console.log(b);