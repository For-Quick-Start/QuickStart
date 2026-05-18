/*
    0! = 1 
    n! = n * (n-1)!
*/
function factorial(n) {
    if (n === 0) return 1;
    // unreachable code for n = 0.
    return n * factorial(n - 1);
}

let factArrow = n => n === 0 ? 1 : n * factorial(n - 1);

console.log('factorial(5)', factorial(5));
console.log('factArrow(5)', factArrow(5));
console.log('5*4*3*2', 5*4*3*2);