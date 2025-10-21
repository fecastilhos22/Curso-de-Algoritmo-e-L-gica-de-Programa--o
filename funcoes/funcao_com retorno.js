function sempreRetornaUm() {
    return 1; // para retornar valores fixos
}

function textoOuNumero(retornaTexto) {
    // return retornaTexto ? "Sou um texto!" : 123;
    if(retornaTexto) {
        return "Sou um texto!";
    }
    
    return 123;
}

let valor = sempreRetornaUm() + 999;
console.log(valor); // para retornar valores fixos

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));