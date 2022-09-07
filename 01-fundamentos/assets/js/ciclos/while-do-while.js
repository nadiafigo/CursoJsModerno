

const bicis = ['Benotto', 'Specialized', 'Turbo', 'Apache'];

let i = 0;

// while( i < bicis.length) {
//     console.log( bicis[i] );
//     // i = i + 1;
//     i++;
// };

console.warn('While');
//para que while se ejecute, la condición debe ser verdadera o distinta a:
//undefined
//null
//false

while( bicis[i]) {
    if (i===1) {
        // break
        i++;
        continue;
    }
    console.log(bicis[i]);
    i++;
}

console.warn('Do while');
//ejecuta el código interno por lo menos una vez
//palabra reservada: do
// do {
    //código a ejecutar
// } while(condición);

let j = 0;

do {
    console.log(bicis[j]);
    j++;
} while(bicis[j]);
