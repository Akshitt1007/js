

// =============== for...of ===============

// for (let variable of iterable) {
//   // code to run for each element
// }

// - variable – A new variable (or existing one) that holds each item in the iterable.
// - iterable – A data structure that you can loop through (like an array, string, set, map, etc.).


const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// This "index"  is same as the "i" we use is previous 
// and "myArr" is the object we want to access the value
// This automatically gets the length and do the work 
for (const index of myArr) {
    console.log(index);
}



const myString = "Akshit Choudhary"

// This will give the each char of String 
for ( const index of myString ){

    if( index === " " ){
        continue;
    }
    console.log( index );
}
for (const [key,value] of myString) {
    console.log(value);
}


// Iteration over maps
const myMap = new Map()

myMap.set("1", "index 1")
myMap.set("second", "index 2")
myMap.set("3rd", "index 3")
myMap.set("f-o-u-r-t-h", "index 4")
myMap.set("5", "index 5")

for( const [key, value] of myMap ){
    console.log( value );
}



// Iteration over Object keys
const myObject = {
    name: "Rohan",
    class: "G20",
    year: "3-year",
}

for( const index of myObject ){
    console.log( index );
}

// This will give error
// Therefor this for of loop is also not for the objects
// therefore we have another loop for objects 
// ie for in loop
