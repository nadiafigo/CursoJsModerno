/** 
 * C = Clubs (Tréboles)
 * D = Diamonds (Diamantes)
 * H = Hearts (Corazones)
 * S = Swords (Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


// Esta función crea un nuevo deck mezclado
const crearDeck = () => {
    
    for(let i = 2; i<=10; i++) {
        for(let tipo of tipos) {
            deck.push(i+tipo);
        }
    }

    for(let tipo of tipos) {
        for(let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// Esta función me permite tomar una carta

const pedirCarta = () => {
    // for(let carta of deck) {
    //     carta = _.shuffle(deck);
    // }


    console.log(deck)
    // console.log(carta); //carta de la baraja y debe dejar de existir
    return '2C';
}

pedirCarta();