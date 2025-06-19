
// Date

let myDate = new Date();

console.log( myDate );
console.log( typeof myDate );
console.log( myDate.toString() );
console.log( myDate.toDateString() );
console.log( myDate.toLocaleDateString() );
console.log( myDate.toISOString() );


// let customDate = new Date( 2025, 0, 10, 23, 32, 3)      // year-month-date-hours-minutes-second-millisecond
// let customDate = new Date( "2025-01-10" )               // year- month - date
let customDate = new Date( "01-10-2025" )               // month-date-year

console.log( customDate );
console.log( customDate.toDateString() );



let todayDate  = new Date()

console.log( todayDate.getDate() );
console.log( todayDate.getMonth() + 1 );
console.log( todayDate.getFullYear() );
