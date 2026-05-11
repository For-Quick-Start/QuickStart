// function logName(name) {
//     let {first, last} = name;
//     // let {first: first, last: last} = name;
//     // let first = name.first;
//     // let last = name.last;
//     console.log(`${first} ${last}`);
// }

function logName({first,last}) {
    console.log(`${first} ${last}`);
}

let name = {
    first: 'Jack',
    last: 'Spratt',
};

logName(name);



function sumem(...args) {
    let retval = 0;
    // console.log(args);
    for (let arg of args) {
        retval += arg;
    }
    return retval;
}

function sumemRecursive(first, ...rest) {
    if (typeof first === 'undefined') return 0;
    console.log(`first is ${first}`);
    return first + sumemRecursive(...rest);
}

let theinput = [1,2,3,4,5,6,7,8,9];
let thesum = sumem(...theinput);
console.log(thesum);
let anothersum = sumem(10, ...theinput);
console.log(anothersum);
let thirdsum = sumem(10, ...theinput, 10);
console.log(thirdsum);

console.log(sumemRecursive(10, ...theinput, 10, 10, 10, 10, 5));




