# JavaScript Programming
 ## History 
  Founded by Brendan Eich in 1995<br>
  EcmaScript is a community that Manages JavaScript , <br>
  removes old features brings new features , manages updates<br>
  and overall development of JS.<br>
  Mainly are divided in 2 parts ES5 and before and ES6 and after.<br>
  ES5 had var , ES got let.<br>
  We will study the Document Object Model (DOM) in detail.<br>
# Basics
 JavaScript is executed in web browsers through the browser's JavaScript engine, which interprets and runs the code embedded in HTML pages or linked via external .js files. When a web page is loaded, the browser's engine parses the JavaScript code, executes it, and updates the web page dynamically based on the script’s instructions. The console object is a built-in feature of the browser’s developer tools, used for logging information, debugging, and inspecting code. Methods such as console.log(), console.error(), and console.warn() provide various types of output to the console, aiding developers in tracking the code’s behavior and diagnosing issues.
# Inbuilt Features
 Console, Alert and Prompt , these are part of the browser and no the JavaScript 
 language  and these are built in , in Web Browser Context API. We can use them
 using JavaScript.<br>
 Three main elements are :<br>
 console.log("Nabin") //Prints a normal message <br>
 console.warn() //Prints a warning(in yellow color)<br>
 console.error() //Prints an error(In red color)<br>

 Alert - We can any values and when we relaod browser it shows up as a pop-up 
 to the user.<br>
 alert("Hey"); Shows up when we reload or load browser.<br>

 Prompt - Does the same as alert but also takes a value from the user.<br>
 prompt("Hey);
 <br>
 
# Variables
  In JavaScript, variables and constants store data values. You can declare them using `var`, `let`, or `const`.

### `var`
- Function-scoped (accessible within a function).
- Variables are hoisted but initialized with `undefined`.
- Reassignable.

### `let`
- Block-scoped (accessible within a block `{}`).
- Not hoisted and only exists after declaration.
- Reassignable.

### `const`
- Block-scoped.
- Cannot be reassigned, but the contents of objects or arrays can be mutated.
- Best used for values that shouldn’t change.

**Tip:** Use `let` for variables that can change and `const` for constants.
<br>
JS is connected to memory storage of Chrome which stores data in heap memory and Chrome is connected to Local device's
RAM which is used to load data later.



# Compilers , Interpreters and Windows

### What are Interpreters and Compilers?

- **Interpreter**: An interpreter translates code into machine language line by line and executes it immediately. It doesn't generate an intermediary compiled file. If an error occurs, execution stops at that point.
  
- **Compiler**: A compiler translates the entire code into machine language at once, creating an executable file. Once compiled, the program can run without the compiler. Errors are identified after the entire code is compiled.

### Key Differences Between Interpreters and Compilers

| Feature                   | Interpreter                                  | Compiler                                   |
|---------------------------|----------------------------------------------|--------------------------------------------|
| Translation Process        | Line by line                                 | Entire program at once                     |
| Execution                  | Immediate, while interpreting each line      | After compilation into an executable file  |
| Speed                      | Slower, since translation happens on the fly | Faster execution after compilation         |
| Error Handling             | Stops execution at the error line            | Reports errors after full code compilation |
| Output                     | No intermediate file                         | Produces an executable file                |
| Usage                      | Typically used in scripting languages        | Common in system programming languages     |

### What Does JavaScript Use?

JavaScript is primarily an **interpreted language**, but modern JavaScript engines like **V8** (used in Google Chrome) use a combination of **Just-In-Time (JIT) Compilation**. This means:

- JavaScript code is first **interpreted**, allowing for immediate execution.
- To improve performance, frequently used code segments are compiled **just in time** (during runtime), making execution faster.

Thus, JavaScript takes advantage of both interpretation and compilation for optimized performance.
<br>
Compiler converts the code to machine code and although conversion takes time it runs very very fast , and machine cod is more hardware specific as compared to ByteCode.<br>
Interpreter converts Code to Byte Code , although conversion takes very less time but Byte Code takes more time to run and it is Hardware dependent. <br>
JS is an Interpreted language , whereas C lang and Java are the compiler based languages.
## What are JavaScript Engines?

A **JavaScript engine** is a program or interpreter that executes JavaScript code. It converts JavaScript code into machine code that the system's processor can execute. JavaScript engines are embedded in browsers, and each browser has its own engine for handling JavaScript.

Initially, JavaScript was purely interpreted, but modern engines use techniques like **Just-In-Time (JIT) compilation** to optimize execution speed. 

### How JavaScript Engines Work:
1. **Parsing**: The engine parses JavaScript code into an Abstract Syntax Tree (AST) by breaking down the source code into tokens.
2. **Compilation/Interpretation**: It either interprets the code line-by-line or compiles parts of the code to optimize performance.
3. **Execution**: Finally, the machine code is executed by the processor, performing the task as instructed by the JavaScript code.

### Types of JavaScript Engines

Different browsers and environments have their own JavaScript engines, each designed for performance optimization and compatibility with the JavaScript standard.

1. **V8**  
   - **Developer**: Google  
   - **Used In**: Google Chrome, Microsoft Edge, Node.js  
   - **Features**: V8 is known for its fast performance, using Just-In-Time (JIT) compilation to convert JavaScript into machine code before execution.
   
2. **SpiderMonkey**  
   - **Developer**: Mozilla  
   - **Used In**: Firefox, other Mozilla projects  
   - **Features**: SpiderMonkey was the first JavaScript engine ever created. It includes a JIT compiler and an interpreter to enhance execution performance.

3. **Chakra**  
   - **Developer**: Microsoft  
   - **Used In**: Older versions of Microsoft Edge (before the switch to Chromium), Internet Explorer  
   - **Features**: Chakra is known for its fast startup and execution, with a focus on memory efficiency.

4. **JavaScriptCore (Nitro)**  
   - **Developer**: Apple  
   - **Used In**: Safari  
   - **Features**: JavaScriptCore (also called Nitro) is optimized for Apple's web browsing and runs in both desktop and mobile versions of Safari.

5. **Hermes**  
   - **Developer**: Facebook (Meta)  
   - **Used In**: React Native  
   - **Features**: Hermes is a small, lightweight engine designed to improve startup time and performance on mobile devices using React Native.

### How Engines Optimize JavaScript Execution

Modern JavaScript engines, like V8, use various optimization techniques, including:
- **JIT Compilation**: Converts frequently used functions into machine code during runtime.
- **Garbage Collection**: Automatically manages memory by removing objects that are no longer used.
- **Inline Caching**: Optimizes frequently accessed objects and properties to avoid repeated lookup costs.

JavaScript engines are critical for ensuring that JavaScript runs efficiently across different platforms and devices. <br>
## What is the Window Object in JavaScript?

The **`window` object** is a global object in JavaScript that represents the browser window or tab where the script is running. It acts as an interface between the JavaScript code and the browser, providing methods, properties, and events that can interact with the entire web page.

In a browser, the `window` object is automatically created and represents the browser's environment. It contains:
- **Global variables and functions**: All global variables and functions declared in JavaScript are properties of the `window` object.
- **Browser APIs**: It provides access to APIs like `localStorage`, `setTimeout()`, `alert()`, and more.
- **Document Object Model (DOM)**: The `window` object contains the `document` object, which represents the HTML content on the page.

### Important Properties and Methods of the Window Object

- **`window.document`**: Refers to the Document Object Model (DOM) of the current web page. Using this, you can manipulate the HTML and CSS of the page.
  
- **`window.innerHeight` & `window.innerWidth`**: These properties return the height and width of the viewport (the visible part of the web page).
  
- **`window.location`**: Provides access to the URL of the current page, allowing you to get or redirect to different URLs.

- **`window.localStorage`**: Allows storing data in the browser that persists even after the browser is closed and reopened.

- **`window.setTimeout()` & `window.setInterval()`**: These methods allow you to run code after a specified delay (`setTimeout`) or repeatedly after a certain interval (`setInterval`).

- **`window.alert()`**: Displays a dialog box with a message and an OK button.

- **`window.console`**: Provides access to the browser’s console for logging messages, errors, and warnings (e.g., `console.log()`).

### Global Object

In browsers, the `window` object is the **global object**, meaning all variables declared globally are properties of `window`. For example:
```javascript
var name = "John";
console.log(window.name); // Outputs "John"
```
Window is not explicitly part of JS , but part of browser
and not JS , Window is like a bucket with all the tools / features to be used in window.
<br>

# Types

## Data Types in JavaScript

JavaScript is a dynamically typed language, which means variables can hold values of any type and the type can change at runtime. JavaScript data types are categorized into **primitive** and **reference** types.

### Primitive Data Types

Primitive data types are the most basic data types and represent single values. They are immutable, meaning their values cannot be changed once created. JavaScript has the following primitive data types:

1. **Number**
   - Represents both integer and floating-point numbers.
   - Examples: `42`, `3.14`

   ```javascript
   let age = 25;       // Integer
   let price = 9.99;   // Floating-point
2. **String**

   - Definition: Represents a sequence of characters enclosed in single quotes ('), double quotes ("), or backticks (`).
   - Examples: 'Hello', "World", `Template String`
   - Usage: Used for text and string manipulation.
  ```javascript
     let greeting = "Hello, World!";
     let name = `John Doe`;
  ```

