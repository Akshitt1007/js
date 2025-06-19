// Example demonstrating truthy and falsy in JavaScript

// const value = "Akshit";
// const value = "";
const value = [];

if (value) {
  console.log("Logged in");
} else {
  console.log("Failed Login");
}

/*
Explanation:

    -> An empty string "" is considered falsy.
    -> An empty array [] is considered truthy.

    - In JavaScript, certain values are always considered "false-like" — these are called falsy.
    - and Everything else that is not falsy is truthy.

    - Falsy are values that are considered false when converted to a boolean.

    Falsy values include:
    false, 0, -0, 0n, "", null, undefined, NaN, BigInt

    Truthy values include:
    " ", "0", "false", "text", 1, -1, [], {}, function(){}, and basically everything else that's not falsy.
*/




// To check for array 
const Array = []
if ( Array.length === 0 ){
    console.log("Empty");
}
else{
    console.log("Non-empty");
}

// To check for object
const randomObj = {}
// const randomObj = { name:"akshit"}

// Object.keys(randomObj) - we know this method returns a array of keys
// the array is empty that means the object have 0 keys and hence empty object

if( Object.keys(randomObj).length === 0 ){
    console.log( "Empty Object");
}
else{
    console.log( "Non empty object")
}