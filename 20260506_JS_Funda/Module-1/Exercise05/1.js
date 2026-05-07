// console.log(5, typeof 5);
// console.log(5.2, typeof 5.2);
// console.log('5', typeof '5');
// console.log(true, typeof true);
// console.log(false, typeof false);
// console.log(null, typeof null);
// console.log(undefined, typeof undefined);
// console.log(2n, typeof 2n);
// console.log(Symbol('key'), typeof Symbol('key'));

let sum = (a,b) => a+b;
let dict = {'a':1,'b':2};
let list = [1,2,3,4,5,6,7,8,9];
let mySet = new Set(list);
let myMap = new Map([['alpha','ALPHA'],['beta','BETA']]);

console.log(`
    
    Reference datatypes:
    ${sum} ${typeof sum}
    ${dict} ${typeof dict} (is Array? ${Array.isArray(dict)})
    ${list} ${typeof list} (is Array? ${Array.isArray(list)})
    ${mySet} ${typeof mySet}
    ${myMap} ${typeof myMap}
    
    Value datatypes:
    5 ${typeof 5}
    5.2 ${typeof 5.2}
    '5' ${typeof '5'}
    5n ${typeof 5n}
    true ${typeof true}
    false ${typeof false}
    null ${typeof null}
    undefined ${typeof undefined}
    Symbol('key') ${typeof Symbol('key')}
    `)

let booking = {
    room: 1,
    occupant: 'John Smith',
    startDate: new Date(2020, 3, 15, 15, 0, 0),
    endDate: new Date(2020, 3, 17, 11, 0, 0),
    price: 100
}

console.log(booking);

let daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

console.log(daysOfWeek);

let suits = [
    'hearts',
    'clubs',
    'diamonds',
    'spades',
]

console.log("length of suits is", suits.length);

let ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
]

console.log("length of ranks is", ranks.length);

let cards = [];

let points = 0;

for (let i = 0; i < suits.length; i++) {
    // console.log("    ", i, suits[i]);
    for (let j = 0; j < ranks.length; j++) {
        // console.log("        ", j, ranks[j]);
        if (ranks[j] === '2') {
            points = 2;
        } else if (ranks[j] === '3') {
            points = 3;
        } else if (ranks[j] === '4') {
            points = 4;
        } else if (ranks[j] === '5') {
            points = 5;
        } else if (ranks[j] === '6') {
            points = 6;
        } else if (ranks[j] === '7') {
            points = 7;
        } else if (ranks[j] === '8') {
            points = 8;
        } else if (ranks[j] === '9') {
            points = 9;
        } else if (ranks[j] === '10') {
            points = 10;
        } else if (ranks[j] === 'J') {
            points = 10;
        } else if (ranks[j] === 'Q') {
            points = 10;
        } else if (ranks[j] === 'K') {
            points = 10;
        } else if (ranks[j] === 'A') {
            points = 11;
        } else {
            points = 0
        }
        cards.push({'suit': suits[i], 'rank': ranks[j], 'points': points});
        // console.log("    ", i, suits[i], j, ranks[j], points)
    }
}

console.log(suits);
console.log(ranks);
console.log(cards);




