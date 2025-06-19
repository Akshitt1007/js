
// -ve value
let value = 10
let negValue = -value
console.log( value );
console.log( negValue );


// normal arithmetic operations
console.log( 2+2 );     // addition
console.log( 2-2 );     // substraction
console.log( 2*2 );     // multiplication
console.log( 2**3 );    // 2 power 3
console.log( 2/2 );     // division
console.log( 2%2 );     // reminder

// concatination of strings
let str1 = "hello"
let str2 = " akshit"
let str3 = str1 + str2
console.log( str3 );
console.log( str1 + str2 );


console.log( "1" + 2 );
console.log( 1 + "2" );

console.log( "1" + 2 + 3 );
console.log( 1 + 2 + "3");

/*
    "1" + 2 + 3
    -> Left-to-right:
       "1" + 2 → "12" (string)
       "12" + 3 → "123" (string)

    1 + 2 + "3"
    -> Left-to-right:
       1 + 2 → 3 (number addition first)
       3 + "3" → "33" (number converted to string → string concatenation)

    Summary:
    + operator behaves differently:
       → if either operand is a string → string concatenation happens.
       → otherwise → normal number addition.
    The + operator in JavaScript is left-to-right associative
*/

console.log ( +true )   
/* 
    The + in front here is the unary plus operator → forces type conversion to a number.
    true → is a boolean.
    When converted to a number:
        -> true → 1
        -> false → 0
*/
// console.log( true+ )    // error



// Post and pre increment/decrement
let num = 10;

console.log( num++ );   // post-increment
// Prints the current value first (10), THEN increments num to 11.

console.log( num );     
// Now prints 11 → because num was incremented AFTER previous console.log.

console.log( ++num );   // pre-increment
// Increments num FIRST (now 12), THEN prints the new value.


