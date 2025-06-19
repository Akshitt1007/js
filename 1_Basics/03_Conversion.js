
// converting the String value of score into a Number type

let score = "100";

console.log(typeof score);        // "string" → 'score' is currently a String
console.log(typeof (score));      // Same as above — parentheses are just for grouping

let intScore = Number(score);

console.log(typeof intScore);     // "number" → Now it's a Number



// Improper Datatype conversion:

let badScore = "10a";
console.log(typeof badScore);     // "string" → still a String initially
let goodScore = Number(badScore);
console.log(typeof goodScore);    // "number" → BUT! Even though it's a Number type...
console.log(goodScore);           // ... the value is NaN (Not a Number)

/*
    Why? 
    Because "10a" is not a valid number — Number() fails and returns NaN

    Caution: 
    -> NaN is STILL of type "number" — this is NOT a bug, but a quirk of the JS spec!
    -> It is a special value in JavaScript (and many other languages) that represents a failed number operation or an invalid numeric result.
    -> Always check for NaN explicitly when doing conversions
    
    In technical terms:
        -> You used Number("10a") → the conversion was attempted.
        -> The result is NaN — which is a special value.
        -> The type is still "number" — because you asked for a number, and JavaScript honors that contract, even though the result is invalid.

    In other words: conversion succeeded in type, but failed in value.
*/

// Case 1: null → Number
let x = null;
console.log(typeof x);            // "object" → special case in JS: null is of type "object" (historical quirk)

let y = Number(x);
console.log(y);                   // 0 → null is treated as 0 when converted to Number
console.log(typeof y);            // "number"

/*
    Explanation:
    -> Number(null) → 0 (defined behavior)
    -> This is intentional: null is treated as 0 in numeric contexts.
*/


// Case 2: undefined → Number
let a = undefined;
console.log(typeof a);            // "undefined" → as expected

let b = Number(a);
console.log(b);                   // NaN → undefined cannot be meaningfully converted to a number
console.log(typeof b);            // "number" → NaN is of type number

/*
    Explanation:
    -> Number(undefined) → NaN
    -> undefined has no value → JS cannot map it to a numeric value, so result is NaN.
    -> Type is still "number", but value is invalid.
*/


// Case 3: boolean → Number
let m = true              // if true → Number → 1
// let m = false;         // if false → Number → 0
console.log(typeof m);            // "boolean" → original type

let n = Number(m);
console.log(n);                   // 0 → false converts to 0; true would convert to 1
console.log(typeof n);            // "number"


// Case 4: number -> boolean
let isLoggedin = 1                      // 1 → true
// let isLoggedin = 0                      // 0 → false
// let isLoggedin = ""                     // empty string → false
// let isLoggedin = "non-empty string "    // non empty string → true


let booleanLoggedIn = Boolean( isLoggedin )
console.log( booleanLoggedIn );
console.log( typeof booleanLoggedIn );


