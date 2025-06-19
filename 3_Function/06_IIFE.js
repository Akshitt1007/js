
//==================== Immediately Invoked Function Expression ( IIFE ) ====================

/*
    It’s a function in JavaScript that:

        - We define,
        - And immediately execute — right after defining it.
        - An IIFE only runs immediately when and where we define it.


    Why is it used?

    1. Avoid polluting the global scope
    - It creates a private scope so variables declared inside don’t leak out.

    2. Encapsulation / Data hiding
    - Great for hiding temporary variables or logic you don’t want accessible elsewhere.

    3. Run-once code
    - Perfect for initialization code — stuff you need to run just once.
    
*/



// syntax:
( function random () {
    console.log("I'm an IIFE!");
} )()

// The () around the function turns it into an expression.
// The second () invokes it immediately.


// Encapsulation / Data hiding example:
let result = (function() {
    let a = 5;
    let b = 10;
    return a + b;
})()

console.log(result); // 15
// Variables a and b are NOT accessible here. Pure privacy.


// Passing arguments
( function passing( name ){         // parameters
    console.log(`Your name is: ${name}`);
} ) ( "akshit" );                   // arguments

// same as normal passing but here we are just writing the arguments where we are calling it 

/*
    ALl About IIFE:

    - Back in the day, we used IIFEs mainly to prevent var from polluting the global scope, since var was function-scoped and easily leaked out. 
    IIFEs gave us a way to encapsulate code and make variables private. Now that we have let and const with block scope, 
    we don’t need IIFEs for scoping anymore. But IIFEs are still useful today when you want to execute a block of code immediately — 
    especially for things like initialization or setup routines that should only run once.
*/



// This will throw an error if there's no semicolon between the IIFEs
// Because JavaScript doesn't know where the first function ends
// It thinks the second IIFE is trying to call the result of the first
// To prevent this confusion, we must end the first IIFE with a semicolon

(function method1() {
    console.log("IIFE 1 run");
})();

(() => {
    console.log("IIFE 2 run");
})();

// In the example below, there's no error even without a semicolon
// because the IIFE is part of a variable assignment with a return statement
// The parser clearly sees the expression is complete, so it auto-inserts the semicolon correctly
