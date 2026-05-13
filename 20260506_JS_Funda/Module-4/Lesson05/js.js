// console.log the second and the fourth list item inside the second section only
// Allowed to use selector or class js-second-section
// Not allowed to use js-second-section, but allowed to use js-second-section-title

// my solution
let secondLis = [...document.querySelectorAll('.js-second-section li')];
console.log(secondLis[1].innerHTML);
console.log(secondLis[3].innerHTML);

//instructor's solution
const selectedListItemsA = document.querySelectorAll(
    '.js-second-section > .js-item-list > li:nth-child(2n)'
);
for (let item of selectedListItemsA) {
    console.log(item.innerHTML);
}

// my solution
let secondLisFromTitle = [...document.querySelectorAll('.js-second-section-title ~ .js-item-list > li')];
console.log(secondLisFromTitle[1].innerHTML);
console.log(secondLisFromTitle[3].innerHTML);

// instructor's solution
const selectedListItemsB = document.querySelectorAll(
    '.js-second-section-title ~ .js-item-list > li:nth-child(2n)'
);
for (let item of selectedListItemsB) {
    console.log(item.innerHTML);
}

