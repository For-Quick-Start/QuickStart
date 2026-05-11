function getCoefficient(name) {
    let value = null;
    do {
        value = Number.parseFloat(
            prompt(`Enter coefficient ${name}`)
        );
    } while (Number.isNaN(value) || typeof value !== 'number');
    return value;
}

function getCoefficients() {
    let a = getCoefficient('a');
    let b = getCoefficient('b');
    let c = getCoefficient('c');
    return [a,b,c];
}

function getDiscriminant(a,b,c) {
    return b**2 - 4*a*c;
}

function printQuadraticSolutions(a,b,c) {
    let discriminant = Math.sqrt(getDiscriminant(a,b,c));
    let solution1 = (-b + discriminant)/2/a;
    let solution2 = (-b - discriminant)/2/a;
    console.log(`This equation has two solutions: ${solution1} and ${solution2}`)
}

function printSingleSolution(a,b) {
    console.log(`This equation has one solution ${-b/2/a}`);
}

function printComplexSolutions() {
    console.log('This equation has complex solutions.');
}

function quadraticEquation() {
    let tolerance = 1e-9;
    // step 1 - get a b c coefficients
    let [a, b, c] = getCoefficients();
    // Step 2 - calculate b**2 - 4*a*c
    let discriminant = getDiscriminant(a,b,c);
    // Step 3 - determine how many solutions the equation has
    // and calulate the solutions
    if (discriminant > tolerance) {
        printQuadraticSolutions();
    } else if (discriminant < -tolerance) {
        printComplexSolutions();
    } else {
        printSingleSolution(a,b);
    }
}

