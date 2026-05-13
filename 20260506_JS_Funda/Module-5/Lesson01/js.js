let counterValue = 0;

function renderCounterValue() {
    const container = document.querySelector('.js-container');
    container.innerHTML = counterValue;
}

function incrementCounter() {
    counterValue++;
    renderCounterValue();
}

function resetCounter() {
    counterValue = 0;
    renderCounterValue();
}

const button = document.querySelector('.js-button');
button.addEventListener('click', incrementCounter);
const resetButton = document.querySelector('.js-button-reset');
resetButton.addEventListener('click', resetCounter);



renderCounterValue();

