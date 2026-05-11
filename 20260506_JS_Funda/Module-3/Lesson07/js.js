function plusOne(val, obj) {
    val += 1;
    // obj.x += 1;
    let intVal = {...val};
    intVal.x += 1;
    console.log("val     in", val);
    console.log("obj     in", obj.x, obj);
    console.log("intVal  in:,", intVal.x, intVal);
}

let val = 1;
let obj = {x: 1};
console.log("val before", val);
console.log("obj before", obj.x, obj);
plusOne(val, obj);
console.log("val  after", val);
console.log("obj  after", obj.x, obj);

let dbTable = [
    {'first': 'A', 'last': 'B'},
    {'first': 'C', 'last': 'D'}
];

function logChangedRecords(records) {
    // let internalRecords = structuredClone(records);
    let internalRecords = JSON.parse(JSON.stringify(records));
    for (let record of internalRecords) {
        record.title = 'Ms.';
    }
    console.table(internalRecords);
}

logChangedRecords(dbTable);

console.table(dbTable);
console.log(JSON.stringify(dbTable));
