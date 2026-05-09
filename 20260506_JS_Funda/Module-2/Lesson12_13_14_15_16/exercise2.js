let secretValue = Math.floor(Math.random()*100);
console.log(secretValue);

let userInput = null;

do {
    userInput = prompt("Enter a guess:");
    // console.log("***********");
    // console.log(userInput === null);
    // console.log(userInput);
    // console.log(Number.parseInt(userInput) === NaN);
    // console.log(Number.parseInt(userInput));
    // console.log(userInput.length === 0);
    // console.log(userInput.length);
    // console.log(Number.parseInt(userInput) !== secretValue);
    // console.log(Number.parseInt(userInput));
} while (
    (userInput === null || 
        Number.isNaN(Number.parseInt(userInput)) || 
        userInput.length === 0) || 
        Number.parseInt(userInput) !== secretValue
    );

console.log("You guessed it. The secretValue is", secretValue);





