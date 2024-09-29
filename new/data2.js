// =======================================
// 3 - A Closer Look at Functions
// =======================================

// ---------------------------------------
// 3.1 Default Parameters (Beginner)
// ---------------------------------------
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

greet(_, "elyas"); // Outputs: Hello, Guest!
greet("Alice"); // Outputs: Hello, Alice!
greet("Bob", "Hi"); // Outputs: Hi, Bob!

// ---------------------------------------
// 3.2 Function Expressions and Higher-Order Functions (Intermediate)
// ---------------------------------------

// Function Expression
const square = function (n) {
  return n * n;
};
console.log(square(4)); // Outputs: 16

// Higher-Order Function (HOF)
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log); // Outputs: 0, 1, 2 (on separate lines)

repeat(3, function (i) {
  console.log(`${i} squared is ${square(i)}`);
});
// Outputs:
// 0 squared is 0
// 1 squared is 1
// 2 squared is 4

// ---------------------------------------
// 3.3 Functions Returning Functions (Intermediate)
// ---------------------------------------
function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15

// ---------------------------------------
// 3.4 The call and apply Methods (Intermediate)
// ---------------------------------------
const person = {
  name: "Alice",
  greet: function (greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
  },
};

const anotherPerson = {
  name: "Bob",
};

person.greet.call(anotherPerson, "Hi"); // Outputs: Hi, I'm Bob
person.greet.apply(anotherPerson, ["Hello"]); // Outputs: Hello, I'm Bob

// ---------------------------------------
// 3.5 The bind Method (Advanced)
// ---------------------------------------
const bobGreeter = person.greet.bind(anotherPerson);
bobGreeter("Good morning"); // Outputs: Good morning, I'm Bob

// ---------------------------------------
// 3.6 Closures (Advanced)
// ---------------------------------------
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

// =======================================
// 4 - Working With Arrays Advanced
// =======================================

// ---------------------------------------
// 4.1 map (Beginner)
// ---------------------------------------
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n * n);
console.log(squares); // Outputs: [1, 4, 9, 16, 25]

// ---------------------------------------
// 4.2 filter (Beginner)
// ---------------------------------------
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // Outputs: [2, 4]

// ---------------------------------------
// 4.3 find (Beginner)
// ---------------------------------------
const firstEven = numbers.find((n) => n % 2 === 0);
console.log(firstEven); // Outputs: 2

// ---------------------------------------
// 4.4 some (Intermediate)
// ---------------------------------------
const hasEven = numbers.some((n) => n % 2 === 0);
console.log(hasEven); // Outputs: true

// ---------------------------------------
// 4.5 every (Intermediate)
// ---------------------------------------
const allPositive = numbers.every((n) => n > 0);
console.log(allPositive); // Outputs: true

// ---------------------------------------
// 4.6 reduce (Intermediate)
// ---------------------------------------
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // Outputs: 15

// ---------------------------------------
// 4.7 flat (Advanced)
// ---------------------------------------
const nestedArray = [1, [2, [3, 4]], 5];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Outputs: [1, 2, 3, 4, 5]

// ---------------------------------------
// 4.8 flatMap (Advanced)
// ---------------------------------------
const words = ["hello", "world"];
const letters = words.flatMap((word) => word.split(""));
console.log(letters); // Outputs: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
