let list = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];

console.log('while loop:');
let i = 0;
while ( i < list.length ) {
    console.log(list[i]);
    i = i + 1;
}

console.log('for loop:');
// for (initialization; condition; increment) { body_statements; }
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

console.log('for..in loop'); 
for (let i in list) {
    console.log(list[i]);
}

console.log('for..of loop');
for (let day of list) {
    console.log(day);
}

