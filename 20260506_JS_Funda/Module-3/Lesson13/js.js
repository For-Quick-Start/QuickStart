// 2 (Lesson13)
// Create a function that accepts an array and increments each value in the array by 1
// Assume input only contains numbers
// print the return value of the array and the original array to the console
// make sure the original array stays intact


function incr(arr) {
    arr = [...arr];
    for (let i in arr) {
        arr[i]++;
    }
    return arr;
}

let myArray = [1,2,3,4,5,6,7,8,9];

let returnArray = incr(myArray);

console.log(`   original array: ${myArray}`);
console.log(`incremented array: ${returnArray}`);


