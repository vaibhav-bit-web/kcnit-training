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
