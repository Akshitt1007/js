

// ============= While Loop =============

// while (condition) {
//   // Code block to execute
// }



// Total sum of given number
let n = 12345
let temp = n
let sum = 0

while ( n > 0) {
    
    let ld = n%10
    sum += ld
    n = Math.floor(n / 10);

    // n=n/10                   
    // because its a dynamic language
    // unlike in java n = 1234
    // this will take n = 1234.5 
    // bec its a dynamic language and can change dynamically what it holds
}
console.log( `Total sum of ${temp} is ${sum}.`);


// Accessing the array

const myArr = [ "Akshit", "Abhinav", "Aryan", "900" ]

let index = 0
while( index < myArr.length ){
    console.log( myArr[index]);
    index++
}







