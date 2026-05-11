let dbTable = [
    {'first': 'A', 'last': 'B'},
    {'first': 'C', 'last': 'D'}
];

function logChangedRecords(records) {
    // let internalRecords = structuredClone(records); //deep copy method 1
    let internalRecords = JSON.parse(JSON.stringify(records)); // deep copy method 2
    // let internalRecords = [...records]; // shallow copy
    for (let record of internalRecords) {
        record.title = 'Ms.';
    }
    console.table(internalRecords);
    console.log(JSON.stringify(internalRecords));
}

logChangedRecords(dbTable);

console.table(dbTable);
console.log(JSON.stringify(dbTable));


