// Ask the user to enter a name.
// If the name is empty, print: empty
// If the name is 1-8 characters long, print "short name"
// Otherwise, print "long name"

let firstName = prompt('Enter a name');

if (firstName === null && firstName.length === 0) {
    console.log('empty');
} else if (firstName.length <= 8) {
    console.log('short name');
} else {
    console.log('long name');
}