// AsyncJS_Promises.js

// Example 1: Using setTimeout to simulate asynchronous behavior

console.log("Example 1: Basic Asynchronous Behavior");

console.log("Before setTimeout");

setTimeout(() => {
  console.log("Inside setTimeout callback after 2 seconds");
}, 2000);

console.log("After setTimeout");

// Example 2: Creating a simple Promise

console.log("\nExample 2: Creating a Promise");

// Function that returns a Promise which resolves after a specified delay
function wait(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Waited for ${delay} milliseconds`);
    }, delay);
  });
}

// Using the wait function
console.log("Before wait function");

wait(3000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  })
  .finally(() => {
    console.log("Finished waiting");
  });

console.log("After wait function");

// Example 3: Chaining Promises

console.log("\nExample 3: Chaining Promises");

function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 1 completed");
    }, 2000);
  });
}

function step2(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${message}, then Step 2 completed`);
    }, 1000);
  });
}

console.log("Before step1");

step1()
  .then((result) => {
    console.log(result);
    return step2(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

console.log("After step1");
