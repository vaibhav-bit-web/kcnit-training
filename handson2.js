function calculate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return 'Invalid operator';
    }
  }
  
  console.log(calculate(10, 5, '+')); // Output: 15

  //closure
  function counter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const increment = counter();
  console.log(increment()); // Output: 1
  console.log(increment()); // Output: 2

  //destructuring
  const student = {
    name: 'Alice',
    scores: {
      math: 90,
      english: 85
    }
  };
  
  const colors = ['red', 'green', 'blue'];

  
  //Code Injection Prevention Exercise
  let userInput = prompt('Enter your name:');
document.body.innerHTML = '<h1>Welcome, ' + userInput + '</h1>';
//above is the vunerable code
// sanitized code
let userInput = prompt('Enter your name:');
let h1 = document.createElement('h1');
h1.textContent = `Welcome, ${userInput}`;
document.body.appendChild(h1);


if(false)
    {
console.log('The condition is true')
}else{
console.error('The condition is failed')
}

5>7?console.log('the statement is true'):console.error('the statement is false')

switch('sukla'){
    case 'anuj': console.log('Anuj is in love with KCNIT');
    break;
    case 'sukla':console.log('Sukla is not passionated about Kirket');
    break;
    default:console.log('No one is there');
    break
}


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  