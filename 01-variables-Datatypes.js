// Initially, there is no code in this file.
//  like all programming lanuage we starting this JS program with hello world
//  console.log is used to print the output on the console

console.log("hello world");


// 2. Variables in JS
//  Variables are used to store the data in the memory.
//  In JS, we can declare the variable using var, let, const
//  var is the old way to declare the variable
//  let and const are the new way to declare the variable
//  let is used to declare the variable which can be changed later
//  const is used to declare the variable which can't be changed later
//  In JS, we don't need to mention the data type of the variable
//  JS automatically assign the data type to the variable

let a = 10;
console.log(a);

const b = 20;
console.log(b);

let name = "Rahul";
console.log(name);

// 3. Data types in JS
//  In JS, there are 7 data types
//  1. Number
//  2. String
//  3. Boolean
//  4. Null
//  5. Undefined
//  6. Object
//  7. Symbol

let num = 10;
console.log(num);

let str = "Hello";
console.log(str);

let bool = true;
console.log(bool);

let n = null;
console.log(n);

let u
console.log(u);

let obj = {
    name: "Rahul",
    age: 20
};

console.log(obj);

let sym = Symbol();
console.log(sym);

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2);

