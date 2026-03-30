const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = '';

// foreach ele percorre todo o array(cada um dos elementos) com o código de forma mais "enxuta"
for (let nota of notas){// for of acessa os valores
    //console.log(notas);
    valores += nota + ' ';
}

console.log(valores);//concatena os valores das notas

let indices = ' ';

for(let indice in notas){//for in acessa os indices
    indices += indice + ' ';
}
 console.log(indices);
 
// no foreach é mais automático percorrer o array