// 1 (Lesson12) 
// Create a function that creates the nth fibonacci number based on the definition
//     fib(0) is 0
//     fib(1) is 1
//     fib(n) is fib(n-1) + fib(n-2) for n>=2


function fib(n) {
    if (n === 0) {
        console.log('not calling fib',n);
        return 0;
    } else if (n === 1) {
        console.log('not calling fib',n);
        return 1;
    } else {
        console.log('              n is',n);
        return fib(n-1) + fib(n-2);
    }
}

console.log(fib(4));


