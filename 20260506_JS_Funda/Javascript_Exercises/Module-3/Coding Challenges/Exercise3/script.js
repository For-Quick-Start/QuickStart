// 3. Create a function that generates an HTML unordered list from an array and
// returns the generated unordered list HTML markup as a string. 

let days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];

function toUlMarkup(list) {
    let html = '<ul>';
    for (let item of list) {
        html += `<li>${item}</li>`;
    }
    html += '</ul>';
    return html;
}

console.log(toUlMarkup(days));

// This was not the exercise, this is just demo 
let container = document.querySelector('.js-container');
container.innerHTML = toUlMarkup(days);