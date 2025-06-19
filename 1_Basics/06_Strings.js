let name = "Akshit Choudhary"
let age = 20

// Using string concatenation (old/traditional way)
console.log("My name is " + name + " and my age is " + age + ".");

// Using template literals (modern and recommended way)
console.log(`My name is ${name} and my age is ${age}.`);

/*
    Both of the above syntaxes produce the same output.
    However, the second approach, known as template literals, is preferred in the industry.
    Template literals (enclosed in backticks: `) allow for easier and more readable string interpolation by embedding expressions inside ${}.
    This makes the code cleaner, especially when handling complex or multiline strings.

    Example:
        let city = "Delhi";
        console.log(`Hello, my name is ${name} and I live in ${city}.`);

    Template literals also support multiline strings:
        console.log(`This is line 1
        and this is line 2`);
*/



// String methods and character access

// Creating a string object (not recommended; use string literals instead)
let string = new String("Akshit Choudhary");    // string is indexed from 0 to n-1
// let string = "Akshit Choudhary";             // string literal (recommended)



// Accessing the character at any index of a string
console.log(string[0]);          // 'A'
console.log(string[1]);          // 'k'
console.log(string[2]);          // 's'
console.log(string.at(3));       // 'h'
console.log(string.charAt(4));   // 'i'
console.log(string.charAt(5));   // 't'

// To see all the methods/properties available for strings
console.log(string.__proto__);   // This can be viewed in the browser console 

// Common string methods
console.log(string.length);                  // Length of the string
console.log(string.toLocaleLowerCase());     // Convert to lowercase (locale-sensitive)
console.log(string.concat(" and I am 20 years old."));  // Concatenates strings
console.log(string.indexOf("C"));            // Returns index of first occurrence of 'C'




// Extracting parts of a string
let newString = string.substring(0, 6);      // (0, 6] includes 0 but excludes 6
console.log(newString);                      // 'Akshit'

let anotherString = string.slice(4, 5);      // (4, 5] includes 4 but excludes 5
console.log(anotherString);                  // 'i'

// Trimming and cleaning up strings
let againNewString = "         Akshtit Choudhary                ";
console.log(againNewString);
// .trim() removes whitespace from both ends of the string (start and end)
console.log(againNewString.trim());

// Working with URLs and replacing substrings
let url = "https://akshit.com/akshit%20choudhary";
console.log(url);
console.log(url.replace('%20', '-'));    // Replaces first instance of '%20' with '-'

// To replace all instances, use a regular expression:
console.log(url.replace(/%20/g, '-'));   // Replaces all '%20' with '-'

// Splitting strings into arrays
let abc = "a-b-c-d-e-f-g-h-i-j-k-l-m";
// This split will give an array of strings wherever "-" is used
let array = abc.split("-");
console.log(array);   // ['a', 'b', 'c', ..., 'm']

/*
    Extra notes:
    - Prefer using string literals (let str = "text") over String objects (new String("text")).
    - String methods such as .includes(), .startsWith(), .endsWith(), and .repeat() are also useful for various operations.
    - For advanced string manipulation, consider using regular expressions (RegExp).
    - JavaScript strings are immutable: all string methods return new strings and do not modify the original.
*/