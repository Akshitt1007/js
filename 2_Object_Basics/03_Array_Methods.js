
// ===================== Advanced Array Methods ====================

const nums = [1, 2, 3, 4, 5, 6];

// ========== .map() ==========

// Purpose: Used to transform each element of the array and return a new array
const squared = nums.map(n => n * n); 
// Takes each number (n), squares it (n * n), and creates a new array
console.log(squared); 



// ========== .filter() ==========

// Purpose: Filters elements based on a condition
const evens = nums.filter(n => n % 2 === 0); 
// Keeps only the even numbers (2, 4, 6)
console.log(evens); 



// ========== .sort() ==========

// Purpose: Sorts the elements in place (modifies original array)
const messy = [10, 2, 30, 5];
messy.sort((a, b) => a - b); 
// The callback compares a and b:
// a - b < 0 → a comes before b
// a - b > 0 → b comes before a
console.log(messy); 
// Output: [2, 5, 10, 30]

// NOTE: Without compare function, sort() converts to strings and sorts alphabetically!



// ========== .some() and .every() ==========

const ages = [18, 22, 17];

// .some()
// Returns true if AT LEAST ONE element matches the condition
const hasMinor = ages.some(age => age < 18); 
console.log(hasMinor); 
// Output: true → because 17 is less than 18



// .every()
// Returns true ONLY IF ALL elements match the condition
const allAdults = ages.every(age => age >= 18); 
console.log(allAdults); 
// Output: false → because 17 fails the condition
