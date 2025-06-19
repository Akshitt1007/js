
// ==================== THIS keyword ====================

const username = "Rohan Malhotra";  // Global variable

const user = {
    username: "Akshit Choudhary",
    price: 999,

    welcomeMessage: function() {
        // This will use the global 'username' variable, NOT the one inside 'user'
        console.log(`Welcome ${username} to our program`);

        // 'this.username' refers to the 'username' property of the current object ('user')
        console.log(`Welcome ${this.username} to our program`);
    },

    objectMessage: function() {
        // When this function is called as a method of 'user',
        // 'this' refers to the 'user' object itself
        // So it will simpliy give the value of the object's info
        console.log(this);
    }
};

// Output:
// Welcome Rohan Malhotra to our program  <-- from global variable
// Welcome Akshit Choudhary to our program <-- from object property

user.welcomeMessage(); 

// Note:
// - 'this' inside a method refers to the object on which the method was called.
// - Without 'this', JS will look for a variable named 'username' in the local or global scope.

user.objectMessage();

console.log(this);
// In a Node.js file, 'this' at the top level refers to module.exports (an empty object by default).
// In browsers, 'this' at the top level refers to the window object (global scope).



function thisFunction(){
    const name = "Rohan"
    console.log( this );

    console.log( this.name );      
    // Therefore the "THIS" is only used to access th value of object and not methods etc
    // this doesn’t know about your local const or let variables — it only sees properties on the object it's bound to.

}
thisFunction()

/*
    1. In Node.js, when you call a regular function (not inside an object), and you're not in strict mode, 
       the this keyword inside it refers to the global object.

    2. That “global object” is Node’s version of the browser's window object.

    What is Node’s Global Object?

    -> In Node.js, the global object is called simply: global.
    -> It’s an object that holds everything Node makes available everywhere, without us having to import it.

*/
// const choudhary = function(){
//     const name = "Sam"
//     console.log( this );
//     console.log( this.name );
// }

// const choudhary = () => {
//     const name = "Sam"
//     console.log( this );
//     console.log( this.name );
// }

// choudhary()


// ==================== Arrow Function ====================

// - Its just like the expression function where a variable holds a method
//          const functionName = (parameters) => {
//              function body
//          };



// Traditional function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (equivalent)
const addArrow = (a, b) => {
    return a + b;
};

console.log( addArrow( 5, 10 ));


// No-Parameter Arrow Function
const sayHi = () => console.log("Hi there!");

// ========== Implicit Return (One-Liner) ==========

// When the function has only one expression, omit braces & 'return'
const addShort = (a, b) => a + b;

// OR with parentheses (optional for expressions)
const addShortII = (a, b) => (a + b);

//  Note:
// - {} → block → needs explicit `return`
// - () → expression → returned automatically


// For single argument, parentheses are optional:
const square = x => x * x;
