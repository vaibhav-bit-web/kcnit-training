function testScope() {
    if (true) {
      var varVariable = 'I am var';
      let letVariable = 'I am let';
      const constVariable = 'I am const';
    }
    console.log(varVariable);   // Accessible
    // console.log(letVariable); // Error
    // console.log(constVariable); // Error
  }
  
  testScope();
  

//    task 2
let nums = [10, 20, 30];

nums.unshift(5);  // [5, 10, 20, 30]
nums.push(40);    // [5, 10, 20, 30, 40]
nums.splice(1, 1); // Removes element at index 1

let total = nums.reduce((sum, num) => sum + num, 0);
console.log(total); // Output: 105
