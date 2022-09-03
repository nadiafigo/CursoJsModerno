
// DEFINICIÓN DE FUNCIONES
function saludar( nombre ) {
    // console.log(arguments)
    // console.log('Hola ' + nombre);
    return [1,2,3];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return')
}

const retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Rica');
console.log(retornoDeSaludar);

// definición de FUNCIONES ANONIMAS:
const saludar2 = function ( nombre ) {
    console.log('Hola ' + nombre);
}

// saludar2('Nadia');

// FUNCIONES DE FLECHA
const saludarFlecha = () => {
    console.log('Hola flecha')
}

// saludarFlecha();

const saludarFlecha2 = nombre => {
    console.log('Hola ' + nombre)
}

// saludarFlecha2('Beatriz');




function sumar(a, b) {
    return a+b;
}

// const sumar2 = (a, b) => {
//     return a+b;
// }

const sumar2 = (a, b) => a+b;



function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());