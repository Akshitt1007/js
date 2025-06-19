
/*
    In Arrays:
    - The keys (indexes) are automatically numbers starting from 0.
    - You can't choose custom keys.

    In Map:
    You can set custom keys, and they can be of any data type:
    - strings
    - numbers
    - booleans
    - objects
    - even functions!
*/


// Create a Map:
const myMap = new Map();

// Add key-value pairs:
myMap.set(key, value);

// Get a value:
myMap.get(key);

// Check if a key exists:
myMap.has(key);

// Delete a key:
myMap.delete(key);

// Get size:
myMap.size;

// Clear all entries:
myMap.clear();



// example:
const userRoles = new Map();

// Add items
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "Editor");
userRoles.set("Charlie", "Viewer");

// Get value
console.log(userRoles.get("Alice")); // "Admin"

// Check if a key exists
console.log(userRoles.has("Bob")); // true

// Size of map
console.log(userRoles.size); // 3

// Delete a key
userRoles.delete("Charlie");

// Loop through Map
for (let [key, value] of userRoles) {
  console.log(`${key} => ${value}`);
}
// Output:
// Alice => Admin
// Bob => Editor
