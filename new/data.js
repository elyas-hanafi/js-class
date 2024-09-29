// / JavaScript Functions, Scopes, and the 'this' Keyword

// 1. Function Declarations
// Function declarations are the most common way to define functions in JavaScript.
// These functions are hoisted, meaning they can be called before they are defined.

function greet(name) {
  console.log("Hello, " + name + "!");
}

// You can call the function before it's defined due to hoisting:
greet("Alice");

// 2. Function Expressions
// Function expressions are functions assigned to variables. These functions are not hoisted,
// meaning they can only be called after the function expression is defined.

const greetExpression = function (name) {
  console.log("Hello, " + name + "!");
};

// This will work because the function expression is defined before it is called:
greetExpression("Bob");

// 3. Arrow Functions
// Arrow functions are a concise syntax for writing functions in JavaScript.
// They do not have their own 'this' context, which can lead to different behavior in certain situations.

const greetArrow = (name) => {
  console.log("Hello, " + name + "!");
};

greetArrow("Charlie");

// Differences between the three types of functions:
// - Hoisting: Function declarations are hoisted, while function expressions and arrow functions are not.
// - 'this' keyword: Arrow functions do not have their own 'this' context, while function declarations and expressions do.
// - Syntax: Arrow functions offer a more concise syntax, especially for short functions.

// The 'this' Keyword in JavaScript
// 'this' refers to the context in which a function is called. The value of 'this' can change depending on how and where the function is called.

const person = {
  name: "David",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// In this case, 'this' refers to the 'person' object:
person.greet(); // Outputs: "Hello, David"

// Arrow functions do not bind their own 'this'. Instead, they inherit 'this' from the surrounding scope.
const personWithArrow = {
  name: "Eve",
  greet: () => {
    console.log("Hello, " + this.name); // 'this' refers to the global object, not 'personWithArrow'
  },
};

personWithArrow.greet(); // Outputs: "Hello, undefined"

// Scopes in JavaScript
// Scope determines the accessibility of variables, objects, and functions in different parts of your code.

function outerFunction() {
  const outerVariable = "I'm outside!";

  function innerFunction() {
    const innerVariable = "I'm inside!";
    console.log(outerVariable); // Accessible
    console.log(innerVariable); // Accessible
  }

  innerFunction();
  // console.log(innerVariable); // Error: innerVariable is not defined
}

outerFunction();

// - Global Scope: Variables declared outside any function or block are in the global scope.
//   They can be accessed from anywhere in the code.
let globalVar = "I am global!";

function checkGlobalScope() {
  console.log(globalVar); // Accessible
}

checkGlobalScope();

// - Function Scope: Variables declared inside a function are in the function scope.
//   They are only accessible within that function.

function checkFunctionScope() {
  let functionScopedVar = "I am function scoped!";
  console.log(functionScopedVar); // Accessible
}

checkFunctionScope();
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// - Block Scope: Variables declared with 'let' or 'const' inside a block (e.g., an if statement or a for loop)
//   are block-scoped. They can only be accessed within that block.

if (true) {
  let blockScopedVar = "I am block scoped!";
  console.log(blockScopedVar); // Accessible
}

// console.log(blockScopedVar); // Error: blockScopedVar is not defined

// Conclusion:
// Understanding the differences between function declarations, function expressions, and arrow functions,
// along with how 'this' and scopes work, is crucial to writing effective JavaScript code.
