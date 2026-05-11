function factorial(n) {
    if (n === 0) return 1;
    // unreachable code if n === 0
    return n * factorial(n-1);
}

let factArrow = n => n === 0 ? 1 : n * factorial(n-1);

console.log(factorial(10));
console.log(factArrow(10));
console.log(10*9*8*7*6*5*4*3*2*1);



