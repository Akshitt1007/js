
// ================== ARRAY BASICS ==================

const array = [0, 1, 2, 3, "akshit", "abhinav", true, false];

console.log(array);        // Prints entire array
console.log(array[0]);     // 0
console.log(array[4]);     // "akshit"
console.log(array[6]);     // true

/*
    === JavaScript Arrays Overview ===

    1. Arrays in JS are dynamic:
       - Can store multiple data types (numbers, strings, booleans, objects, even other arrays).
       - Example: [1, "hello", true, [2, 3], { name: "Akshit" }]

    2. JavaScript uses 0-based indexing:
       - First element → index 0, second → index 1, and so on.

    3. Copying arrays with = creates a **shallow copy**:
       - Both variables point to the same memory address in the heap.
       - Changes through one will reflect in the other.

    === Shallow Copy vs Deep Copy ===

    • Shallow Copy:
        Two references to the same object in memory.
        Changes through one reference affect the other.

        let arr1 = [1, 2, 3];
        let arr2 = arr1;
        arr2[0] = 100;
        console.log(arr1[0]); 

    • Deep Copy:
        A completely new object is created in memory.
        Changes to one do NOT affect the other.
*/


// ================== ARRAY DECLARATIONS ==================

const numArr = [1, 2, 3, 4];                  // Numbers
const strArr = ["akshit", "abhinav"];         // Strings
const boolArr = [true, false];                // Booleans

const newArr = new Array(0, 1, 2, 3);          // Using constructor



// ================== ARRAY METHODS ==================

// Push - add at end
newArr.push(6);
newArr.push(7);
console.log(newArr);  

// Pop - remove last
newArr.pop();
console.log(newArr);  

// Unshift - add at beginning 
newArr.unshift(8);
console.log(newArr);  
// but this is not good practise because this shift all the element of array
// which puts loads on pc and is not optamised

// Shift - remove from beginning
newArr.shift();
newArr.shift();
console.log(newArr); 



// ================== SEARCH & CONVERT ==================

const checkArr = [1, 2, 3, 4, 5];

// includes() → true/false
console.log(checkArr.includes(3));  
console.log(checkArr.includes(10));  

// indexOf() → index or -1
console.log(checkArr.indexOf(3));    
console.log(checkArr.indexOf(10));   

// join() → convert array to string
const joined = checkArr.join();       
console.log(joined);                 
console.log(typeof joined);     

// With custom separator
console.log(checkArr.join(" - "));   // "1 - 2 - 3 - 4 - 5"



// ================== SLICE VS SPLICE ==================

// --- SLICE ---
const x = [1, 2, 3, 4, 5, 6];
console.log("Before Slice:", x);

const sliced = x.slice(2, 4);       
//   1. give a sub-array from (2, 4] not include the last range
//   2. Does not manipulate the orginal array

console.log("Sliced:", sliced);   
console.log("After Slice:", x);     


// --- SPLICE ---
const a = [1, 2, 3, 4, 5, 6];
console.log("Before Splice:", a);

const spliced = a.splice(2, 4);     
//  1. give a sub-array from (2,4) includes the last range  
//  2. This manipulate the original array
//  3. This removes the elements from the org arry and gives them into another array where splice is used 

console.log("Spliced:", spliced);   
console.log("After Splice:", a);  


/*
    === Array Methods Summary ===

    | Method       | Mutates? | Returns            | Description                        |
    |--------------|----------|--------------------|------------------------------------|
    | push(val)    | ✅ Yes   | New length         | Add at end                         |
    | pop()        | ✅ Yes   | Last item removed  | Remove from end                    |
    | unshift(val) | ✅ Yes   | New length         | Add at beginning (slow for big arr)|
    | shift()      | ✅ Yes   | First item removed | Remove from beginning              |
    | includes(x)  | ❌ No    | Boolean            | Check if value exists              |
    | indexOf(x)   | ❌ No    | Index / -1         | Find index of value                |
    | join()       | ❌ No    | String             | Convert to comma-separated string  |
    | slice(a, b)  | ❌ No    | New array          | Copy range (a to b-1)              |
    | splice(a, n) | ✅ Yes   | Removed elements   | Modify array (remove/replace/add)  |


*/
