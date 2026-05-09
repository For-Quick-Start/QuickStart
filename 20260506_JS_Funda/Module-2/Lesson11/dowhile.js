//first execute statement(s), then check the condition

let userInput = null;

do {
    userInput = prompt("Enter a value:");
} while (!(userInput !== null && userInput.length > 0))

console.log(userInput + ' is valid');

