let list = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// let i = 0;
// // if (i < list.length) {
// //     console.log(list[i]);
// //     i += i;
// // }
// while (i < list.length) {
//     console.log(list[i]);
//     i += 1;
// }

// for (init; condition; increment) {statements}
for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

// for..in loop
for (let i in list){
    console.log(list[i]);
}

// for..of loop
for (let day of list){
    console.log(day);
}

