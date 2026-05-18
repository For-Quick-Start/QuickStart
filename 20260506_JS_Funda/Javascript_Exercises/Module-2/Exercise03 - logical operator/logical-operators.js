console.log('logical and operator');
console.log('false && false -->', false && false);
console.log('false && true  -->', false && true);
console.log(' true && false -->',  true && false);
console.log(' true && true  -->',  true && true);

console.log('logical or operator');
console.log('false || false -->', false || false);
console.log('false || true  -->', false || true);
console.log(' true || false -->',  true || false);
console.log(' true || true  -->',  true || true);

console.log('negation');
console.log('!true -->', !true);
console.log('!false -->', !false);
console.log('!!true -->', !!true);

console.log('exclusive or operation');
let a = true;
let b = true; 
let xor = (a, b) => (!a && b) || (a && !b);
let axorb = xor(a, b);
console.log('a XOR b', axorb);