// Console log the second and the fourth list item inside the second section 
// only.

// A. You're allowed to use the class .js-second-section
const selectedListItemsA = document.querySelectorAll(
    '.js-second-section > .js-item-list > li:nth-child(2n)'
);
for (let item of selectedListItemsA) {
    console.log(item.innerText);
}

// B. You're not allowed to use the class .js-second-section, but you're allowed
// to use the class .js-second-section-title
const selectedListItemsB = document.querySelectorAll(
    '.js-second-section-title ~ .js-item-list > li:nth-child(2n)'
);
for (let item of selectedListItemsA) {
    console.log(item.innerText);
}