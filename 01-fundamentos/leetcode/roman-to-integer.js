let rom;

const romanToInt = ( rom ) => {
    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;

    let decimal = 0;

    for(let i=0; i <= 15 ; i++) {
        
        switch(rom.charAt(i)) {
            case 'I':
                decimal = decimal + I;
                break
            case 'V':
                decimal = decimal + V;
                break
            case 'X':
                decimal = decimal + X;
                break
            case 'L':
                decimal = decimal + L;
                break
            case 'C':
                decimal = decimal + C;
                break
            case 'D':
                decimal = decimal + D;
                break
            case 'M':
                decimal = decimal + M;
                break
            default:
                console.warn('Not a roman number', rom);
        }
    
    }
    console.log(decimal);
}


// for(let i=0; i<=15; i++) {
//     romano = 'I' ? I :
//     romano = 'V' ? V :
//     romano = 'X' ? X :
//     romano = 'L' ? L :
//     romano = 'C' ? C :
//     romano = 'D' ? D :
//     romano = 'M' ? M : 'not a roman number';
//     break
// }