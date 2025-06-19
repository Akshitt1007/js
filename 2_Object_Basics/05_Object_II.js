// ================== SINGLETON VS NORMAL OBJECT ==================

// his does NOT create a true Singleton (it's just a regular object)
const singletonObject = new Object();
// Singleton pattern is about enforcing only ONE instance globally — usually with closures or modules.

// Normal object creation (commonly used)
const normalObject = {}; // This is how we typically create a normal object

// Adding properties to the object
normalObject.id = 2310991769;
normalObject.name = "Akshit Choudhary";
normalObject.LoginStatus = false;

// console.log(normalObject); // You can log this to see the full object



// ================== NESTED OBJECTS (Object inside object) ==================

const app = {
    email: "aki29choudhary@gmail.com",
    fullname: {
        firstname: "Akshit",
        secondname: "Choudhary"
    }
};

console.log(app);                    // Full object
console.log(app.fullname);          // Nested object
console.log(app.fullname.firstname); // Accessing nested property



// ================== MERGING MULTIPLE OBJECT ==================

const a = { a: "abc", b: "123" };
const b = { c: "abc", d: "456" };

//  Syntax 1: Using Object.assign()
const c = Object.assign({}, a, b);
console.log(c); 

//  Syntax 2: Using spread operator (modern, cleaner)
const d = { ...a, ...b };
console.log(d); 



// ================== COMMON OBJECT METHOD ==================

console.log(normalObject); // Just confirming what’s inside

// Get all keys of the object (as array)
console.log(Object.keys(normalObject));            // [ 'id', 'name', 'LoginStatus' ]

// Get all values
console.log(Object.values(normalObject));          // [ 2310991769, 'Akshit Choudhary', false ]

// Get all key-value pairs as array of arrays
console.log(Object.entries(normalObject));         // [ ['id', 2310991769], ['name', 'Akshit Choudhary'], ['LoginStatus', false] ]

// Check if object contains a specific property
console.log(normalObject.hasOwnProperty('LoginStatus')); 
console.log(normalObject.hasOwnProperty('bruh'));        



