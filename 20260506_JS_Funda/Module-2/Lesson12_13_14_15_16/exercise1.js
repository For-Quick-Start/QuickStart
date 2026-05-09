function generateRange(start, end, step = 1) {
    const numbers = [];
    if (step === 0) {
        console.log("infinite loop detected - enter non-zero integer for step");
    } else if (step < 0) {
        for (let i = start; i > end; i += step) {
            // console.log("i is",i);
            numbers.push(i)
        }
    } else {
        for (let i = start; i < end; i += step) {
            // console.log("i is",i);
            numbers.push(i);
        }
    }
    return numbers;
}

function dropOdd(start, end, step = 1) {
    const oddArray = [];
    const initArray = generateRange(start, end, step);
    for (i in initArray) {
        if (initArray[i] % 2 === 1) {
            oddArray.push("odd");
        } else {
            oddArray.push(initArray[i]);
        }
    }
    return oddArray;
}

console.log(generateRange(0, 10));
console.log(generateRange(1, 11));
console.log(generateRange(9, -1, -1));
console.log(generateRange(10, 0, -1));
console.log(dropOdd(1, 25));