3. **Boolean**

   -  Definition: Represents a logical value, either true or false.
   - Examples: true, false
   - Usage: Used in conditional statements and logical operations
  ```javascript
     let isActive = true;
     let isCompleted = false;
  ```
4. **Undefined**

      - Definition: Represents a variable that has been declared  but not yet assigned a value.
      - Examples: Automatically assigned to uninitialized variables.
      - Usage: Indicates the absence of a value or an uninitialized variable.
   ```javascript
   let result;
   console.log(result); // Outputs: undefined

5. **Null**

     - Definition: Represents the intentional absence of any      object value.
    - Examples: null
     - Usage: Used to explicitly indicate that a variable should have no value.
  ```javascript
  let user = null;
  ```
6. Symbol (ES6)

    - Definition: Represents a unique and immutable value.
    - Examples: Symbol('description')
    -Usage: Often used as object property keys to ensure uniqueness
  ```javascript
  let sym = Symbol('description');
  ```
7. BigInt (ES11)

    - Definition: Represents integers with arbitrary precision.
    - Examples: 1234567890123456789012345678901234567890n
    - Usage: Useful for handling very large numbers beyond the limits of the Number type.
  ```javascript
   let bigNumber = 1234567890123456789012345678901234567890n;
  ```
### Reference Data Types
Reference data types are more complex and are used to store collections of values or more complex entities. They include:

1. **Object**

  - Definition: Represents a collection of key-value pairs.
  - Examples: { name: 'Alice', age: 30 }
  - Usage: Used to group related data and functions into a single entity.
```javascript
let person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log('Hello');
  }
};
```
2. **Arrays**

  - Definition: A special type of object used for storing ordered collections of values.
  - Examples: ['apple', 'banana', 'cherry']
  - Usage: Used for managing lists of items.
```javascript
let fruits = ['apple', 'banana', 'cherry'];
```
3. **Functions**

  - Definition: Functions are objects that can be called to perform tasks or calculate values.
  - Examples: function add(a, b) { return a + b; }
  - Usage: Used for code reuse and modularity.
```javascript
function add(a, b) {
  return a + b;
}
```
and many more..........<br>
**Summary** : <br>
Primitive Data Types include Number, String, Boolean, Undefined, Null, Symbol, and BigInt. They are immutable and compared by value.<br>
Reference Data Types include Object, Array, Function, Date, and RegExp. They are mutable and compared by reference.

# Conditionals
Basically just True and False.

Conditionals in JavaScript allow you to execute code based on certain conditions. This enables your program to make decisions and execute different code paths depending on the state of the application. JavaScript provides several ways to handle conditional logic:

## `if` Statement

The `if` statement executes a block of code if its condition evaluates to `true`.

**Syntax**:
```javascript
if (condition) {
  // Code to execute if condition is true
}
```
Example :
```javascript
let age = 18;
if (age >= 18) {
  console.log('You are an adult.');
}
```
 


# loops

## Loops in JavaScript

Loops are used to execute a block of code repeatedly until a certain condition is met. JavaScript provides several types of loops:

### 1. `for` Loop
The `for` loop is used when you know how many times you want to execute a statement or a block of statements.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
  // Code to be executed
}


## 2. `while` Loop
The `while` loop is used when the number of iterations is not known beforehand, and you want to run the code as long as a specific condition is true.

**Syntax:**
```javascript
while (condition) {
  // Code to be executed
}
```

**Example:**
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
This will print numbers from 0 to 4.

## 3. `do...while` Loop
The `do...while` loop is similar to the `while` loop, but it guarantees that the code block will run at least once before checking the condition.

**Syntax:**
```javascript
do {
  // Code to be executed
} while (condition);
```

**Example:**
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
This will print numbers from 0 to 4.

## 4. `for...in` Loop
The `for...in` loop iterates over the properties of an object.

**Syntax:**
```javascript
for (key in object) {
  // Code to be executed
}
```

**Example:**
```javascript
const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
  console.log(key, obj[key]);
}
```
This will print the keys and values of the `obj` object.

## 5. `for...of` Loop
The `for...of` loop iterates over iterable objects like arrays, strings, maps, etc.

**Syntax:**
```javascript
for (element of iterable) {
  // Code to be executed
}
```

**Example:**
```javascript
const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
```
This will print each element of the `arr` array.

## Conclusion
- Use `for` when the number of iterations is known.
- Use `while` when the loop should continue based on a condition.
- Use `do...while` when the code should run at least once regardless of the condition.
- Use `for...in` to iterate over the properties of an object.
- Use `for...of` to iterate over the values of an iterable.


# Functions


## Functions in JavaScript

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is a reusable block of code designed to perform a particular task.

## Function Declaration

```js
function nameOfFunction(parameter1, parameter2) {
    // code to be executed
}
```

Example:
```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Nabin'));  // Output: Hello, Nabin!
```

## Function Expression

```js
const nameOfFunction = function(parameter1, parameter2) {
    // code to be executed
};
```

Example:
```js
const sum = function(a, b) {
    return a + b;
};

