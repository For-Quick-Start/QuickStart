function plusOne(val, obj) {
    val += 1;
    obj.x += 1;
    console.log("val     in", val);
    console.log("obj     in", obj.x, obj);
}

let val = 1;
let obj = {x: 1};
console.log("val before", val);
console.log("obj before", obj.x, obj);
plusOne(val, obj);
console.log("val  after", val);
console.log("obj  after", obj.x, obj);
