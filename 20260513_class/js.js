

// for (let i = 1; i<100; i++) {
//     console.log(i);
// }

// for (let a = 100; a>=1; a--) {
//     console.log(a);
// }



// let total = 0;

// for (let a = 1; a<=5; a++) {
//     total += a;
// }

// console.log(total);


// let newTotal = 1;
// let multiplier = 1;
// // debugger;
// while (multiplier < 17) {
//     newTotal *= multiplier;
//     multiplier++;
// }

// console.log(newTotal);


// // print odd and even number

// let odd = [];
// let even = [];
// for (let a = 1; a <= 2; a ++) {
//     if ( a % 2 === 0) {
//         even.push(a);
//     } else {
//         odd.push(a)
//     }
// }

// console.log(`the odds are ${odd}`);
// console.log(`the evens are ${even}`);


// let marks = [95,-85,75,-65,55];

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 50) {
//         console.log("PASS");
//     } else {
//         console.log("FAIL");
//     }
// }

function findPrimes() {
    const output_container = document.querySelector('.output-container');
    const formInput = document.querySelector('#input-text').value;
    const ceiling = Number.parseInt(formInput);

    const primes = new Set();
    primes.add(2); // 2 is always prime ; 1 is never prime 
    // https://www.scientificamerican.com/blog/roots-of-unity/why-isnt-1-a-prime-number/

    let lastDivisor = 1;
    let html = '<div><ul>Details follow:\n<li class="is-prime">2 is a prime number</li>\n';

    for (let i = 3; i <= ceiling; i++) {

        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if ( i % j === 0 ) {
                isPrime = false;
                lastDivisor = j;
                break;
            }
        }
        if (isPrime) {
            primes.add(i);
            html += `<li class="is-prime">${i} is a prime number</li>`;
        } else {
            html += `<li class="is-not-prime">${i} is evenly divisible by ${lastDivisor}, ergo it is NOT a prime number</li>`;
        }
        isPrime = true;
    }
    html += '</ul></div>';
    let html2 = `<div class="js-prime-ul"><ul>Prime Numbers 2 Through ${ceiling}`;
    for (const prime of primes) {
        html2 += `<li>${prime}</li>`;
    }
    html2 += '</ul></div>';

    output_container.innerHTML = html2 + html;
}

function multiplication() {
    const output_container2 = document.querySelector('.output-container2');
    const formInput2 = document.querySelector('#input-text2').value;
    const ceiling2 = Number.parseInt(formInput2);
    table_html = '<table class="multiplication-table"><tbody>';
    table_html += '<tr><td class="multiplication-table-cell multiplication-table-cell-edge"></td>';
    for (let top_row_cell = 1; top_row_cell <= ceiling2; top_row_cell++) {
        table_html += `<td class="multiplication-table-cell multiplication-table-cell-edge">${top_row_cell}</td>`
    }
    table_html += '</tr>';
    for (let row = 1; row <= ceiling2; row++) {
        table_html += '<tr>';
        table_html += `<td class="multiplication-table-cell multiplication-table-cell-edge">${row}</td>`
        for (let cell = 1; cell <= ceiling2; cell++) {
            table_html += `<td class="multiplication-table-cell">${row*cell}</td>`
        }
        table_html += '</tr>';
    }
    table_html += '</table></tbody>';

    output_container2.innerHTML = table_html;

}

const button = document.querySelector('.js-button');
button.addEventListener('click', findPrimes);

const button2 = document.querySelector('.js-button2');
button2.addEventListener('click', multiplication);



// let ceiling = 131;


