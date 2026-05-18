// Ask the user to enter a number and print its parity ("odd", "even", "N/A")

let value = prompt('Enter an integer');
let intValue = Number.parseInt(value);

if ( Number.isNaN(intValue) ) {
    console.log('N/A');
} else if ( intValue % 2 === 1 ) {
    console.log('odd');
} else {
    console.log('even');
} 

if (intValue >= 2) {
    console.log('At least 2');
}
