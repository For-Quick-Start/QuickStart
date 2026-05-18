// 1. Console log all numbers 
// a.) from 0 to 9 (inclusive).

console.log('zero to nine');
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// b.) from 1 to 10 (inclusive).

console.log('one to ten');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// c.) from 9 to 0 (inclusive).
console.log('nine-to-zero');
for (let i = 9; i >= 0; i--) {
    console.log(i);
}


// d.) from 10 to 1 (inclusive).
console.log('ten to one');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// e.) that are even between 1 and 25. Instead of the odd numbers, write "odd".
console.log('1 to 25 even/odd');
for (let i = 1; i <= 25; i++) {
    if (i % 2 === 1) {
        console.log('odd');
    } else {
        console.log(i);
    }
}