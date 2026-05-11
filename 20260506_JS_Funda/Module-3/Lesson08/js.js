let val = 1;
let o = {val: 1};

function plusOne(val, o) {
    val += 1;
    o.val += 1;
    console.log(' inside', val, o);
}

plusOne(val, o);
console.log('outside', val, o);

