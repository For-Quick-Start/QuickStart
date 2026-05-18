// A. Console log the content of the list items in separate lines.
console.log('---- Exercise A ----');
let listItems = document.querySelectorAll('li');
for (let item of listItems) {
    console.log(item.innerText);
}

// B. Console log the first word of the second paragraph.
console.log('---- Exercise B ----');
let paragraphs = document.querySelectorAll('p');
let secondParagraph = paragraphs[1];
let secondParagraphText = secondParagraph.innerText; 
let firstWordOfSecondParagraphText = secondParagraphText.split(' ')[0];
console.log(firstWordOfSecondParagraphText);


// C. Console log the number of paragraphs on the website.
console.log('---- Exercise C ----');
console.log(paragraphs.length);