console.log(sum(3, 5));  // Output: 8
```

## Arrow Functions

Arrow functions provide a concise syntax for writing functions in ES6.

```js
const nameOfFunction = (parameter1, parameter2) => {
    // code to be executed
};
```

Example:
```js
const multiply = (a, b) => a * b;

console.log(multiply(4, 6));  // Output: 24
```

## Default Parameters

Default parameters allow you to initialize parameters with default values if they are not provided in the function call.

```js
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet());  // Output: Hello, Guest!
```

## Rest Parameters

Rest parameters allow a function to accept an indefinite number of arguments as an array.

```js
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4));  // Output: 10
```

## Returning Values

Functions can return a value using the `return` statement.

```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 5));  // Output: 15
```

## Immediately Invoked Function Expression (IIFE)

An IIFE is a function that runs as soon as it is defined.

```js
(function() {
    console.log("IIFE executed!");
})();
```

Output: 
```
IIFE executed!
```

## Function Hoisting

Function declarations are hoisted in JavaScript, meaning they can be called before they are defined.

```js
console.log(square(4));  // Output: 16

function square(n) {
    return n * n;
}
```

Note: Function expressions are **not** hoisted.

## Types of Function notation.
### Normie way
```js
function trial(){
  //
}
```
### Variable way
```js
var trial = function(){
  //
}
```
### Anonymous fucntions
```js
function(){
  //
}
```
### Fat arrow
```js
()=>{
  //
}
var a = ()=>{
  //Basic Fat arrow
}

