// **Understanding JavaScript Promises (2025)**

// JavaScript Promises are a core feature of modern JavaScript used to manage asynchronous operations effectively. They provide a cleaner, more readable way to handle tasks like API calls, file reading, or any operation that doesn’t produce immediate results.

// ### **What is a Promise?**
// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation. It allows you to attach callbacks to handle the result or error.

// A Promise can have three states:
// 1. **Pending**: The initial state, neither fulfilled nor rejected.
// 2. **Fulfilled**: The operation completed successfully.
// 3. **Rejected**: The operation failed.

// ### **Creating a Promise**
// You can create a Promise using the `Promise` constructor, which accepts a function with two parameters, `resolve` and `reject`.

// ```javascript
// let promise = new Promise((resolve, reject) => {
//     let success = true; // Simulating an operation

//     if (success) {
//         resolve("Operation successful");
//     } else {
//         reject("Operation failed");
//     }
// });
// ```

// ### **Consuming a Promise**
// To handle the outcomes of a Promise, use the `.then()`, `.catch()`, and `.finally()` methods:

// ```javascript
// promise
//     .then(result => {
//         console.log("Success:", result);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("Operation complete");
//     });
// ```

// ### **Promise Chaining**
// Promises can be chained to execute multiple asynchronous operations in sequence.

// ```javascript
// let fetchData = new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 1000);
// });

// fetchData
//     .then(data => {
//         console.log(data);
//         return "Processing data";
//     })
//     .then(processed => {
//         console.log(processed);
//     })
//     .catch(error => {
//         console.error("Error occurred:", error);
//     });
// ```

// ### **Async/Await**
// Introduced in ES2017, `async` and `await` simplify working with Promises. They make asynchronous code look synchronous.

// ```javascript
// async function fetchData() {
//     try {
//         let response = await new Promise(resolve => {
//             setTimeout(() => resolve("Data fetched"), 1000);
//         });
//         console.log(response);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// fetchData();
// ```

// ### **Common Patterns**

// #### **Promise.all**
// Executes multiple Promises in parallel and waits for all of them to resolve.

// ```javascript
// let promise1 = Promise.resolve(10);
// let promise2 = Promise.resolve(20);

// Promise.all([promise1, promise2])
//     .then(results => console.log("Results:", results))
//     .catch(error => console.error("Error:", error));
// ```

// #### **Promise.race**
// Returns the result of the first Promise to resolve or reject.

// ```javascript
// let slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
// let fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

// Promise.race([slow, fast])
//     .then(result => console.log("Winner:", result))
//     .catch(error => console.error("Error:", error));
// ```

// ### **Error Handling**
// Handle errors gracefully using `.catch()` or `try-catch` for `async/await`.

// ```javascript
// promise
//     .then(data => {
//         throw new Error("Unexpected issue");
//     })
//     .catch(error => {
//         console.error("Caught error:", error.message);
//     });

// async function fetchWithError() {
//     try {
//         let result = await Promise.reject("Failed to fetch");
//     } catch (error) {
//         console.error("Async error:", error);
//     }
// }
// ```

// ### **Best Practices**
// 1. **Always handle errors**: Ensure every Promise has a `.catch()` or `try-catch` block.
// 2. **Use chaining or `async/await` consistently**: Avoid mixing styles.
// 3. **Optimize parallel operations**: Use `Promise.all` for efficiency.
// 4. **Be cautious with `Promise.race`**: Understand its implications in your context.
// 5. **Avoid nested Promises**: Use chaining or `async/await` to flatten the structure.

// ### **Conclusion**
// JavaScript Promises are indispensable for modern web development, providing a robust way to handle asynchronous operations. Combined with `async/await`, they make asynchronous code more readable and maintainable, fostering better development practices in 2025 and beyond.