// The Math object in JavaScript
// It provides various methods for basic and advanced mathematical operations.

console.log(Math);    // Logs the Math object itself

// To find the absolute value
console.log(Math.abs(-4));    

// To get the rounded value
console.log(Math.round(4.3));    
console.log(Math.round(4.8));    

// To get the square root
console.log(Math.sqrt(4));    

// To calculate the power
console.log(Math.pow(2, 4));    

// To get the min/max value from a list of numbers
console.log(Math.min(1, 2, 3, 4, 5, 6, 8));    
console.log(Math.max(1, 2, 3, 4, 5, 6, 8));    

// Generating random numbers

console.log(Math.random());                         // Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10);                    // Random number between 0 and 10 (exclusive)
console.log(Math.random() * 10 + 1);                // Random number between 1 and 11 (exclusive)
console.log(Math.floor(Math.random() * 10 + 1));    // Random integer between 1 and 10 (inclusive)

// Question: Get a random number between 10 and 20 (inclusive)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

/*
EXPLANATION:

    1. Math.random() gives → [0, 1)

    2. (max - min + 1) gives → total numbers in range
        Example: if min = 10, max = 20 → (20 - 10 + 1) = 11 → numbers from 10 to 20

    3. Math.random() * (max - min + 1) → gives [0, 11)

    4. Adding min → shifts this range to [10, 21)

    5. Math.floor(...) → turns this into whole numbers: 10, 11, 12, ..., 20

    Final result → random integer between 10 and 20 (inclusive!)
*/
