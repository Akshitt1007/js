

// =========================== Filter ===========================

// 1. Filter Method
// Returns a new array containing only elements that pass a condition.
// Syntax:

// array.filter((element, index, array) => {
//   return condition;
// });


// Example 1:
const newArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// We are storing it in a "reqArr" because the filter method returns a array

// Normal function
const reqArr = newArr.filter( function(num)  {
    return num > 4 
})
console.log( reqArr);

// Arrow Function
const reqArrII = newArr.filter( (num) =>  {
    return num > 4 
})
console.log( reqArrII );




// Example 2:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// Direct 
let userBooks = books.filter( (bk) => bk.genre === 'History')

// By return 
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);