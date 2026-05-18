// 1. Create a function that calculates the nth fibonacci number based on the
// definition.
// fib(0) is 0.
// fib(1) is 1.
// fib(n) is fib(n-1) + fib(n-2) for n>=2.

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n-1) + fib(n-2);
}

let fibArrow = n =>
    n === 0 ? 0 :
    n === 1 ? 1 :
    fib(n-1) + fib(n-2);

console.log(fib(7));
console.log(fibArrow(7));
console.log(fib(15));
console.log(fibArrow(15));