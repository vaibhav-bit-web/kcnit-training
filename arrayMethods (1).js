
// Map()
// Example 1: Doubling each element in an array
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Example 2: Extracting a property from an array of objects
const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

// Example 3: Converting array elements to string
const numArray = [10, 20, 30];
const stringArray = numArray.map(num => String(num));
console.log(stringArray); // ['10', '20', '30']

// Example 4: Adding a constant value to each element
const addTen = numbers.map(num => num + 10);
console.log(addTen); // [11, 12, 13, 14]

// Example 5: Returning an array of boolean values based on condition
const isEven = numbers.map(num => num % 2 === 0);
console.log(isEven); // [false, true, false, true]

// filter()
// Example 1: Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Example 2: Filtering based on object property
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 15 },
    { name: 'Charlie', age: 20 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults); // [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 20 }]

// Example 3: Removing falsy values from an array
const mixedArray = [0, 'hello', false, 42, '', null];
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues); // ['hello', 42]

// Example 4: Filtering words with more than 3 letters
const words = ['cat', 'elephant', 'dog', 'tiger'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords); // ['elephant', 'tiger']

// Example 5: Filtering array of numbers greater than a threshold
const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo); // [3, 4]

// Reduce()
// Example 1: Summing an array of numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10

// Example 2: Finding the maximum value in an array
const max = numbers.reduce((max, current) => current > max ? current : max, 0);
console.log(max); // 4

// Example 3: Concatenating strings
const names = ['Alice', 'Bob', 'Charlie'];
const concatenatedNames = names.reduce((acc, name) => acc + ', ' + name);
console.log(concatenatedNames); // 'Alice, Bob, Charlie'

// Example 4: Flattening an array of arrays
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrayOfArrays.reduce((acc, val) => acc.concat(val), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Example 5: Counting occurrences of elements in an array
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const itemCount = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(itemCount); // { apple: 3, banana: 2, orange: 1 }

// forEach()
// Example 1: Logging each element to the console
numbers.forEach(num => console.log(num)); // 1 2 3 4

// Example 2: Modifying array elements (note: doesn't return a new array)
numbers.forEach((num, index, arr) => arr[index] = num * 2);
console.log(numbers); // [2, 4, 6, 8]

// Example 3: Summing elements without returning
let total = 0;
numbers.forEach(num => total += num);
console.log(total); // 20

// Example 4: Logging array of objects
people.forEach(person => console.log(person.name, person.age));
// Output: Alice 30, Bob 15, Charlie 20

// Example 5: Performing operations based on conditions
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    }
});
// Output: 2 is even, 4 is even

// find()
// Example 1: Finding the first even number
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// Example 2: Finding an object in an array based on a property
const person = people.find(person => person.age === 15);
console.log(person); // { name: 'Bob', age: 15 }

// Example 3: Finding a string in an array
const searchWord = words.find(word => word === 'dog');
console.log(searchWord); // 'dog'

// Example 4: Finding the first number greater than 2
const greaterThanTwoFind = numbers.find(num => num > 2);
console.log(greaterThanTwoFind); // 3

// Example 5: Finding an object where property meets condition
const teenager = people.find(person => person.age >= 13 && person.age <= 19);
console.log(teenager); // { name: 'Bob', age: 15 }