var g = (ab)=>{
  //Single Paramter arrow
}
/*
Other Way of writing single paramter arrow fn
var g = ab =>{
  //code
}*/
g(12)
``` 
# Return 


# Functions in JavaScript

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is a reusable block of code designed to perform a particular task.

## Function Declaration

```js
function nameOfFunction(parameter1, parameter2) {
    // code to be executed
}
```

Example:
```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Nabin'));  // Output: Hello, Nabin!
```

## Function Expression

```js
const nameOfFunction = function(parameter1, parameter2) {
    // code to be executed
};
```

Example:
```js
const sum = function(a, b) {
    return a + b;
};

console.log(sum(3, 5));  // Output: 8
```

## Arrow Functions

Arrow functions provide a concise syntax for writing functions in ES6.

```js
const nameOfFunction = (parameter1, parameter2) => {
    // code to be executed
};
```

Example:
```js
const multiply = (a, b) => a * b;

console.log(multiply(4, 6));  // Output: 24
```

## Default Parameters

Default parameters allow you to initialize parameters with default values if they are not provided in the function call.

```js
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet());  // Output: Hello, Guest!
```

## Rest Parameters

Rest parameters allow a function to accept an indefinite number of arguments as an array.

```js
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4));  // Output: 10
```

## Returning Values

Functions can return a value using the `return` statement.

```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 5));  // Output: 15
```

## Immediately Invoked Function Expression (IIFE)

An IIFE is a function that runs as soon as it is defined.

```js
(function() {
    console.log("IIFE executed!");
})();
```

Output: 
```
IIFE executed!
```

## Function Hoisting

Function declarations are hoisted in JavaScript, meaning they can be called before they are defined.

```js
console.log(square(4));  // Output: 16

