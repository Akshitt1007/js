// ================= Function Declaration =================
// In JavaScript, we don’t specify return types — it’s a dynamically typed language
function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}

// ================= Function Usage =================

// This logs the function reference (does NOT execute it)
// Output: [Function: sayMyName]
console.log(sayMyName); 

// This also does NOT execute it — just references the function
// (No output, just a reference)
sayMyName; 

// This actually CALLS the function and runs the code inside
// You can run it as many times as needed
sayMyName(); 
sayMyName(); 



// ============== Passing Parameters ==================

// Function with parameters — placeholders for incoming values
function addTwoNumbers(num1, num2) {
    // The return keyword sends the result back to where the function was called
    return num1 + num2;
}

// Function without return, just logs the result
function addTwoNumbersAndPrint(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

// Calling the logging version
addTwoNumbersAndPrint(5, 5);      
addTwoNumbersAndPrint(1, "27");   // Output: 127 (string concatenation! JS being JS)

// Calling the return version
let result = addTwoNumbers(2, 2); 
console.log(result);              



// ============== Returning String from Function =====
function userLogin(username) {
    return `${username} just logged in.`; // Template literals for dynamic strings
}

console.log(userLogin("Akshit Choudhary")); 

console.log(userLogin());                  
// because we have not defined any passing value
// To handle this, you can add a check:



/**
 * Improved version that handles missing username gracefully.
 * You can also use default parameter value.
 */

function login(username = "unknown" ) {

    if ( username === "unknown" ) {
        console.log("Unkown person joined");
        return; 
    } 
    else {
        return `${username} just logged in.`;
    }
}

console.log(login());       // this will output will default value that is provided
console.log(login("xyz"));  // When value given, this will override the default values given
