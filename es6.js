// Let Const

let count = 1;
count = 2; // Allowed

const max = 5;
// max = 10; // Error: Assignment to constant variable

// Block scope
if (true) {
  let message = 'Hello';
  console.log(message); // 'Hello'
}
// console.log(message); // Error: message is not defined

// Template Literals
let user = 'Alice';
let greeting = `Welcome, ${user}!`;
console.log(greeting); // 'Welcome, Alice!'

let a = 5;
let b = 10;
console.log(`Sum is ${a + b}`); // 'Sum is 15'


// Arrow Functions
// Traditional function
function add(x, y) {
    return x + y;
  }
  // Arrow function
  const add = (x, y) => x + y;
  console.log(add(2, 3)); // 5
  
  // With multiple statements
  const multiply = (x, y) => {
    let result = x * y;
    return result;
  };


//   Default Parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
  }
  
  greet(); // 'Hello, Guest'
  greet('Bob'); // 'Hello, Bob'

  const newFun = (x = 5, y = 10) => x + y;
  newFun(); // 15
  newFun(100,80) //180
  
//   Array
let fruits = ['apple', 'banana'];

// Adding items
fruits.push('orange'); // ['apple', 'banana', 'orange']

// Removing items
let last = fruits.pop(); // 'orange', fruits is now ['apple', 'banana']

// Iterating with map
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ['APPLE', 'BANANA']

// Filtering
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Using shift and unshift
let colors = ['red', 'green', 'blue'];

// Adding items to the beginning
colors.unshift('yellow'); // ['yellow', 'red', 'green', 'blue']
console.log(colors);

// Removing the first item
let firstColor = colors.shift(); // 'yellow', colors is now ['red', 'green', 'blue']
console.log(colors);
console.log(firstColor);

//  Scoping 
// Function declaration
function sayHello() {
    let message = 'Hello, World!';
    console.log(message);
  }
  
  sayHello(); // 'Hello, World!'
  // console.log(message); // Error: message is not defined
  
  // Global variable
  let globalVar = 'I am global';
  
  function checkScope() {
    console.log(globalVar); // 'I am global'
  }
  
  checkScope();

//   Destructuring
// Array destructuring
let [firstName, lastName] = ['John', 'Doe'];
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// Object destructuring
let user = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
};

let { username, email } = user;
console.log(username); // 'johndoe'
console.log(email); // 'john@example.com'

// Destructuring in function parameters
function displayUser({ username, email }) {
  console.log(`User: ${username}, Email: ${email}`);
}

displayUser(user); // 'User: johndoe, Email: john@example.com'

  
  