function executar (fn, n1 = 10,n2 = 10){
    if (typeof fn === "function"){
        //console.log (fn(50,90));//fn para fins didaticos e typeof para verificar se é uma função e se deixar a 
        //a função sem parametros console.log(fn()) dará NaN.50,90 exemplo com número fixo
        console.log(n1,n2)//números digitados

    }
}

function somar(a , b){
    return a + b;
}
function subtrair(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}

executar(somar, 50, 90);
executar(subtrair, 50, 90);//dará o resultado, pois via ignorar que a uma função está sem parametro(quanto estava sem parametros no fn acima)
executar(multiplicar, 50, 90);
executar(somar);
//dependendo como passar os parametros ele por mostrar indefined ou NaN