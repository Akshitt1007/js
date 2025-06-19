

// =============== Switch Case ===============

//syantax: 

// switch(expression) {
//   case value1:
//     // Code block
//     break;
//   case value2:
//     // Code block
//     break;
//   default:
//     // Default code block
// }


// example:
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Weekend");
}



let color = "green";

switch (color) {
    case "red":
        console.log("Stop");
        break;                      

    case "green":
        console.log("Go");              // IF we dont put break then all the further cases will also run inorder to stop them we use break

    case "yellow":
        console.log("Caution");

    default:
        console.log("Traffic Light error");
}
