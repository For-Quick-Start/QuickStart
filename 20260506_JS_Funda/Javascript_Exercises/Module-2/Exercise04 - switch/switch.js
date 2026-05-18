let secretValue = Math.floor(Math.random() * 5);

// Solution 1: if-else
if (secretValue === 0) {
    console.log('zero');
} else if (secretValue === 1) {
    console.log('one');
} else if (secretValue === 2) {
    console.log('two');
} else if (secretValue === 3) {
    console.log('three');
} else {
    console.log('four');
}

// Solution 2: switch
switch (secretValue) {
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.log('four');
}

// Solution 3: using a dictionary
let dict = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
}
console.log(dict[secretValue]);
