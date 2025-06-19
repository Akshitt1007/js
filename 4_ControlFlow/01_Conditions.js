
// ========== if Condition ==========

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}


// ========== if...else  ==========

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


// ========== if...else if...else ==========

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ========== nested if-else ==========


 
const price = 1000

if( price >= 700 ){

    if( price >= 1000 ){

        if ( price >= 1500 ){
            console.log( "Price is over 1500");
        }
        else{
            console.log("Price is above 1000 but less than 1500");
        }
    }
    else{
        console.log("Price is above 700 but below 1000");
    }
}
else{
    console.log( "Price is below 700");
}



const userCard = false
const debitCard = true

if ( userCard && debitCard ){
    console.log("Yes you are allowed to shop");
}
else if ( userCard && !debitCard ){
    console.log( "Not allowed, debitcard not avaiable");
}
else if ( !userCard && debitCard ){
    console.log( "Not allowed, userCard not avaiable");
}
else{
    console.log("Not allowed");
}





const userName = false
const mail = false

if ( userName || mail ){                // if any one of the info is correct then we can login else not

    console.log( "You can login");
}
else{
    console.log("You can't login");
}