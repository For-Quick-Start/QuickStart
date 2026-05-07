function updateUrgency() {
    const newValue = document.querySelector('.js-urgency').value;
    document.querySelector('.js-urgency-value').value = newValue;
}

document.querySelector('.js-urgency').addEventListener('change',updateUrgency);
