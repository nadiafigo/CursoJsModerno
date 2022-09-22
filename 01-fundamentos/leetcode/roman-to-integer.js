// let rom;

// const romanToInt = ( rom ) => {
//     const I = 1;
//     const V = 5;
//     const X = 10;
//     const L = 50;
//     const C = 100;
//     const D = 500;
//     const M = 1000;

//     let decimal = 0;

//     for(let i=0; i <= 15 ; i++) {
        
//         switch(rom.charAt(i)) {
//             case 'I':
//                 decimal = decimal + I;
//                 break
//             case 'V':
//                 decimal = decimal + V;
//                 break
//             case 'X':
//                 decimal = decimal + X;
//                 break
//             case 'L':
//                 decimal = decimal + L;
//                 break
//             case 'C':
//                 decimal = decimal + C;
//                 break
//             case 'D':
//                 decimal = decimal + D;
//                 break
//             case 'M':
//                 decimal = decimal + M;
//                 break
//             default:
//                 console.warn('Not a roman number', rom);
//         }
    
//     }
//     console.log(decimal);
// }


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

//Solución foro ayuda.es

const romanToInt = (str1) => {
    if(str1 == null) return -1;
    let num = char_to_int(str1.charAt(0));
    let pre, curr;

    for(let i=1; i<str1.length; i++) {
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i-1));
        if(curr<= pre) {
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }

    return num;
}

function char_to_int(c) {
    switch(c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

console.log(romanToInt('CMXLV'))