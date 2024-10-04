let numbers = [1, 2, 3, 4, 5];

// forEach()
numbers.forEach(function(num) {
  console.log(num * 2);
});

// map()
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter()
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce()
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15


// splice() - Adding elements
numbers.splice(2, 0, 6); // Adds 6 at index 2
console.log(numbers); // [1, 2, 6, 3, 4, 5]

// splice() - Removing elements
numbers.splice(2, 1); // Removes 1 element at index 2
console.log(numbers); // [1, 2, 3, 4, 5]

// splice() - Replacing elements
numbers.splice(2, 1, 7); // Replaces 1 element at index 2 with 7
console.log(numbers); // [1, 2, 7, 4, 5]

// splice() - Adding multiple elements
numbers.splice(2, 0, 8, 9); // Adds 8 and 9 at index 2
console.log(numbers); // [1, 2, 8, 9, 7, 4, 5]

// splice() - Removing multiple elements
numbers.splice(2, 2); // Removes 2 elements starting from index 2
console.log(numbers); // [1, 2, 7, 4, 5]

// splice() - Replacing multiple elements
numbers.splice(2, 2, 10, 11); // Replaces 2 elements starting from index 2 with 10 and 11
console.log(numbers); // [1, 2, 10, 11, 5]


// Callback function example

// A simple function that takes a callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// Callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Call the greet function with 'John' and the sayGoodbye function as the callback
greet('John', sayGoodbye);

// Output:
// Hello John
// Goodbye!