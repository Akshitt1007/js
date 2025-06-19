
// ================= Do While loop =================

// do {
//   // Code block to run
// } while (condition);

// When we want to run our code for atleast one time
// even id the condition don't meet

do{
    console.log( "Hello");
}
while( 1 > 2 );



// Examples:

// Sum of Digits Using do...while

let n = 12345;
let temp = n;  // Save original value
let sum = 0;

do {
    let ld = n % 10;           // Last digit
    sum += ld;                 // Add to sum
    n = Math.floor(n / 10);    // Remove last digit
} while (n > 0);

console.log(`Total sum of digits in ${temp} is ${sum}.`);