function square(n) {
    return n * n;
}
```

Note: Function expressions are **not** hoisted.


## Return Notation in Fat Arrow Functions

In fat arrow functions, the `return` statement works in two ways depending on the syntax used.

### 1. **Implicit Return**

If the function contains only a single expression, you can omit the `return` keyword as well as the curly braces. This is known as implicit return, and the result of the expression is automatically returned.

```js
const sum = (a, b) => a + b;

console.log(sum(3, 4));  // Output: 7
```

In the above example, `a + b` is the expression, and its result is automatically returned without needing the `return` keyword.

### 2. **Explicit Return**

If the function has more than one statement, you need to use curly braces `{}` and explicitly return the value using the `return` keyword.

```js
const sum = (a, b) => {
    const result = a + b;
    return result;
};

console.log(sum(5, 8));  // Output: 13
```

In this example, since there are multiple statements (declaring a variable and returning it), you need to use curly braces and explicitly return the value.

### Key Points:
- Omit `return` for single-line expressions (implicit return).
- Use `return` and curly braces for multi-line functions (explicit return).

# Undefined , Not Defined and NULL
## Undefined, Not Defined, and Null in JavaScript

In JavaScript, it's important to understand the distinctions between `undefined`, `not defined`, and `null`, as they are often used to represent the absence of a value or variable.

### 1. Undefined

- **Definition**: A variable that has been declared but has not been assigned a value is `undefined`. It is a data type in JavaScript.It is a value , treated as garbage value.
- **Example**:
    ```js
    let x;
    console.log(x);  // Output: undefined
    ```

- **Function Return**: If a function does not explicitly return a value, it returns `undefined` by default.
    ```js
    function noReturn() {}
    console.log(noReturn());  // Output: undefined
    ```

### 2. Not Defined

- **Definition**: When a variable is referenced that has not been declared in the current scope, it results in a `ReferenceError`. This is often described as "not defined." It is an error , using an element without declaring it.
- **Example**:
    ```js
    console.log(y);  // ReferenceError: y is not defined
    ```

- **Important Note**: Trying to access a variable that hasn't been declared will throw an error, whereas accessing a declared but uninitialized variable will return `undefined`.

### 3. Null

- **Definition**: `null` is an assignment value that represents the intentional absence of any object value. It is a primitive value and can be assigned to a variable as a representation of "no value." This is a value as well , which is returned when the element was not found.
- **Example**:
    ```js
    let obj = null;
    console.log(obj);  // Output: null
    ```

- **Type**: You can check the type of `null` using the `typeof` operator, which returns `object`, which can be misleading.
    ```js
    console.log(typeof null);  // Output: "object"
    ```

### Key Differences

| Feature         | Undefined                     | Not Defined                  | Null                        |
|-----------------|-------------------------------|------------------------------|-----------------------------|
| State           | Variable declared but not assigned | Variable not declared        | Intentionally set to no value |
| Type            | `undefined`                   | Throws `ReferenceError`      | `object`                   |
| Usage           | Automatically assigned by JavaScript | Causes an error             | Used as a placeholder       |


# Arrays
# Objects
# Prototypes
# Prototypal Inheritance
# asynchronous
# es6 climax
# Questions