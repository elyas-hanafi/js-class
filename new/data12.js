// String Methods

// 1. toLowerCase() and toUpperCase()
let greeting = "Hello World";
console.log(greeting.toLowerCase()); // "hello world"
console.log(greeting.toUpperCase()); // "HELLO WORLD"

// 2. charAt() and charCodeAt()
let word = "JavaScript";
console.log(word.charAt(2)); // "v"
console.log(word.charCodeAt(2)); // 118 (Unicode value of 'v')

// 3. slice(), substr(), and substring()
let message = "JavaScript is fun!";
console.log(message.slice(0, 10)); // "JavaScript"
console.log(message.substr(11, 2)); // "is"
console.log(message.substring(0, 10)); // "JavaScript"

// 4. indexOf(), lastIndexOf(), includes(), startsWith(), and endsWith()
let sentence = "Learning JavaScript is awesome!";
console.log(sentence.includes("awesome")); // true
console.log(sentence.startsWith("Learning")); // true
console.log(sentence.endsWith("awesome!")); // true

// 5. trim(), concat(), and repeat()
let text = "   Enjoy coding!   ";
console.log(text.trim()); // "Enjoy coding!"
console.log("Code".concat(" in JavaScript")); // "Code in JavaScript"
console.log("Fun".repeat(3)); // "FunFunFun"

// Number Methods

// 1. toFixed(), toPrecision(), and toString()
let num = 42.98765;
console.log(num.toFixed(2)); // "42.99"
console.log(num.toPrecision(4)); // "42.99"
console.log(num.toString()); // "42.98765"

// 2. parseInt() and parseFloat()
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.34em")); // 12.34

// 3. isNaN(), isFinite(), and Number()
console.log(isNaN("NotANumber")); // true
console.log(isFinite(2021)); // true
console.log(Number("12345")); // 12345

// 4. Math methods
console.log(Math.floor(7.8)); // 7
console.log(Math.ceil(5.3)); // 6
console.log(Math.round(4.6)); // 5

// Creative Example

// This program accepts a user input, converts it to uppercase, trims it,
// and calculates the area of a circle based on a numeric input. It also demonstrates rounding and formatting.

let userInput = "   learn JavaScript!   ";
let formattedInput = userInput.trim().toUpperCase();
console.log("Formatted Input: ", formattedInput); // "LEARN JAVASCRIPT!"

let radius = parseFloat("7.25");
let area = Math.PI * Math.pow(radius, 2);
console.log("Area of Circle: ", area.toFixed(2)); // "Area of Circle: 165.13"

// Rounding Example:
let randomNum = Math.random() * 100;
console.log("Random Number (Rounded):", Math.round(randomNum)); // Output varies
