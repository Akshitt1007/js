

// ======= Creating a User Object =======

const mySymbol = Symbol("my random Symbol");

const userOne = {
    // Standard key-value pair; keys like "name" are implicitly strings
    name: "Akshit",

    // Keys with spaces must be wrapped in quotes
    "Full Name": "Akshit Choudhary",

    // Using a Symbol as a key ensures it's unique and non-colliding
    [mySymbol]: "my userOne Symbol",

    age: 20,
    city: "Chandigarh",
    LoggedIn: false,

    // Arrays can be used to store historical or multiple values
    LoggesIn_History: ["Monday", "Wednesday"]
};



// ======= Accessing Object Properties =======

// 1. Dot notation – clean and readable, but limited to simple keys
console.log(userOne.name);              

// 2. Bracket notation – flexible, works with keys that contain spaces, symbols, or are computed dynamically
console.log(userOne["name"]);          
console.log(userOne["Full Name"]);    

// Dot notation fails with space-containing keys
// console.log(userOne.Full Name);          // SyntaxError

// 3. Accessing Symbol-keyed property
console.log(typeof userOne[mySymbol]);      // Output: string (value stored at Symbol key)
console.log(typeof mySymbol);               // Output: symbol (type of the key itself)



// ======= Modifying Object Properties =======

// Changing an existing value
userOne.name = "Abhinav Choudhary";

// Freezing the object – locks it from changes
Object.freeze(userOne);

/*
    Object.freeze() behavior:
    1. Prevents updates to existing properties
    2. Blocks addition of new properties
    3. Disallows deletion of properties

    Warning:
    - It only shallow-freezes the object.
    - Nested objects or arrays can still be mutated.
    - To truly deep-freeze, a recursive solution is needed.
*/

// Modifying an inner array still works (not deeply frozen!)
userOne.LoggesIn_History.push("Friday");

// This modification silently fails (no error, no change)
userOne.name = "no name";

// Output the object – name is still "Abhinav Choudhary"
console.log(userOne);

// Check if the object is frozen
console.log(Object.isFrozen(userOne)); // true



// ======= Adding Methods to the Object =======

// A simple method attached to the object
userOne.greeting = function () {
    console.log("Hello JS user");
};

// Method using 'this' to refer to the current object instance
userOne.greetingTwo = function () {
    console.log(`Welcome ${this.name}`);
};


// ======= Function Reference vs Function Call =======

// Logs the function definition itself (does NOT call it)
console.log(userOne.greeting);

// Calls the greeting function – executes its code
userOne.greeting();               

// Calls the method using 'this' to personalize the output
userOne.greetingTwo();           
