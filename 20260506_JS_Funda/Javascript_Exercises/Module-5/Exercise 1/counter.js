let counterValue = 0;

function renderCounterValue() {
    const container = document.querySelector('.js-container');
    container.innerHTML = counterValue;
}

function countCallback() {
    counterValue += 1;
    renderCounterValue();
}

function resetCallback() {
    counterValue = 0;
    renderCounterValue();
}

const countButton = document.querySelector('.js-1up-button');
const resetButton = document.querySelector('.js-reset-button');

countButton.addEventListener('click', countCallback);
resetButton.addEventListener('click', resetCallback);

renderCounterValue();