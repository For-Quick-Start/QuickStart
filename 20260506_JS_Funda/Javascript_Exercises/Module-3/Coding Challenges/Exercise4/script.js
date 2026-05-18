// 4. Create a function that generates an HTML table from a 3x3 array and 
// returns the generated table HTML markup as a string.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function generateTable(matrix) {
    let markup = '<table><tbody>';

    for (let row of matrix) {
        markup += '<tr>';
        for (let cell of row) {
            markup += `<td>${cell}</td>`;
        }
        markup += '</tr>';
    }

    markup += '</tbody></table>';
    return markup;
}

console.log(generateTable(matrix));

let container = document.querySelector('.js-container');
container.innerHTML = generateTable(matrix);