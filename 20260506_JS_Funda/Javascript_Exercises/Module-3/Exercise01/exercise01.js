// 3. Extend exercise 2. Create an algorithm that guesses the 
// number entered by the user optimally such that we always exclude at least 
// half of the available numbers in the domain 1 to 100. 
// In each step, console log the guess and console log whether the number to be 
// guessed is lower, higher, or equal to the guess.
// Example: suppose the user entered 35. The computer's guesses: 
// 50 lower (remaining interval: 1 to 49)
// 25 higher (remaining interval: 26 to 49)
// 38 lower (remaining interval: 26 to 38)
// 31 higher (remaining interval: 32 to 38)
// 35 match

function getInput() {
    let intValue = null;
    do {
        let value = prompt('Enter a number between 1 and 100');
        intValue = Number.parseInt(value);
    } while (
        Number.isNaN(intValue) ||
        typeof intValue !== 'number' ||
        intValue < 1 || 
        intValue > 100
    );
    return intValue;
}

function printResult(mid, direction, minValue, maxValue) {
    console.log( 
        `${mid} ${direction} (interval: ${minValue} - ${maxValue})` 
    );
}

function guessTheNumber() {
    let intValue = getInput();
    
    let minValue = 1;
    let maxValue = 100;
    
    while (minValue < maxValue) {
        let midpoint = Math.floor( (minValue + maxValue) / 2 );
        if (intValue === midpoint) {
            minValue = maxValue = midpoint;
        } else if (intValue < midpoint) {
            maxValue = midpoint - 1;
            printResult(midpoint, 'lower', minValue, maxValue);
        } else {
            minValue = midpoint + 1;
            printResult(midpoint, 'higher', minValue, maxValue);
        }
    }
    
    console.log( `${minValue} match` );
}

