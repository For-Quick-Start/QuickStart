// 2. Describe a hotel booking as an object. Make sure you include the room number,
// the name of the person or people staying in the room, the start date, the 
// end date, and the total price. Research how it is optimal to represents dates. 

let booking = {
    roomNumber: 275,
    guest: ['Mr. First Last', 'Ms. First Last'],
    startDate: {
        year: 2022, 
        month: 11, // 11 = November
        day: 25
    },
    endDate: {
        year: 2022,
        month: 11,
        day: 28
    },
    priceUSCents: 108875,
};