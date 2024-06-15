// Introduction to Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Original fruits array:", fruits); // Output: ['Apple', 'Banana', 'Cherry']

// The map Method
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log("Doubled numbers using map:", doubledNumbers); // Output: [2, 4, 6, 8, 10]

let doubledNumbersArrow = numbers.map((number) => number * 2);
console.log(
  "Doubled numbers using map with arrow function:",
  doubledNumbersArrow
); // Output: [2, 4, 6, 8, 10]

// The filter Method
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log("Even numbers using filter:", evenNumbers); // Output: [2, 4]

let evenNumbersArrow = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers using filter with arrow function:", evenNumbersArrow); // Output: [2, 4]

// The reduce Method
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log("Sum using reduce:", sum); // Output: 15

let sumArrow = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum using reduce with arrow function:", sumArrow); // Output: 15

// The forEach Method
console.log("Using forEach to print fruits:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});
// Output:
// Apple
// Banana
// Cherry

console.log("Using forEach with arrow function to print fruits:");
fruits.forEach((fruit) => console.log(fruit));
// Output:
// Apple
// Banana
// Cherry

// The sort Method
fruits.sort();
console.log("Fruits array sorted:", fruits); // Output: ['Apple', 'Banana', 'Cherry']

let numbersToSort = [5, 3, 8, 1, 2];
numbersToSort.sort(function (a, b) {
  return a - b;
});
console.log("Numbers sorted:", numbersToSort); // Output: [1, 2, 3, 5, 8]

numbersToSort.sort((a, b) => a - b);
console.log("Numbers sorted with arrow function:", numbersToSort); // Output: [1, 2, 3, 5, 8]

// Other Useful Array Methods

// find
let firstEven = numbers.find((number) => number % 2 === 0);
console.log("First even number using find:", firstEven); // Output: 2

// findIndex
let firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
console.log("First even number index using findIndex:", firstEvenIndex); // Output: 1

// some
let hasEven = numbers.some((number) => number % 2 === 0);
console.log("Array has even number using some:", hasEven); // Output: true

// every
let allEven = numbers.every((number) => number % 2 === 0);
console.log("All numbers are even using every:", allEven); // Output: false

// includes
let hasBanana = fruits.includes("Banana");
console.log("Fruits array includes Banana:", hasBanana); // Output: true

// concat
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log("Combined array using concat:", combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// slice
let slicedNumbers = numbers.slice(1, 3);
console.log("Sliced numbers using slice:", slicedNumbers); // Output: [2, 3]

// splice
fruits.splice(1, 1, "Blueberry");
console.log("Fruits array after splice:", fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// join
let fruitString = fruits.join(", ");
console.log("Fruits joined into string:", fruitString); // Output: 'Apple, Blueberry, Cherry'

// reverse
let reversedNumbers = numbers.reverse();
console.log("Reversed numbers array:", reversedNumbers); // Output: [5, 4, 3, 2, 1]
