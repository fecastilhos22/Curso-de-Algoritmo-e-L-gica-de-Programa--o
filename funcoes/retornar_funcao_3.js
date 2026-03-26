function somar1(a, b){
    return a + b;

}

console.log(somar1(5, 4));

function somar2(a){ //somar2 recebe a (nesse caso um unico parametro)
    return function(b){//só após executar a  function b 
        return a + b //que retorna a + b
    }
}
console.log(somar2(5)(4));//4 e o segundo paramentro (b)
//um exemplo pratica para esse exercicio é quando tu vai fazer algo com imposto e precisa colocar os calculos "separados"

const somarMais10 = somar2(10);

console.log(somarMais10(5));
console.log(somarMais10(15));