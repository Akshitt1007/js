"use strict";

/*
    Why use "use strict"?
    ---------------------
    By default, JavaScript is very forgiving:

    -> If you accidentally use a variable without declaring it → JS would normally allow it.
    -> If you accidentally do something weird with 'this', JS would just go along.
    -> If you write bad code (like duplicate function parameters), JS might not warn you.

    Strict mode helps catch these mistakes early.
    It prevents you from doing things that are likely bugs.

    Overall:
    -> Encourages cleaner, more secure, and more predictable JavaScript code.
*/


// alert("Hello, world!");
console.log( "Hello World" )

/*
    What is alert()?
    ----------------
    alert() is a browser function that pops up a little window with a message.
    The user sees a dialog box with the message and an OK button.

    Where does alert() come from?
    ----------------------------
    -> It is part of the Browser API, specifically part of the 'window' object.
    -> window = the global object in browsers (the browser window/tab)
    -> alert() = method provided by the browser to display a popup dialog.

    Why does alert() give an error in Node.js?
    ------------------------------------------
    -> Because Node.js is not a browser.
    -> Node.js runs JavaScript on your machine (server-side), in the terminal.
    -> It does not have a 'window' object or the Browser APIs.
    -> The alert() function exists only in browser environments — not in Node.js.

    Alert() vs console.log()
    ------------------------
    console.log() → Developer console output (you see it in Dev Tools or the Node.js console).
    alert() → Browser popup for the user (user sees it on the screen).

    Why is alert() not like console.log()?
    --------------------------------------
    -> alert() is an actual UI element — it pops up a dialog and interrupts the user flow (blocking).
    -> console.log() is just a developer tool — it logs messages invisibly unless Dev Tools are open.

    Important Notes:
    ----------------
    In Node.js → Use console.log().
    In Browser → You can use both, but prefer console.log() for debugging, and use UI libraries for user interaction.
*/


// Primitive Data Types in JavaScript

let name = "Akshit Choudhary";      // String → sequence of characters
let declareString = new String("Akshit Choudhary" )     // another way of declaring the string
let age = 20;                       // Number → both integer and float are of type "number" in JS
let bigNum = 999999999999999999999n; // BigInt → for integers larger than Number.MAX_SAFE_INTEGER
let married = false;                // Boolean → true or false
let gender;                         // Undefined → variable declared but not assigned → JS gives it type "undefined"
let x = null;                       // Null → intentional absence of any value
let uniqueId = Symbol('id');        // Symbol → unique and immutable value, often used as object keys

/*
    Notes:

    - null is a standalone value → it explicitly means "no value" / "empty".
    - undefined means "not assigned yet" → variable is declared but value is not set.
    - They are different: null is something you assign; undefined is JS’s default for uninitialized variables.

    - typeof null returns "object" → this is a known bug in JS (for historical reasons).

    - BigInt is used when the number exceeds Number.MAX_SAFE_INTEGER.

    - Symbol is a primitive data type introduced in ES6:
        → Every Symbol is unique, even if you pass the same description.
        → Often used to add unique keys to objects (prevents accidental overwrite).
*/

// Logging the types of each variable
console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof bigNum);    // "bigint"
console.log(typeof married);   // "boolean"
console.log(typeof gender);    // "undefined"
console.log(typeof x);         // "object" (language quirk / bug)
console.log(typeof uniqueId);  // "symbol"
