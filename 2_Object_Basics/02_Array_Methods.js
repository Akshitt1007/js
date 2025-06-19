
// ========== Pushing an Array INTO another Array (Not Merging) ==========

const marvelHeros = ["Ironman", "Thor", "Spiderman"];
const dcHeros = ["Batman", "Superman", "Flash"];

marvelHeros.push(dcHeros);  
// This does NOT merge the arrays
// Instead, it adds the entire dcHeros array as a *single element* at the end of marvelHeros
// Result: marvelHeros has 4 elements, and index 3 is an array

console.log(marvelHeros);        
// Output: [ 'Ironman', 'Thor', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ] ]

console.log(marvelHeros[3]);     
// Output: [ 'Batman', 'Superman', 'Flash' ]  → The nested array

// Accessing elements inside the nested array (dcHeros)
console.log(marvelHeros[3][0]);  
console.log(marvelHeros[3][1]);  
console.log(marvelHeros[3][2]);  



// ========== Proper Way to Merge Arrays ==========

const x = ["Akshit", "Abhinav"];
const y = ["Ram", "Sham"];
const z = ["Rohit", "Mohit"];

// erge x and y
const xy = x.concat(y);
console.log(xy); 

// Merge x, y, and z
const xyz = x.concat(y, z);
console.log(xyz); 

// Alternative modern way using spread operator (recommended)
const xyzSpread = [...x, ...y, ...z];
console.log(xyzSpread);  



// ========== Flattening Deeply Nested Arrays ==========

const bad_array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13]], 14];
// This is a messy (nested) array with arrays inside arrays inside arrays

// Flatten up to 1 level deep
const good_array = bad_array.flat(1);
console.log(good_array);
// Notice: It only flattens the first level

// Flatten ALL levels deep (no matter how many)
const good_arrayII = bad_array.flat(Infinity);
console.log(good_arrayII);
// Fully flattened array



// ========== Checking and Converting to Arrays ==========
// → Tells you whether the given value is actually an array or not.

let a = "Akshit Choudhary";
console.log(Array.isArray(a)); // false – it's a string

a = [1, 2, 3, 4, 5];
console.log(Array.isArray(a)); // true – now it's an array

a = true;
console.log(Array.isArray(a)); // false – boolean is not an array




// ========== Converting Other Data Types into Arrays ==========
// → Converts something like a string or iterable (anything you can loop over) into an actual array.

let b = "Akshit Choudhary";
let c = [1, 2, 3, 4, 5];

console.log(Array.isArray(b));  // false

// Converts string to array of characters
console.log(Array.from(b));     

console.log(Array.from(c));    

console.log(Array.from({ name: "Akshit" }));
// Output: [] – Cannot convert plain object to array directly
// Note: You’d need to convert using keys/values if you want actual data
// Example:
console.log(Array.from(Object.values({ name: "Akshit" }))); // ['Akshit']




// ========== Creating Arrays with Array.of() ==========
// → Creates an array from whatever you give it — even just numbers.

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3));
// Output: [100, 200, 300]
// Difference from Array(num1): this doesn’t treat single number as length