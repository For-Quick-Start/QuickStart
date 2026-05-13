// A. console.log the content of the list items in separate lines

let allLis = document.querySelectorAll('li');
let allLisArray = [...allLis];
for (let li of allLisArray) {
    console.log(li.textContent);
}


// B. console.log the first word of the second paragraph
// string.split(' ');

let allPs = document.querySelectorAll('p');
let allPsArray = [...allPs];
console.log(allPsArray[1].textContent.split(' ')[0]);


// C. console.log the number of paragraphs on the website

console.log(allPsArray.length);




