// arrays

// 1. Create an array of numbers
// 2. Create an array of strings
// 3. Create an array of mixed data types
// 4. Create an array of arrays
// 5. Access an array element

// 1. Create an array of numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 2. Create an array of strings
let strings = ["apple", "banana", "cherry"];
console.log(strings);

// 3. Create an array of mixed data types
let mixed = [1, "apple", true];
console.log(mixed);

// 4. Create an array of arrays

let arrays = [[1, 2, 3], ["apple", "banana", "cherry"], [true, false]];
console.log(arrays);

// 5. Access an array element

console.log(numbers[0]);
console.log(strings[1]);
console.log(mixed[2]);
console.log(arrays[1][0]);


// array methods
// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. concat()
// 6. includes()
// 7. indexOf()
// 8. join()
// 9. reverse()
// 10. slice()
// 11. splice()
// 12. sort()
// 13. map()
// 14. filter()
// 15. reduce()
// 16. forEach()


// 1. push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.push("orange"));
console.log(fruits);