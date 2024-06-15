// Destructuring Array and Object

// Easy
/**
 * Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
 * In these examples, we destructure an array and an object to extract their elements into separate variables.
 */
const fruits = ["Apple", "Banana", "Cherry"];
const [first, second, third] = fruits;
console.log(first); // Apple
console.log(second); // Banana

const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 30

// Medium
/**
 * Destructuring with default values and nested destructuring:
 * The first example shows how to set default values if a certain element is not present in the array.
 * The second example demonstrates extracting nested properties from an object.
 */
const colors = ["Red", "Green"];
const [primary, secondary, tertiary = "Blue"] = colors;
console.log(tertiary); // Blue

const student = {
  id: 1,
  details: { name: "Jane", grade: "A" },
};

const {
  details: { name: studentName, grade },
} = student;
console.log(studentName); // Jane
console.log(grade); // A

// Hard
/**
 * Destructuring in function parameters and swapping variables:
 * These examples show how to destructure directly in function parameters and how to swap variable values using array destructuring.
 */
function displayPerson({ name, age, address: { city } }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const personInfo = {
  name: "Alice",
  age: 25,
  address: { city: "Wonderland" },
};
displayPerson(personInfo);

let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5

// Spread Operator

// Easy
/**
 * The spread operator (...) allows an iterable such as an array or object to be expanded in places where zero or more arguments or elements are expected.
 * These examples demonstrate spreading arrays and objects.
 */
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Medium
/**
 * Copying and merging using spread:
 * The first example shows how to copy an array. The second example demonstrates merging two objects.
 */
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copiedArray); // [1, 2, 3, 4]

const user = { name: "Bob" };
const preferences = { name: "dark" };
const settings = { ...user, ...preferences };
console.log(settings); // { name: 'Bob', theme: 'dark' }

// Hard
/**
 * Spread with function arguments and deep copies:
 * These examples show how to use spread syntax to pass array elements as arguments to a function and to create deep copies of nested objects.
 */
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

const nestedObj = { a: { b: 1 }, c: 2 };
const deepCopy = { ...nestedObj, a: { ...nestedObj.a } };
deepCopy.a.b = 2;
console.log(nestedObj.a.b); // 1
console.log(deepCopy.a.b); // 2

// Rest Pattern

// Easy
/**
 * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
 * This example shows a function using rest parameters to sum all its arguments.
 */
