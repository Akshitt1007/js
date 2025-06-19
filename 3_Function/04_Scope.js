var a = 20;    
let b = 10; 
let c = 88; 

// Anything inside { } is called block scope (local to that block)
// Anything outside {} is global (or function) scope

if (true) {

    var a = 1000;                 // This 'var' redeclares and overwrites the global 'a'
    b = 55;                       // This modifies the existing global 'b' (no 'let' keyword here)

    let c = 122;                  // This 'c' is local to this block only (block-scoped)
    console.log( "Inner: ", c );  // Would log 122 (inside the block)

}

// Outside the block:
// - 'a' is 1000 because 'var' is not block-scoped
// - 'b' is 55 because we reassigned it inside the block
// - 'c' is still 88 because the 'let c' inside the block was a new, local variable

console.log(a); // Output: 1000
console.log(b); // Output: 55
console.log(c); // Output: 88

// Summary:
// - 'var' is function-scoped, not block-scoped; so it leaks out of blocks!
// - 'let' and 'const' are block-scoped; redeclarations inside blocks don't affect the outer variable.
// - Java: strict, redeclaration of same name in same method =  compile-time error.



// ======================= Nested Scopes ===========================


function one() {
    const username = "Akshit";

    function two() {
        const website = "Youtube";
        // Inner function has access to variables from its outer (parent) function
        console.log(username); // Output: Akshit
    }

    // The following line will cause an error because 'website' is not in this scope
    console.log(website); // Uncommenting this will throw: ReferenceError: website is not defined

    two();
}
one();

/*
    Explanation:
    - Inner (child) scopes have access to variables from their outer (parent) scopes.
    - Outer scopes do NOT have access to variables declared in inner (child) scopes.
    - This is called "lexical scoping" or "scope chain".
    - If you try to access 'website' outside of function two(), you'll get a ReferenceError.

*/


// ======================= Methods Declaration =======================

// Way 1: Function Declaration
// It can be called before or after its definition because of hoisting.


console.log(fun1(5));       // we can access it before 

function fun1(num) {
    return num + 1;
}

console.log(fun1(5));       // we can access it after


// Way 2: Function Expression (Anonymous Function) 
// Here, an anonymous function is assigned to a variable.
// This function can only be called after its definition (not hoisted).

console.log(fun2(5));       // this cannot be accessed before will give error

const fun2 = function(num) {    // A variable holding a function  
    return num + 2;
};

console.log(fun2(5)); 