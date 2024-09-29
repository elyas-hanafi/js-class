// ===================================
// Educational Examples: Map and Set in JavaScript
// ===================================

console.log("===== Map Examples =====");

// 1. Creating a Map
const map = new Map();

// 2. Adding Entries to a Map
map.set("name", "John");
map.set("age", 30);
map.set("isMarried", true);

console.log("Map after adding entries:");
console.log(map); // Output: Map(3) { 'name' => 'John', 'age' => 30, 'isMarried' => true }

// 3. Accessing Values in a Map
console.log("\nAccessing values:");
console.log(map.get("name")); // Output: John
console.log(map.get("age")); // Output: 30

// 4. Checking if a Key Exists
console.log("\nChecking if key exists:");
console.log(map.has("age")); // Output: true
console.log(map.has("children")); // Output: false

// 5. Deleting Entries
map.delete("isMarried");

console.log('\nMap after deleting "isMarried":');
console.log(map); // Output: Map(2) { 'name' => 'John', 'age' => 30 }

// 6. Getting the Size of the Map
console.log("\nSize of the map:");
console.log(map.size); // Output: 2

// 7. Iterating Over a Map
console.log("\nIterating over a map:");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // Output: name: John, age: 30
}

// 8. Clearing the Map
map.clear();

console.log("\nMap after clearing:");
console.log(map); // Output: Map(0) {}

console.log("\n===== Set Examples =====");

// 1. Creating a Set
const set = new Set();

// 2. Adding Values to a Set
set.add(1);
set.add(2);
set.add(3);
set.add(1); // Duplicate values are ignored

console.log("\nSet after adding values:");
console.log(set); // Output: Set(3) { 1, 2, 3 }

// 3. Checking if a Value Exists
console.log("\nChecking if value exists:");
console.log(set.has(2)); // Output: true
console.log(set.has(5)); // Output: false

// 4. Deleting Values from a Set
set.delete(3);

console.log("\nSet after deleting 3:");
console.log(set); // Output: Set(2) { 1, 2 }

// 5. Getting the Size of the Set
console.log("\nSize of the set:");
console.log(set.size); // Output: 2

// 6. Iterating Over a Set
console.log("\nIterating over a set:");
for (const value of set) {
  console.log(value); // Output: 1, 2
}

// 7. Converting a Set to an Array
const setToArray = [...set];
console.log("\nSet converted to array:");
console.log(setToArray); // Output: [1, 2]

// 8. Clearing the Set
set.clear();

console.log("\nSet after clearing:");
console.log(set); // Output: Set(0) {}
