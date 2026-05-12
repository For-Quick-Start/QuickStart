// let age = 37;

// if (age >= 25) {
//     console.log(`${age} is old enough to rent a car`);
// } else {
//     console.log(`${age} is NOT old enough to rent a car`);
// }

// let password = '1234';

// if (password === '1234') {
//     alert('successful authentication');
// } else {
//     alert('authentication failure');
// }

function checkage() {

    let thisage = Number.parseInt(document.getElementById("age").value);
    if (thisage >= 25) {
        alert(`${thisage} is old enough to rent a car`);
    } else {
        alert(`${thisage} is NOT old enough to rent a car`);
    }
}

function show() {
    //do nothing
}


function howyadoin() {
    let state = document.getElementById("how").value;
    console.log(state);
    let response = '';
    switch(state) {
        case 'fine':
            response = "Thats good";
            break;
        case 'terrible':
            response = "Sorry to ear that";
            break;
        default:
            response = "Oh, OK";
    }
    alert(response);
}

let marks = 85;
if (marks > 100) {
    console.log("A mark that high isn't possible");
} else if (marks >= 90 && marks <= 100) {
    console.log("Your grade is 'A'");
} else if (marks >= 80 && marks < 90) {
    console.log("Your grade is 'B'");
} else if (marks >= 70 && marks < 80) {
    console.log("Your grade is 'C'");
} else if (marks >= 60 && marks < 70) {
    console.log("Your grade is 'D'");
} else {
    console.log("Your grade is 'F'");
};

for (let i = 1; i < 9; i++) {
    console.log(i);
}



