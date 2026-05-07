console.log("Hello JavaScript");
console.log("Kent");
alert("Welcome to JavaScript");

//variables

let name = "Kent";
let age = 1019;
console.log(name);
console.log(age);


let str1 = "string1";
let str2 = "string2";
let num1 = 1;
let num2 = 2;

console.log(`
    str1
    str2
    num1
    num2
`);

function greeet() {
    alert("hello smurfs");
    console.log("the button was clicked");
}

// greeet();

function submit() {
    console.log("form was submitted");
    alert("form has been submitted");
}

// function displayInput(textValue) {
//     const inputElement = document.getElementById("userInput");
//     textValue = inputElement.value;
//     alert("You entered: " + textValue);
// }


function changeParagraphText(newText) {
    const paragraph = document.getElementById("changeit");
    paragraph.textContent = newText;
}



