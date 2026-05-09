let userInput = null;
do {
    userInput = prompt("Enter the sceret value (from 1 to 100):");
} while (
    userInput === null || 
    Number.isNaN(Number.parseInt(userInput)) || 
    userInput.length === 0 || 
    Number.parseInt(userInput) < 1 || 
    Number.parseInt(userInput) > 100
);

const secretValue = Number.parseInt(userInput);
// const secretValue = 35;
console.log(secretValue);

let spanLower = 1;
let spanHigher = 100;
let guess = Math.floor(Math.random()*100);
console.log("initial guess is",guess);
console.log(guess !== secretValue);

while (guess !== secretValue) {
    console.log("**************************");
    console.log("  lower is",spanLower,"  higher is",spanHigher,"guess is",guess);
    if (guess > secretValue) {
        console.log("    guess was too high");
        spanHigher = --guess;
        console.log("    higher is now", spanHigher);
        console.log("    lower is still", spanLower);
        guess = spanLower + Math.floor((spanHigher-spanLower)/2);
        console.log("        next guess will be",guess);
    } else {
        console.log("    guess was too low");
        spanLower = ++guess;
        console.log("    higher is still", spanHigher);
        console.log("    lower is now", spanLower);
        guess = spanLower + Math.floor((spanHigher-spanLower)/2);
        console.log("        next guess will be",guess);
    }
}

console.log("****************************************************");
console.log("***   Found the number", guess, "=", secretValue);
console.log("****************************************************");






