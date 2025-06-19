

// ======= USING STRING KEYS — BAD APPROACH IF KEYS ARE SAME =======

// Both variables have same string value
const publicKey = "normal info";
const privateKey = "normal info"; 

const akshit = {};

akshit[publicKey] = "I am male";                // This sets: akshit["normal info"] = "I am male"
akshit[privateKey] = "Private medical data";    // This OVERWRITES: akshit["normal info"]

console.log("Using string keys:");
console.log(akshit);  
// Output:
// { 'normal info': 'Private medical data' }
// Public data got overwritten — OOPS!



// ======= USING SYMBOLS — THE RIGHT WAY TO AVOID KEY COLLISIONS =======

const realPublicKey = "normal info";               // Still a string
const realPrivateKey = Symbol("normal info");      // A Symbol with same description but unique identity

const akshitSafe = {};

akshitSafe[realPublicKey] = "I am male";             // Regular key
akshitSafe[realPrivateKey] = "Private medical data"; // Symbol key

console.log(" Using Symbol for private key:");
console.log(akshitSafe);  
// Output:
// {
//   'normal info': 'I am male',
//   [Symbol(normal info)]: 'Private medical data'
// }

// Accessing values
console.log("Public Info:", akshitSafe[realPublicKey]);      // I am male
console.log("Private Info:", akshitSafe[realPrivateKey]);    // Private medical data


