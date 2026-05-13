function getMove() {
    const value = Math.random();
    return (
        value < 0.2 ? 'X':
        value < 0.4 ? 'O':
        null
    );
}

function renderRow(inputRow) {
    let row = '<tr class="tic-tac-toe-row">';
    for (let cell of inputRow) {
        row += `<td class="tic-tac-toe-cell">${cell ?? ''}</td>`
    }
    row += '</tr>';
    return row;
}

function renderBoard(board) {
    let html = '<table class="tic-tac-toe-board"><tbody>';
    for (let row of board) {
        html += renderRow(row);
    }

    html += '</table></tbody>';
    return html;
}

const board = new Array(20).fill(null).map(
    () => new Array(20).fill(null).map(getMove)
);

const container = document.querySelector('.js-container');

let HTML = renderBoard(board);

container.innerHTML = HTML;

// console.table(board);





