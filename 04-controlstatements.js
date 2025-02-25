// if conditions

// if (condition) {
//     // code
// }

//example

let age = 18;
if (age >= 18) {
    console.log("You can vote");
}

// if else conditions

// if (condition) {
//     // code
// } else {
//     // code
// }

//example

if (age >= 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}

// if else if conditions

// if (condition) {
//     // code
// } else if (condition) {
//     // code
// } else {
//     // code
// }

//example

if (age >= 18) {
    console.log("You can vote");
}
else if (age < 18 && age >= 13) {
    console.log("You can't vote but can use facebook");
}

else {
    console.log("You can't vote");
}


// switch case

// switch (expression) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code
// }

//example

let day = 5;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);
