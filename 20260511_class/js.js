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

function checkage(age) {

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


function howyadoin(state) {
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