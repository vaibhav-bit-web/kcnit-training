let numbers=[1,2,3,4,5,6];
numbers.splice(3,1,8);
console.log(numbers);
let sliced =numbers.slice(2,4);
console.log(sliced);
let obj= [1, 2, 3, 4, 5,6,7];
obj.forEach(function(num) {
    console.log(num * 2);
  });
  let sum = numbers.reduce((total, num) => total + num, 0);
  console.log(sum);
  let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);




function calculate(a,b,c) {
    switch (c) {
        case "*":
            answer = a * b;
            break;
        case "/":
            answer = a / b;
            break;
        case "+":
            answer = a + b;
            break;
        case "-":
            answer = a - b;
            break
    }
    return(answer);
}
calculate(5,6,"+");




function calculate(a,b,c) {
    switch (c) {
        case "*":
            console.log(a * b);
            break;
        case "/":
            console.log(a / b);
            break;
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
    }
}
calculate(5,6,'*');


let sum = 10 + 15; 
let product = 20 * 5; 


let a = 15;
a += 5; 

let isEqual = (5 == '5'); 
let isStrictEqual = (5 === '5'); 
let isStrictEqual = ('6' === '5'); 


let isAdult = true;
let hasID = false;
let canEnter = isAdult && hasID; 



const numbers1 = [1, 2, 3, 4];
const sum = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 


let list=[]

let p='234';
num1=Number(p);
console.log(p*2);