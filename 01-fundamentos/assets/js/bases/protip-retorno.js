const crearPersona = (nombre, apellido) => ({nombre, apellido})

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

function imprimerArgumentos() {
    console.log(arguments);
}

const imprimerArgumentos2 = ( edad, ...args ) => {
    // console.log( edad, args );
    return args
}

const [casasdo, vivo, nombre, saludo] = imprimerArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casasdo, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Fernando', 'Herrera');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    ultimaPelicula: 'Infinity War',
};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }


const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);