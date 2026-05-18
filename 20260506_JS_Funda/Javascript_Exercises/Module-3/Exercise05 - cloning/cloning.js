let dbTable = [
    { first: 'A', last: 'B'}, 
    { first: 'C', last: 'D'}
];

function logChangedRecords(records) {
    // let internalRecords = [...records]; // shallow copy
    let internalRecords = structuredClone(records); // deep copy
    for (let record of internalRecords) {
        record.title = 'Ms.';
    }
    console.log(internalRecords);
}

logChangedRecords(dbTable);

console.log(dbTable);