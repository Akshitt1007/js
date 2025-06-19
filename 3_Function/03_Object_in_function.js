// ====================== Object Passing ======================

const user = {
    name: "Akshit Choudhary",
    id: "2310991769",
    email: "akshit1769.be23@chitkara.edu.in"
}

// Function that accepts any object and prints specific properties
function objectPassing(anyObject) {
    console.log(`Username is ${anyObject.name} and the email is ${anyObject.email}.`);
}

// Passing the variable
objectPassing(user);

// Passing an object directly
objectPassing({
    name: "Abhinav Choudhary",
    id: "2310991789",
    email: "abhinav1789.be23@chitkara.edu.in"
});


// ====================== Array Passing ======================

// Function that prints the first and last element of an array
function arrayPassing(array) {
    console.log(array[0]);
    console.log(array[array.length - 1]);
}

const nameArray = ["Akshit", "Abhinav", "Aryan", "Anshul"];
arrayPassing(nameArray);

arrayPassing([200, 300, 400, 500, 600, 700, 800, 900]);