
// Nullish_Coalescing_Operator (??): Handles null or undefined values

// This operator is useful when receiving data from a server,
// where the value might be null or undefined, which can break the system.
// With the ?? operator, we can provide a default value when null or undefined is received.

let var1 = 10 ?? 20;           // 10 is NOT null/undefined → result is 10
let var2 = null ?? 33;         // null → fallback to 33
let var3 = undefined ?? 44;    // undefined → fallback to 44

console.log(var1); 
console.log(var2); 
console.log(var3); 
