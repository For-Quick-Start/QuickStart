// 3 (Lesson14)
// Create a function that generates an HTML unordered list from an array and
// and returns the generated unordered list HTML markup as a string

let array = ['Monday','Tuesday','Wednesday'];

function toulMarkup(list) {
    let html = '<ul>';
    for (let item of list) {
        html += `<li>${item}</li>`;
    }
    html += '</ul>';
    return html;
}

console.log(toulMarkup(array));

let container = document.querySelector('.jslist');
container.innerHTML = toulMarkup(array);



