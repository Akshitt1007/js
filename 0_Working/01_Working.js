
/* 
====================================================
PHASE 0: GLOBAL EXECUTION CONTEXT (GEC)
====================================================

What is the Global Execution Context?
-------------------------------------
- It's the main container created by the JavaScript engine where your entire code starts running.
- It exists as long as your program runs and is created before any code is executed.

It contains:
1. Global Object (e.g., 'window' in browsers, 'global' in Node.js)
2. 'this' keyword (points to the global object)
3. Links to outer environments (null for global scope)
4. Memory space for variables/functions (set up in the next phase)

*/

/*
====================================================
⚙️ 1. Memory Creation Phase (Creation/Hoisting Phase)
   (Like Java's Compile Time)
====================================================

What happens here?
------------------
- JavaScript scans our entire code before executing anything.
- It sets up memory (on the JS engine’s memory heap) for:
    1. Variables (declared with var, let, or const)
    2. Function declarations (not expressions or arrow functions)
- This is where **hoisting** happens:
    - 'var' variables are set to 'undefined'
    - 'let' and 'const' are hoisted but *not* initialized (enter TDZ)
    - Function declarations are fully hoisted

*/

// ===== Example =====
console.log(x);       // undefined (due to hoisting)
var x = 10;           // x is declared and initialized later

sayHello();           // (function is hoisted)
function sayHello() {
    console.log("Hello!");
}
// - In the memory phase:
//   - x is declared and set to undefined
//   - sayHello is fully hoisted as a complete function


// if we have a code like this
var num1 = 10
var num2 = 20
function add( num1, num2 ){
    return num1 + num2
}
var result = add( num1, num2 )
console.log( result);


/*
====================================================
🚀 2. Code Execution Phase (Like Java's Run Time)
====================================================

- JavaScript now executes code line-by-line.
- It uses the memory set up in the first phase.
- Assigns actual values.
- Calls functions, runs logic, etc.

From above code:
----------------
- At console.log(x); JS prints undefined (not an error), because x exists in memory but isn’t initialized yet.

        - because in above step x memory declaring is done
        - and we have stored undefined in x but 
        - we are printing the x before actuall value storing is happening 
        - therefore this prints undefined ( since it moves step-by-step )

- x = 10; actually stores 10 in x.
- sayHello(); works because the function was hoisted.

- now we initialize the result
- again a seprate box is created 
- which is discussed in another file

!! What About let and const?
----------------------------
- They are hoisted, but stay in the **Temporal Dead Zone (TDZ)** until execution reaches their declaration.
- You CANNOT use them before initialization.

*/

console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;




/*
====================================================
  Temporal Dead Zone (TDZ)
====================================================

Why doesn’t let/const just return `undefined` like var?
-------------------------------------------------------
Returning undefined can cause subtle bugs. For example:

    console.log(name);          // undefined
    var name = "Akshit";

- Here, 'name' is used before assignment.
- It doesn't crash, but it gives you 'undefined'.
- This can lead to confusing, hard-to-find bugs.

With let and const, JavaScript enforces discipline:
---------------------------------------------------
    "Declare your variables before using them.
    If not, you'll get a clear ReferenceError — not silent bugs."

That's why let and const variables stay locked in the TDZ until their declaration is reached.
*/