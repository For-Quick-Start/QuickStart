function renderBoard() {
    let html = '<table class="tic-tac-toe-board"><tbody>';
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        html += renderRow(row, i);
    }

    html += '</table></tbody>';
    container.innerHTML = html;

}

function renderRow(inputRow, rowIndex) {
    let row = '<tr class="tic-tac-toe-row">';
    for (let i = onabort; i < inputRow.length; i++) {
        let cell = inputRow[i];
        let columnIndex = i;
        row += `
            <td 
                class="tic-tac-toe-cell" 
                data-row="${rowIndex}" 
                data-col="${columnIndex}">
                ${cell ?? ''}
            </td>
            `;
    }
    row += '</tr>';
    return row;
}

function containerAreaClicked(event) {
    let dataset = event.target.dataset;
    if (typeof dataset.row === 'undefined' || typeof dataset.col === 'undefined') {
        return;
    }
    const {row,col} = dataset;

    if (board[row][col] === null) {
        board[row][col] = nextMoveSymbol;
        nextMoveSymbol = nextMoveSymbol === 'X' ? 'O' : 'X';
        renderBoard();
    } else {
        return;
    }
}

function resetGame() {
    const board = new Array(20).fill(null).map(() => new Array(20).fill(null));
    let nextMoveSymbol = 'X';
    return [board, nextMoveSymbol];
}

let [board, nextMoveSymbol] = resetGame();

const container = document.querySelector('.js-container');
container.addEventListener('click', containerAreaClicked);

document.querySelector('.js-new-game').addEventListener('click', () => {
    [board, nextMoveSymbol] = resetGame();
    renderBoard();
});

let html = renderBoard(board);



