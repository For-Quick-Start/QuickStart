// 2. Create a function that accepts an array and increments each value in the
// array by 1. You can assume the input only contains numbers. Then print the
// return value of the array and the original array to the console. Make sure 
// the original array stays intact. 

let arr = [1, 2, 5];

function incrementValues(list) {
    list = [...list]; // shallow copy - outside world stays intact.
    for (let i in list) {
        list[i] += 1;
    }
    console.log('inside', list);
}

incrementValues(arr);
console.log('outside', arr);