// // default parameter
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

// greet(); // Output: Hello, Guest!
// greet("John"); // Output: Hello, John!

// passing arguments
// function add(a, b) {
//   return a + b;

// }

// const result = add(5, 3);
// console.log(result); // Output: 8

// // A) First class function , B) HOF
// // A) function simply value => first class
// function greet() {
//   return "Hello!";
// }

// // A) pass function to another function => first class
// function sayHello(greetFunc) {
//   console.log(greetFunc());
// }

// sayHello(greet); // Output: Hello!

// B) function return new function => HOF
// function addSuffix(suffix) {
//   function name(word) {
//     return word + " " + suffix;
//   }
//   return name;
// }

// const func = addSuffix("programmer");
// console.log(func("elyas"));
// console.log(func("ahmad"));
// // B) function receive another function => HOF
// function greetWithName(nameFunc) {
//   console.log("Hello, " + nameFunc() + "!");
// }

// const addMr = addSuffix("Mr.");
// const getName = () => "John";

// greetWithName(addMr.bind(null, getName)); // Output: Hello, Mr.John!

// // what is (this)?
// const person = {
//   name: "John",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}.`);
//   },
// };

// person.greet(); // Output: Hello, my name is John.

// // call bind apply
// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const person = { name: "John" };

// greet.call(person, "Hello"); // Output: Hello, John!
// greet.apply(person, ["Hi"]); // Output: Hi, John!

// // immediately invoked function expression
// (function () {
//   console.log("This function is immediately invoked.");
// })();

// // closure
// function outerFunction() {
//   const outerVariable = "I'm outside!";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// const closureExample = outerFunction();
// closureExample(); // Output: I'm outside!

// this introduction

// const person = {
//   name: "Jane",
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };
// const person = {
//   name: "Jane",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// };
// person.greet(); // Outputs: Hello, my name is Jane!

// let a = 0;

// function increaseNumber() {
//   a++;
//   console.log(a);
// }

// increaseNumber();
// increaseNumber();
// increaseNumber();

// function increaseNumber() {
//   let a = 0;
//   return function () {
//     a++;
//     console.log(a);
//   };
// }

// const counter = increaseNumber();
// counter();
// counter();
// counter();
// counter();

//IIFE

// (function () {
//   console.log("hello i am IIFE");
// })();
