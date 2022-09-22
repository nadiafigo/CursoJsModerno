//Arreglos

let numeros = [1,2,3,4,5,6,7,8,9,10]
// imprimir los elementos de un arreglo de números
for(let i=0; i<numeros.length; i++) {
    // console.log(numeros[i]);
}

// imprimir números pares de un arreglo de números
for(let i=0; i<numeros.length; i++) {
    let divisionPar = numeros[i] % 2;
    if(divisionPar === 0) {
        // console.log(numeros[i]);
    }
}

//Devolver la suma total de los números en un arreglo de números
// let arregloSuma = 0;
// for(let i=0; i<numeros.length; i++) {
//     // let arregloSuma = numeros[i];
//     arregloSuma = arregloSuma + numeros[i];
//     console.log(arregloSuma);
// }

//Devolver la suma total de los números impares en un arreglo de números
let arregloSuma = 0;
for(let i=0; i<numeros.length; i++) {
    let divisionImpar = numeros[i] % 2;
    if(divisionImpar === 1) {
        arregloSuma = arregloSuma + numeros[i];
    }
}
// console.log(arregloSuma);

//Devolver la posición de un número a buscar en un arreglo de números, si no existe devolver -1
// let numberToSearch = 11;
// for(let i=0; i<numeros.length; i++) {
//     if(numeros[i] === numberToSearch) {
//         console.log(i);
//         break
//     } else if(i+1 >= numeros.length) {
//         console.log(-1);
//     }
// }

//Imprimir caracteres de una cadena con espacios entre cada letra
// let textToSpace = 'Erick';
// let spacing = '';
// for(let i=0; i<textToSpace.length; i++) {
//     spacing = spacing + textToSpace[i] + ' ';
// }
// console.log(spacing);

//Imprimir solo vocales de un string
let textToVocals = 'Erick Suarez Zavala';
let vocals = '';
for(let i=0; i<textToVocals.length; i++) {
    let minusculas = textToVocals[i].toLowerCase();
    if(minusculas === 'a'){
        vocals = vocals + textToVocals[i];
    } else if(minusculas === 'i'){
        vocals = vocals + textToVocals[i];
    } else if(minusculas === 'e'){
        vocals = vocals + textToVocals[i];
    } else if(minusculas === 'o'){
        vocals = vocals + textToVocals[i];
    } else if(minusculas === 'u'){
        vocals = vocals + textToVocals[i];
        
    } 
}
// console.log(vocals);

//Devolver el número de palabras de una oración
let oracionConteo = "Soy Erick y estoy bien guapo y soy bien inteligente";
let espacio = ' ';
for(let i=0; i<oracionConteo.length; i++) {
    if(oracionConteo[i] === ' ') {
        espacio++;
    } else if (i+1 >= oracionConteo.length) {
        espacio = espacio+1;
    }
}
// console.log(espacio);

//Convertir las mayúsculas en minúsculas y minusculas en mayúsculas
let minusToMayus = 'Hola y adios';
let mayusToMinus = '';
for(let i=0; i<minusToMayus.length; i++) {
    let character = minusToMayus[i];
     if(character === character.toLowerCase()) {
        mayusToMinus = mayusToMinus + character.toUpperCase();
    } else if(character === character.toUpperCase()) {
        mayusToMinus = mayusToMinus + character.toLowerCase();
    }
}
// console.log(mayusToMinus);


//Saber si una palabra es palindromo
let esPalindromo = 'Ireri';
let palindromo = '';
for(let i=0; i<esPalindromo.length; i++) {
    let character = esPalindromo[i].toLowerCase();
    if(character == esPalindromo.length[i]) {
        console.log(true);
    }
}
let A = 'JOHN';
let B = 'JANE';
let C = '3DOES';

console.log(0.A+B+C-3);
