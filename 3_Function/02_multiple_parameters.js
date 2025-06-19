// ====================== Dynamic Parameters ==========================

// For a shopping cart function
// We don't know how many items a customer might purchase.
// So, there can be a different number of arguments (item prices) for each call.

function calculateCartPrice(num1) {
    return `Total item's price is: ${num1}`;
}

console.log(calculateCartPrice(100)); // Works for a single price

console.log(calculateCartPrice(100, 200, 300));
// This does NOT work as expected. Only the first argument (100) is used,
// and the rest are ignored, since the function only receives one parameter.

// One way is to create multiple functions with different parameter counts (function overloading).
// But that's inefficient and leads to a lot of repetitive code.

// To solve this, we use the "rest operator" (...).
// This allows us to accept ANY number of arguments as an array.




// ================= Rest Operator =====================

// "...items" is the rest operator.
// No matter how many arguments you pass, "items" will be an array containing them all.
// This 'rest' is same as 'spread' but there use cases changes on the situation us use
function calculate(...items) {
    return items;
}
console.log(calculate(100, 200, 300, 400)); 

// after explicitly declare two more value
// the first and second value we would be passing will get stored in these value 
// and the rest in the items array
function price( value1, value2, ...items ){
    return items
}
console.log( price( 100, 200, 300, 400));


