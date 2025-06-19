

var num1 = 10
var num2 = 30

function add( value1, value2 ){
    return value1+value2
}

// While we are in Code Execution Phase and we reach here
// js see that result don't have value but hold a funtion so further box is created
var result = add( value1, value2 )

console.log( result );


// ======================== Execution Context: Function Call Breakdown ========================

// 1. Global Execution Context (GEC) is already running.
//    Your JS code starts running inside the Global Execution Context.

// 2. When a function is called (e.g., greet()), JavaScript pauses and creates a new context for it.

// 3. A new Execution Context is created specifically for that function call.
//    This context is temporary and isolated from the global one.

//    Inside this function context, two phases occur:

//    A. Memory Creation Phase
//       - All variables inside the function are hoisted (declared at the top).
//       - Function declarations are also hoisted.
//       - Variables are initialized with undefined until assigned.

//    B. Code Execution Phase
//       - JavaScript executes the function line by line.
//       - Values are assigned and code runs normally (e.g., console.log).

// 4. Once the function completes execution:
//       - The new execution context is destroyed.
//       - the value is return to global execution context
//       - Control returns to the previous context (global or the parent function).

// Important Notes:
//    - No new global object is created inside this function context.
//    - This context lives only for the duration of the function execution.
//    - This mechanism is how JavaScript handles scope, closures, and manages the call stack.
