// 1. Destructuring in functions
let person = {
    first: 'First', 
    last: 'Last', 
    id: '123456AB',
}

function logName({ first, last }) {
    console.log(`${first} ${last}`);
}

logName(person);

// 2. Rest parameters: 
// Write a function that returns the sum of its arguments.
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

// let arr = [1, 2, 5];
// ...arr --> 1, 2, 5

console.log( 'expectation: 8. result:', sum(1, 2, 5) );

let argumentValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( 'expectation: 55. result:', sum(0, ...argumentValues, 0));

function sumRecursive(first, ...rest) {
    if (typeof first === 'undefined') return 0;
    return first + sumRecursive(...rest);
}

// let arr = [1, 2, 5];
// ...arr --> 1, 2, 5

console.log( 'expectation: 8. result:', sumRecursive(1, 2, 5) );
console.log( 'expectation: 55. result:', sumRecursive(...argumentValues));