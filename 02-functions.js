// this file we going to learn about functions in JS
// Functions are used to perform the specific task
// Functions are used to avoid the code duplication
// Functions are used to make the code more readable

// 4. Functions in JS
//  In JS, we can declare the function using function keyword

//  Syntax:
//  function functionName() {
//      // code 
//  }

//  Example:

function hello() {
    console.log("Hello World");
}

// always we needs to call the function to execute the code inside the function

hello(); 

// 5. Parameters in JS
//  We can pass the parameters to the function

//  Syntax:
//  function functionName(parameter1) {
//      // code
//  }

//  Example:

function greet(name) {
    return console.log("Hello " + name);
}

greet("Rahul");

// we can also pass the multiple parameters to the function

function add(a, b) {
    return console.log(a + b);
}

add(10, 20);

// Higher Order Functions
// Functions that operate on/with other functions. They can:
// 1. Take functions as arguments
// 2. Return a function

// 6. Callback Functions
//  A callback function is a function that is passed as an argument to another function
//  This function is executed inside the another function

//  Example:

// function greet(name , callback) {
//     return callback(name);
// }

function sayName(name) {
    console.log("Hey " + name);
}

greet("Rahul", sayName);


// 7. Arrow Functions

//  Arrow functions allows us to write the shorter function syntax

//  Syntax:
//  let functionName = (parameters) => {
//      // code
//  }

//  Example:

let hello1 = () => {
    console.log("Hello World from arrow function");
}

hello1();
