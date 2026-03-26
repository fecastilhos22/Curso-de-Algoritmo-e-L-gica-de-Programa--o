function retornaUmaFuncao(){
    return function(){
        return "Boa tarde !"
    }    
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());//chama para retonar a função anonima
console.log(retornaUmaFuncao()());//chama a função "interna" boa tarde