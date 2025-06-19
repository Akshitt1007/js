
// ============= For in ==============

const myObject = {

    cpp: "c++",
    js: "Javascript",
    java: "Java",
    rb: "Ruby"    
}


for (const key in myObject) {
    console.log( key);
}

for (const key in myObject) {
    console.log( myObject[key] );
}

for (const key in myObject) {
    console.log( `${key} -> is the shortcut for ${ myObject[key] }` );
}



// Now accessing the array 

const myArr = ["Monday", "Tuesday", "Wednesday", "Thuresday", "Friday", "Saturday", "Sunday" ]

for( const key in myArr ){
    console.log( key );         // We see that it will print the keys and not the value
}

for( const key in myArr ){
    console.log( myArr[key] );        
}

