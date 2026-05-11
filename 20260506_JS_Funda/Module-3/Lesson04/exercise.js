// destructuring
let [first,second,third] = [{a:1},{a:2},{a:3}];
let a = 1;
let b = 2;
[a,b] = [b,a];

//spread operator
let myArray = [1,2,5];
console.log(myArray);
console.log(...myArray);
console.log(['a_string', ...myArray, ...myArray, 'another---string']);
console.log(...myArray);
// console.log(...myArray*3);

let fullName = {
    firstName: "Jack",
    lastName: "Peters",
}
let stats = {
    age: 99,
    format: 'rubberstamp',
}

let person = {
    ...fullName,
    ...stats,
}

console.log(person);