function add(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(add(1, 2, 3, 4, 5, 6)); // 10

// Medium
/**
 * Rest with array and object destructuring:
 * These examples demonstrate how to use rest syntax to collect the remaining elements of an array or properties of an object.
 */
const [firstFruit, ...restFruits] = [1, 2, 3, 4];
console.log(firstFruit); // 1
console.log(restFruits); // [2, 3, 4]

const { a: firstProp, ...otherProps } = { a: 1, b: 2, c: 3 };
console.log(firstProp); // 1
console.log(otherProps); // { b: 2, c: 3 }

// Hard
/**
 * Combining rest and spread, and using rest in function parameters with destructuring:
 * These examples show more complex use cases of rest and spread syntax together.
 */
const numArray = [1, 2, 3, 4, 5];
const [numFirst, numSecond, ...numRest] = numArray;
const newArray = [...numRest, 6, 7];
console.log(newArray); // [3, 4, 5, 6, 7]

function greet({ name, ...info }) {
  console.log(`Hello, ${name}`);
  console.log("Additional info:", info);
}
greet({ name: "Sam", age: 30, city: "NY" });
// Hello, Sam
// Additional info: { age: 30, city: 'NY' }

// ||, &&, ??

// Easy
/**
 * Logical OR (||) and AND (&&) operators:
 * The OR operator returns the first truthy value, while the AND operator returns the first falsy value or the last value if none are falsy.
 */
const userName = "" || "Anonymous";
console.log(userName); // Anonymous

const isLoggedIn = true;
isLoggedIn && console.log("User is logged in"); // User is logged in

// Medium
/**
 * Nullish Coalescing (??):
 * This operator returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
 */
const username = null ?? "Guest";
console.log(username); // Guest

const userObj = { isAdmin: false };
userObj.isAdmin || console.log("Access denied"); // Access denied

// Hard
/**
 * Complex expressions with nullish coalescing and combining logical operators:
 * These examples show how to use the nullish coalescing operator with default values and combine multiple logical operators.
 */
const config = { port: 8080 };
const port = config.port ?? 3000;
console.log(port); // 8080

const userSettings = { theme: "dark" };
const defaultSettings = { theme: "light", fontSize: 16 };
const theme = userSettings.theme ?? defaultSettings.theme;
const fontSize = userSettings.fontSize || defaultSettings.fontSize;
console.log(`Theme: ${theme}, Font Size: ${fontSize}`); // Theme: dark, Font Size: 16

// Loop on Object: .keys, .values, .entries

// Easy
/**
 * Looping through an object's keys and values:
 * These examples show how to use Object.keys() and Object.values() to iterate over an object's properties.
 */
const userObj1 = { name: "Alice", age: 25 };

for (const key of Object.keys(userObj1)) {
  console.log(key);
}
// name, age

for (const value of Object.values(userObj1)) {
  console.log(value);
}
// Alice, 25

// Medium
/**
 * Looping through an object's entries and using for...in loop:
 * These examples show how to use Object.entries() to get key-value pairs and the for...in loop to iterate over an object's properties.
 */
const book = { title: "1984", author: "George Orwell" };

for (const [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}
// title: 1984, author: George Orwell

for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

// Hard
/**
 * Transforming and filtering objects using loops:
 * These examples demonstrate how to transform object keys to uppercase and filter object properties based on certain criteria.
 */
const settingsObj = { theme: "dark", layout: "grid", showSidebar: true };

const capitalizedSettings = {};
for (const [key, value] of Object.entries(settingsObj)) {
  capitalizedSettings[key.toUpperCase()] = value;
}
console.log(capitalizedSettings); // { THEME: 'dark', LAYOUT: 'grid', SHOWSIDEBAR: true }

const filteredSettings = Object.fromEntries(
  Object.entries(settingsObj).filter(
    ([key, value]) => typeof value === "string"
  )
);
console.log(filteredSettings); // { theme: 'dark', layout: 'grid' }

// Data Structure Map and Set

// Easy
/**
 * Using Map and Set:
 * These examples show how to create and use Map and Set, including adding elements and retrieving values.
 */
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log(map.get("name")); // Alice

const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate
console.log(set.size); // 2

// Medium
/**
 * Iterating over Map and Set:
 * These examples demonstrate how to initialize a Map with key-value pairs and iterate over Set elements.
 */
const bookMap = new Map([
  ["title", "1984"],
  ["author", "George Orwell"],
]);
for (const [key, value] of bookMap) {
  console.log(`${key}: ${value}`);
}
// title: 1984, author: George Orwell

const numSet = new Set([1, 2, 3]);
numSet.forEach((value) => console.log(value));
// 1, 2, 3

// Hard
/**
 * Advanced usage of Map and Set:
 * These examples show how to convert a Map to an object, and how to perform set operations like union, intersection, and difference.
 */
const settingsMap = new Map([
  ["theme", "dark"],
  ["layout", "grid"],
]);
const settingsObjMap = Object.fromEntries(settingsMap);
console.log(settingsObjMap); // { theme: 'dark', layout: 'grid' }

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 }

const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set { 3 }

const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // Set { 1, 2 }

// String Methods

// Easy
/**
 * Basic string methods:
 * These examples show how to use includes() to check if a substring exists and startsWith() to check if a string starts with a specific substring.
 */
const phrase = "Hello, world!";
console.log(phrase.includes("world")); // true

console.log(phrase.startsWith("Hello")); // true

// Medium
/**
 * Slicing and splitting strings:
 * These examples demonstrate how to extract a substring using slice() and split a string into an array of substrings using split().
 */
const text = "JavaScript";
console.log(text.slice(0, 4)); // Java

const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(words); // ['The', 'quick', 'brown', 'fox']

// Hard
/**
 * Advanced string methods:
 * These examples show how to replace part of a string using replace() and match a pattern in a string using match() with a regular expression.
 */
const greeting = "Hello, world!";
const newGreeting = greeting.replace("world", "JavaScript");
console.log(newGreeting); // Hello, JavaScript!

const data = "My phone number is 123-456-7890";
const phonePattern = /\d{3}-\d{3}-\d{4}/;
const phoneMatch = data.match(phonePattern);
console.log(phoneMatch[0]); // 123-456-7890
