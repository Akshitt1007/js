
// ================= For each loop =================

// The for-each loop (also known as the enhanced for loop) is used to iterate through elements in a collection or an array without using an index.
// In JavaScript, the forEach() method is used to execute a function once for each element in an array.

// Syntax:

// array.forEach ( function ( element, index, array ) {
//   // Code to execute for each element
// });

// Or with arrow function:

// array.forEach((element, index, array) => {
//   // Code to execute
// });



const myLanguages = [ "Java", "JavaScript", "CPP", "Python", "Ruby", "Swift", "C" ]


// 1. Normal Way
myLanguages.forEach ( function ( index ) {
    console.log( index );
} )

// 2. Arrow Function
myLanguages.forEach( ( index ) => {
    console.log( index );
})


// 3. passing function
function printing( iteam ){
    console.log( iteam )
}

myLanguages.forEach( printing )
// Here we have to pass the reference not calling the function



// 4. Mutiple parameters
myLanguages.forEach( function( indexValue, indexNumber, fullArr ) {
    console.log( indexValue, indexNumber, fullArr );
})
// indexValue - first parameter gives the index value
// indexNumber - second parameter gives the index 
// fullArr - third parameter gives prints the whole array


// 5. Array of objects

const objectArray = [
    {
        language: "JavaScript",
        shortform: "js"
    },
    {
        language: "Java",
        shortform: "java"
    },
    {
        language: "C++",
        shortform: "cpp"
    },
    {
        language: "Ruby",
        shortform: "rb"
    },
    {
        language: "Python",
        shortform: "py"
    },
    {
        language: "Swift",
        shortform: "urMOM"
    }
]

objectArray.forEach( function ( indexValue, index ) {
    console.log( indexValue, index );
} )
// Therefore because of "FOR EACH loop "
// we can easily just print the object also with its keys 

// If I want only language
objectArray.forEach( function ( indexValue, index ) {
    console.log( indexValue.language );
} )


// Accessing using For Each
const From = [ 1, 2, 3, 4, 5, 6, 7, 99, 100, 11 ]

const variable = From.forEach( function( items) {
    
    if( items == 99 ){
        return items
    }

} )
console.log( variable);
// This will print "undefined" because forEach does not return a value.
// So now we know: forEach is only used for performing actions on each item.
// If we want to return a value or exit early based on a condition,
// we should use a regular for loop or array methods ie:
//  a) Filter method
//  b) Map Method
//  c) Reduce Method


