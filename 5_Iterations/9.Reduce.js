
// ================= Reduce Method =================

const myArr = [ 1, 2, 3, 4, 5 ]

const initialValue = 0

// Normal Functiom
const Sum = myArr.reduce( function( accumulator, currentValue) {

        console.log( `Accumulator: ${accumulator} and current value: ${currentValue}` )
        return accumulator + currentValue
    }, 0        // This 0 is the value from where we want to start our accumulator value from 
)
console.log( Sum );


// Arrow Function
const SumII = myArr.reduce( (accumulator, currentValue) =>  accumulator+currentValue , 0 )

console.log( SumII);




// in Object

const myCourses = [
    {
        name: "Java",
        by: "Kunal Kushwaha",
        price: 3000
    },
    {
        name: "JS",
        by: "Hitesh Choudhary",
        price: 2000
    },
    {
        name: "cpp",
        by: "Code with Harry",
        price: 1000
    }
]

// To add total cost 
const coursePrice = myCourses.reduce( (acc, myCourses) => acc+ myCourses.price ,0 )

console.log( coursePrice );
