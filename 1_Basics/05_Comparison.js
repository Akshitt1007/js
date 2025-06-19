
// Comparison operators
console.log( 2 > 1 )        // greater
console.log( 2 < 1 )        // less than
console.log( 2 >= 1 )       // greater or equal
console.log( 2 <= 1 )       // leas than or equal
console.log( 2 != 1 )       // not equal 
console.log( 2 == "2" )       // equal


// String comparison
console.log( "2" > 1 )
console.log( "02" > 1 )
// js automatically converts this string datatype into the number datatype to perform the comparison


console.log( null > 0 );
/*
    Comparison (>) converts null to a number before comparing.
    null is converted to 0.
    0 > 0 is false.
*/
console.log( null == 0 );
/*
    The equality check (==) does not convert null to a number.
    null is only equal to undefined in loose equality (==), not to numbers.
    So, null == 0 is false
*/
console.log( null >= 0 );
/*
    The >= comparison also converts null to a number (0).
    It becomes 0 >= 0, which is true.
*/

console.log( undefined > 0 );
console.log( undefined == 0 );
console.log( undefined >= 0 );


// Strict Check ===

console.log( "2" === 1 );
console.log( 2 === 2 );
// This will not only check the value but also the datatype
// they will be equal only and if they have same datatype and value