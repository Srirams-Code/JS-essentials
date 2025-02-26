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

// 2. pop()
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(fruits.pop());
console.log(fruits);

// 3. shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(fruits.shift());
console.log(fruits);

// 4. unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(fruits.unshift("apple"));
console.log(fruits);

// 5. concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let fruits2 = ["orange", "mango"];
let allFruits = fruits.concat(fruits2);
console.log(allFruits);

// 6. includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(fruits.includes("apple"));
console.log(fruits.includes("orange"));

// 7. indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("orange"));

// 8. join()
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
console.log(fruits.join());
console.log(fruits.join(" "));
console.log(fruits.join(" | "));
console.log(fruits.join(" + "));
console.log(fruits.join(" - "));
console.log(fruits.join(" * "));
console.log(fruits.join(" / "));

// 9. reverse()
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
console.log(fruits.reverse());

// 10. slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(fruits.slice(1, 3));
console.log(fruits.slice(1));

// 11. splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(fruits.splice(1, 1));

// 12. sort()
// The sort() method sorts the elements of an array in place and returns the sorted array.
console.log(fruits.sort());

// 13. map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers2 = [1, 2, 3, 4, 5];
let square = numbers2.map(function (num) {
    return num * num;
});
console.log(square);

// 14. filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let numbers3 = [1, 2, 3, 4, 5];
let even = numbers3.filter(function (num) {
    return num % 2 === 0;
});
console.log(even);

// 15. reduce()
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce(function (total, num) {
    return total + num;
});
console.log(sum);

// 16. forEach()
// The forEach() method executes a provided function once for each array element.
let numbers5 = [1, 2, 3, 4, 5];
numbers5.forEach(function (num) {
    console.log(num);
});

