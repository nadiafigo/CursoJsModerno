let a = 5;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10')
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({hoy})
console.log({dia})

if (dia === 0 ) {
    console.log('Es Domingo');
} else if (dia === 1) {
    console.log('No es Domingo');
}


// Sin usar IF ELSE, o Switch, solo objetos

dia = 1;

//Solución Profesor, OBJETOS 
const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}



//Solución NADIA
// diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diaLetras[dia] || 'Número de día no válido');
