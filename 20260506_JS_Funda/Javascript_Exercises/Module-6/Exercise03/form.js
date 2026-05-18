const tcCheckbox = document.querySelector('.js-tc');

function alwaysAcceptClicked() {
    window.localStorage.setItem('acceptTc', true);
    tcCheckbox.checked = true;
}

function neverAcceptClicked() {
    if (window.localStorage.getItem('acceptTc') === 'true') {
        tcCheckbox.checked = false;
    }
    window.localStorage.removeItem('acceptTc');
}

function formSubmitted(event) {
    // if (form is invalid) { event.preventDefault(); + display error message}
    if (!tcCheckbox.checked) {
        event.preventDefault();
        alert('Please accept T&C before submitting the form.');
    }
}

function allowFreeTextEmail() {
    document.querySelector('.js-email').setAttribute('type', 'text');
    document
        .querySelector('.js-email')
        .setAttribute('placeholder', 'E-mail (free text)');
}

if (window.localStorage.getItem('acceptTc') === 'true') {
    tcCheckbox.checked = true;
}



document.querySelector('.js-form').addEventListener('submit', formSubmitted);
document
    .querySelector('.js-always-accept')
    .addEventListener('click', alwaysAcceptClicked);
document
    .querySelector('.js-never-accept')
    .addEventListener('click', neverAcceptClicked);
document  
    .querySelector('.js-allow-free-text-email')
    .addEventListener('click', allowFreeTextEmail);