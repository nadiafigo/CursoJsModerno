(() => {
    'use strict'

    let deck            = [];
    const   tipos         = ['C', 'D', 'H', 'S'],
            especiales    = ['A', 'J', 'Q', 'K'];

    let puntosJugador = 0,
        puntosComputadora = 0;

    // REFERENCIAS HTML
    const   btnPedir      = document.querySelector('#btnPedir'),
            btnDetener    = document.querySelector('#btnDetener'),
            btnNuevo      = document.querySelector('#btnNuevo');

    const divCartasJugador      = document.querySelector('#jugador-cartas'),
          divCartasComputadora  = document.querySelector('#computadora-cartas'),
          puntosHTML = document.querySelectorAll('small');



    // Esta función inicializa el juego
    const inicializarJuego = () => {
        deck = crearDeck();
    }

    // Esta función crea un nuevo deck mezclado
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck);
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () => {

        if(deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    // Esta función sirve para obtener el valor de la carta
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length -1);
        return (isNaN(valor)) ? 
                (valor === 'A') ? 11:10
                : valor * 1;
    }


    // TURNO COMPUTADORA
    const turnoComputadora = (puntosMinimos) => {
        do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21) {
            break;
        }

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));


        setTimeout(() => {
            if(puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(');
            } else if( puntosMinimos > 21){
                alert('PERDISTE :(');
            } else if(puntosComputadora > 21){
                alert('GANASTE! :D');
            } else {
                alert('PERDISTE :(')
            }
        }, 100);
    }


    // -----------------E V E N T O S--------------//
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();

        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
            // alert('LO SIENTO, PERDISTE');
        } else if (puntosJugador === 21) {
            // alert('GANASTE');
            turnoComputadora(puntosJugador);
        }
    });


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    });


    btnNuevo.addEventListener('click', () => {
        console.clear();
        inicializarJuego();
        // deck = [];
        // deck = crearDeck();

        divCartasJugador.innerHTML = '';
        divCartasComputadora.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
    });


}) ();