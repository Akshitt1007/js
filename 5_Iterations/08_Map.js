
// ========================== MAPs Method ==========================

// The map() method is used to create a new array by transforming each element of the original array using a callback function.

//  Syntax:
//      const newArray = array.map((element, index, array) => {
//          return newValue;
//      });

// 1. element - current element in the array
// 2. index (optional) - index of the current element
// 3. array (optional) - the original array



// Example 1: Double each number
const Arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newArr = Arr.map( function( nums ){
    return nums*2
})

console.log( Arr )
console.log( newArr );



// Example 2: Extract property from objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

const names = users.map( (user) => {
    return user.name
});

console.log(names); 

// using normal for each
let name = []
users.forEach( function(nums ){
    name.push( nums.name )
})
console.log(name);


// Chaining
const xyz = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

// using muitple map
// array.map().map()
// the second map will take the array that is modified by the map I
const abc = xyz
            .map( function(num) { return num*10} )
            .map( function(num) {return num+1})
            .filter( (num) => { return num%2!=0 }) 

console.log( abc );
/*  
    1. .map( function(num) { return num * 10 })
        Transforms:
        [10, 20, ..., 100]
        → [100, 200, 300, ..., 1000]

    2. .map( function(num) { return num + 1 })
        Adds 1 to each value:
        [100, 200, 300, ..., 1000]
        → [101, 201, 301, ..., 1001]

    3. .filter( num => num % 2 == 0 )
        Keeps only even numbers:
        But all numbers are odd now (101, 201, etc.)
        → []   empty array
*/