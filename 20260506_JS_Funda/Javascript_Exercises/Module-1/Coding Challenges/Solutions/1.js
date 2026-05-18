// 1. Enumerate all datatypes you have learned. Create a variable for each
// datatype. Console log the results. For bonus points, research template
// literals using devdocs.io, and print all your variables with just one
// console log in a multiline string.

let sum = (a, b) => a + b;
let dict = {
    'apple': 'apfel',
    'egg': 'ei',
};
let list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let mySet = new Set(list);
let myMap = new Map([['apple', 'apfel'], ['egg', 'ei']]);

let num = 5;
let str = 'abc';
let bool = false;
let undef = dict['non-existing-key'];  // usually we don't write this at all in the code
let nullValue = null;
let bigNum = 5n;
let mySymbol = Symbol('test');

console.log(`
    Reference datatypes:
    ${sum}: ${typeof sum}
    ${dict}: ${typeof dict} (is Array? ${Array.isArray(dict)})
    ${list}: ${typeof list} (is Array? ${Array.isArray(list)})
    ${mySet}: ${typeof mySet}
    ${myMap}: ${typeof myMap}

    Value datatypes:
    ${num}: ${typeof num}
    ${str}: ${typeof str}
    ${bool}: ${typeof bool}
    ${undef}: ${typeof undef}
    ${nullValue}: ${typeof nullValue}
    ${bigNum}: ${typeof bigNum}
    ${String(mySymbol)}: ${typeof mySymbol}
`);