// Ask the user to enter a name
// If the name is empty, print empty
// If the name is 1-8 chars long, print short name
// Otherwise print long name

let thisName = prompt('Enter a name');

if (thisName === null || thisName.length < 1) {
    console.log('empty');
} else if (thisName.length < 9) {
    console.log("short name");
} else {
    console.log("long name");
}


