// 4. Think of a number between 1 and 100, but don't tell this to the computer.
// Once the computer guesses a number based on the rules seen in exercise 3,
// tell the computer if your number is greater than, less than, or equal to the
// guess of the computer. The computer continues guessing until it guesses your
// number correctly.

let minValue = 1;
let maxValue = 100;

while (minValue < maxValue) {
    let midpoint = Math.floor( (minValue + maxValue) / 2 );
    let result = null;
    do {
        result = prompt(`
            Guess: ${midpoint}. Type h for higher, l for lower, m for match`
        );
    } while (result !== 'h' && result != 'l' && result != 'm');

    switch (result) {
        case 'h':
            minValue = midpoint + 1;
            console.log( 
                `${midpoint} higher (interval: ${minValue} to ${maxValue})` 
            );    
            break;        
        case 'l':
            maxValue = midpoint - 1;
            console.log( 
                `${midpoint} lower (interval: ${minValue} to ${maxValue})` 
            );  
            break;          
        case 'm':
            minValue = maxValue = midpoint;
    }
}

console.log( `${minValue} match` );