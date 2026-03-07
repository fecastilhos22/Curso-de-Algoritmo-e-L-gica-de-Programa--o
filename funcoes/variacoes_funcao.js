// #1: Função COM Parâmetros e COM Retorno
function somar(a, b) {
    return a + b;
}
//somar (30,56); não mostra o resultado no terminal, mas executa a função

let resultado = somar(30, 56);//váriavel recebe o valor executado pela função
console.log(resultado)//imprime a variável como resultado
console.log(somar(30,56));//imprime a função com os valores
console.log(`O resultado final é: ${resultado}`);//concatenando
console.log(`O resultado final é: ${somar(30, 56)}`);

// #2: Função COM Parâmetros e SEM Retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3: Função SEM Parâmetros e COM Retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4: Função SEM Parâmetros e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();
