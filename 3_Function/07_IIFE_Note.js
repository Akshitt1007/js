
// =========================== IIFE Auto Semicolon Insertion – Important Note =========================

/*
    In JavaScript, if two IIFEs are placed one after another
    WITHOUT a semicolon between them, the code will throw an error.

    That's because JS tries to interpret it like this:

    (function1)()(function2)()
    
    → It thinks you're trying to call the result of the first function
    with the second one, which causes: TypeError: undefined is not a function

    BUT 
    — if the line after an IIFE starts with a different kind of statement
    (like `const`, `let`, `var`, `function`, etc.) then JavaScript can tell
    that it's a new statement and auto-inserts the semicolon correctly.

    Example of a working IIFE:
*/

(function one() {
    console.log("IIFE 1 running");
})()

// This works fine because `const` clearly starts a new statement
const result = 100;

console.log(result);

/*
    But this will throw an error without a semicolon:
    
    (function one() {
        console.log("IIFE 1");
    })()
    (function two() {
        console.log("IIFE 2");
    })()

    JS sees it like:
    undefined(function two() {...})()
    Which crashes!

    FIX: Add a semicolon between the two IIFEs:
*/

(function one() {
    console.log("IIFE 1");
})(); // <--- This semicolon is IMPORTANT

(function two() {
    console.log("IIFE 2");
})();

/*
    RULE OF THUMB:
    ----------------------------------
    IIFE followed by something like:
       - const / let / var
       - function / class
       - return
       - if / switch / for / while
    → No semicolon needed. JS can handle it.

    IIFE followed by another IIFE or anything that starts with (
    → MUST use a semicolon to prevent JS from misinterpreting it.

    Best Practice:
    Always end an IIFE with a semicolon, especially if you're stacking them.
*/

