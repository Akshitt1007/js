

// =================== FOR LOOP ===================

// for (initialization; condition; increment) {
//   Code to run in each iteration
// }


// example:
for ( let index = 1; index <=10; index++ ){

    console.log( `${2} x ${index} = ${ index*2 }`);
    
    if( index == 10 ){
        console.log( "Table ended");
    }
}


// Pyramid using for loop:
for ( let i = 0; i < 5; i++ ){
    let stars = ""
    let starsII = ""

    for( let j = i; j < 5; j++ ){
        stars += " "
    }

    for (let j = 0; j <= i; j++) {
        starsII += "* ";
    }
    console.log( stars + starsII );
}


// PyramidII using for loop:
const rows = 5;

for (let i = 0; i < rows; i++) {
    let line = "";

    // Add spaces for left alignment
    for (let j = 0; j < rows - i - 1; j++) {
        line += "  ";
    }

    // Left half stars
    for (let j = 0; j <= i; j++) {
        line += "* ";
    }

    // Right half stars
    for (let j = 0; j <= i; j++) {
        line += "* ";
    }

    console.log(line);
}

// Accessing array
const myArr = [ "Akshit", "Abhinav", "Aryan", "Rohan" ]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log( element);
}


console.log(" ");

// ======================== Break and Continue ========================

// break
const bookName = ["English", "Hindi", "Maths", "History", "Civics", "Ecnomics" ]

for (let index = 0; index < bookName.length; index++) {
    const element = bookName[index];
    
    if ( element == "History"){
        console.log( element);
        break;                                          // WHen a break condition happens then the flow exist the loop
    }
}

console.log(" ");

// continue
const bookNameII = ["English", "Hindi", "Maths", "History", "Civics", "Ecnomics" ]

for (let index = 0; index < bookNameII.length; index++) {
    const element = bookNameII[index];
        
    if ( element == "History"){
        continue;                                          // WHen a continue condition happens then the flow skips that iteration and moves on
    }

    console.log( element );
}

