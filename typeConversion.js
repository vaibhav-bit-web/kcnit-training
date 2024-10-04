let numStr = '12345';
let num = Number(numStr); // Converts string to number
let str1 = String(num); // Converts number to string
console.log(typeof num); // Output: 'number'

let bool = Boolean(0); // false
let str = String(100); // '100'

// Type Coercion
console.log('6' * 3); // Output: 10 (string '5' is coerced to number)
console.log('3' + 3); // Output: '52' (number 2 is coerced to string)
console.log(str1)