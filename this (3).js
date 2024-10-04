// Handling this Keyword

const obj = {
    name: "Normal Function",
    showName: function() {
        console.log(this.name);
    }
};
obj.showName(); // "Normal Function"

// Arrow Function
const obj = {
    name: "Arrow Function",
    showName: () => {
        console.log(this.name);
    }
};
obj.showName(); // undefined


// normal function
function normalFunction() {
    console.log(arguments); // Logs all arguments
}
normalFunction(1, 2, 3); // [1, 2, 3]


// arrowFun
const arrowFunction = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
};


// normal fun as constructoe
function Person(name) {
    this.name = name;
}
const john = new Person("John");
console.log(john.name); // "John"


// Arrow Function
const Person = (name) => {
    this.name = name;
};
const john = new Person("John"); // TypeError: Person is not a constructor
