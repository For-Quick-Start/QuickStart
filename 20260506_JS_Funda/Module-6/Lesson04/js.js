const tcCheckbox = document.querySelector('.js-tc');



function alwaysAcceptClicked() {
    window.localStorage.setItem('acceptTc', true);
    tcCheckbox.checked = true;
}

function neverAcceptClicked() {
    if (window.localStorage.getItem('acceptTc') === 'true') {
        alert('it was accepted before');
    }
    window.localStorage.removeItem('acceptTc');
    tcCheckbox.checked = false;
}

function formSubmitted(event) {
    if (!tcCheckbox.checked) {
        event.preventDefault();
        alert('please accept');
    }
}

function allowFreeTextEmail() {
    document.querySelector('.js-email').setAttribute('type', 'text');
}

if (window.localStorage.getItem('acceptTc') === 'true') {
    tcCheckbox.checked = true;
}

document
    .querySelector('.js-form')
    .addEventListener('submit', formSubmitted);
document
    .querySelector('.js-always-accept')
    .addEventListener('click', alwaysAcceptClicked);
document
    .querySelector('.js-never-accept')
    .addEventListener('click', neverAcceptClicked);
document.querySelector('.js-allow-free-text-email')
    .addEventListener('click', allowFreeTextEmail);






