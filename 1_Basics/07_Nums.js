const number = 2310991769;
console.log(number);   // Prints the number as is

// Explicitly creating a Number object (not commonly needed)
const balance = new Number(3350);      
console.log(balance);                  // [Number: 3350]


// For numbers with many decimal places, toFixed(2) rounds to 2 decimal places and always shows exactly two digits after the decimal point.
console.log(balance.toFixed(2));       // "3350.00"


const pi = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899
console.log(pi.toFixed(2));            // "3.14"


// toPrecision(n) returns a string with the number rounded to n total significant digits.
let num = 123.689;
console.log(num.toPrecision(3));       // "124"


num = 1123.689;
console.log(num.toPrecision(3));       // "1.12e+3"
// If the number of significant digits is less than the number of digits before the decimal,
// toPrecision will return the result in exponential (scientific) notation.


// It's hard to count how many zeros are there, so for that we have:
// toLocaleString() formats the number with commas as per the default  locale.
const money = 1000000000;
console.log(money.toLocaleString()); // "1,000,000,000"

// To place commas according to the American numbering system :
// The 'en-US' locale formats the number in the American style.
console.log(money.toLocaleString('en-US')); 

