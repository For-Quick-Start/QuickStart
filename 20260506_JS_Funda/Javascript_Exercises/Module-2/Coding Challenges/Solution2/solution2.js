// 2. Ask the user to enter an integer between 1 and 100. Validate your input and
// repeat asking the user for this input until the user succeeds.

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

console.log('The input is valid', intValue);