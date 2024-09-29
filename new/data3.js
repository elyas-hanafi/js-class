// ================================
// Level 1 Examples
// ================================

// 1. Destructuring Arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log("Destructuring Arrays:");
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log("----------------------------");

// 2. Destructuring Objects
const person = {
  firstName: "John",
  lastName: "Doe",
};
const { firstName, lastName } = person;

console.log("Destructuring Objects:");
console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log("----------------------------");

// 3. The Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log("The Spread Operator:");
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
console.log("----------------------------");

// 4. Rest Pattern and Parameters
const [x, ...y] = [1, 2, 3, 4, 5];

console.log("Rest Pattern and Parameters:");
console.log(x); // Output: 1
console.log(y); // Output: [2, 3, 4, 5]
console.log("----------------------------");

// 5. Short Circuiting (&& and ||)
const age = 22;

console.log("Short Circuiting (&& and ||):");
age >= 18 && console.log("Adult"); // Output: Adult
console.log("----------------------------");

// ================================
// Level 2 Examples
// ================================

// 1. Looping Objects: Object Keys, Values, and Entries
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

console.log("Looping Objects: Object Keys, Values, and Entries");
for (const key in car) {
  console.log(`Key: ${key}`); // Output: brand, model, year
}

for (const value of Object.values(car)) {
  console.log(`Value: ${value}`); // Output: Toyota, Camry, 2022
}
k;
for (const [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`); // Output: brand: Toyota, model: Camry, year: 2022
}
console.log("----------------------------");

// 2. Maps_Set Fundamentals
const map = new Map();
map.set("a", 1);
map.set("b", 2);

console.log("Maps_Set Fundamentals:");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // Output: a: 1, b: 2
}
console.log("----------------------------");

// 3. Working with Strings
const message = "Hello, World!";

console.log("Working with Strings:");
console.log(message.includes("World")); // Output: true

const parts = message.split(", ");
console.log(parts); // Output: ['Hello', 'World!']

console.log(message.repeat(3)); // Output: Hello, World!Hello, World!Hello, World!
console.log("----------------------------");
