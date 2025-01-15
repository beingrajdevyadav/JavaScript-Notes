// Here are detailed notes on using the Fetch API in JavaScript as of 2025:

// ---

// ### **Overview**
// The Fetch API is a modern interface for making HTTP requests in JavaScript. It provides a simpler, more flexible way to interact with resources over the network compared to older techniques like `XMLHttpRequest`.

// ---

// ### **Basic Syntax**
// ```javascript
// fetch(url, options)
//   .then(response => {
//     // Handle the response object
//   })
//   .catch(error => {
//     // Handle errors
//   });
// ```

// ---

// ### **Key Features**
// 1. **Promise-Based**:
//    - The Fetch API uses promises, which makes it easier to handle asynchronous code.
//    - Supports `async/await` for cleaner and more readable code.

// 2. **Streaming Responses**:
//    - Fetch allows you to process the response stream as it arrives (useful for large data).

// 3. **Better Error Handling**:
//    - `fetch` only rejects on network errors (not HTTP errors like 404 or 500).
//    - Must check the `response.ok` property to determine if the request was successful.

// ---

// ### **Basic Example**
// ```javascript
// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json(); // Parse the JSON from the response
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// ```

// ---

// ### **Options Object**
// The `options` object allows you to customize the request. It includes the following properties:

// #### **Common Properties**
// - **method**: HTTP method (e.g., `GET`, `POST`, `PUT`, `DELETE`).
// - **headers**: Object containing HTTP headers.
// - **body**: Request body (used with methods like `POST` or `PUT`).
// - **mode**: Request mode (`cors`, `no-cors`, `same-origin`).
// - **credentials**: Authentication (`omit`, `same-origin`, `include`).
// - **cache**: Cache mode (`default`, `no-store`, `reload`, etc.).

// #### **Example**
// ```javascript
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'John', age: 30 }),
// };

// fetch('https://api.example.com/users', options)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// ```

// ---

// ### **Advanced Features**
// #### **1. Handling Timeouts**
// Fetch does not natively support request timeouts, but you can implement it with `AbortController`.
// ```javascript
// const controller = new AbortController();
// const timeout = setTimeout(() => controller.abort(), 5000); // Timeout after 5 seconds

// fetch('https://api.example.com/data', { signal: controller.signal })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => {
//     if (error.name === 'AbortError') {
//       console.error('Request timed out');
//     } else {
//       console.error('Error:', error);
//     }
//   })
//   .finally(() => clearTimeout(timeout));
// ```

// #### **2. Streaming Response Body**
// Useful for large files or real-time updates.
// ```javascript
// fetch('https://api.example.com/stream')
//   .then(response => {
//     const reader = response.body.getReader();
//     const decoder = new TextDecoder('utf-8');

//     reader.read().then(function process({ done, value }) {
//       if (done) {
//         console.log('Stream complete');
//         return;
//       }
//       console.log(decoder.decode(value));
//       return reader.read().then(process);
//     });
//   })
//   .catch(error => console.error('Error:', error));
// ```

// #### **3. Uploading Files**
// ```javascript
// const formData = new FormData();
// formData.append('file', fileInput.files[0]);

// fetch('https://api.example.com/upload', {
//   method: 'POST',
//   body: formData,
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// ```

// ---

// ### **Key Differences from XMLHttpRequest**
// | Feature              | Fetch API                  | XMLHttpRequest          |
// |----------------------|---------------------------|-------------------------|
// | Syntax               | Promise-based             | Callback-based          |
// | Streaming            | Supports streaming        | Does not support streaming |
// | Response Type        | Flexible (JSON, Blob, etc.) | Needs manual parsing     |
// | Timeout Handling     | Manual with `AbortController` | Built-in `timeout` property |

// ---

// ### **Browser Compatibility**
// The Fetch API is widely supported in modern browsers, including mobile. However, for older environments or specific use cases, polyfills (like `whatwg-fetch`) may be required.

// ---

// ### **Tips**
// 1. **Check Response Status**:
//    Always verify `response.ok` or `response.status` to handle HTTP errors.
   
// 2. **Use `async/await`**:
//    Simplifies working with promises.
//    ```javascript
//    async function fetchData() {
//      try {
//        const response = await fetch('https://api.example.com/data');
//        if (!response.ok) {
//          throw new Error(`HTTP error! Status: ${response.status}`);
//        }
//        const data = await response.json();
//        console.log(data);
//      } catch (error) {
//        console.error('Error:', error);
//      }
//    }
//    fetchData();
//    ```

// 3. **Secure Endpoints**:
//    Always validate and sanitize data when interacting with APIs.

// 4. **Handle CORS**:
//    Ensure the server is configured to allow cross-origin requests if necessary.

// --- 

// These notes provide a comprehensive guide to effectively using the Fetch API in 2025.