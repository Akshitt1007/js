"use strict";  // optional, but recommended
// "use strict" = a safety net → makes JS stricter → helps you catch bugs early → helps you write better code.

// With const keyword:
// We can declare something final which cannot be reassigned.
// Useful when we do not want the value to change.
const accountId = 2310991769;

let userEmail = "akshit@gmail.com";
var userPassword = "12345";
userCity = "Chandigarh";

let userGender;
// If we do not have a value yet, we can declare the variable without initializing it.
// JS will assign it the value "undefined".

/*
    Summary of variable keywords:

    const → value cannot be reassigned (immutable binding), must be initialized when declared.
    let   → value can be reassigned, block scoped, modern standard for variables.
    var   → outdated, function scoped, hoisted in ways that can cause bugs. Avoid using it.

    Declaring variables without let/const/var creates a global variable (not recommended).
    Always use 'strict mode' to catch such errors.

    !! Never use var or declare variables without a keyword.
    !! const and let are the most commonly used keywords for defining variables.
*/


if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // 10 → var escaped! It is function-scoped, not block-scoped.
console.log(y); // ReferenceError → let is block-scoped! It stays inside the {}
// Notes:

// When we declare a variable inside any block { },
// ideally, it should remain in that block only.
// "let" and "const" follow this rule (block-scoped).
// BUT "var" does NOT follow this — it is function-scoped.
// Even if we declare "var" inside {}, it is accessible outside the block (if not inside a function).
// That's why we don't use "var" anymore — it can cause unexpected behavior and bugs.


// accountId = 12100;    // This will give an error, as accountId is a const.

// The below variables can be modified since they are not const:
userEmail = "akuu@gmail.com";
userPassword = "69696969";
userCity = "Berlin";

// To print the single value of a variable:
console.log(accountId);

// To print variables in table format for easy readability:
console.table([accountId, userEmail, userPassword, userCity, userGender]);
