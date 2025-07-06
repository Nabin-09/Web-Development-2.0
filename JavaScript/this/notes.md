# This keyword


## This in global space

```js
console.log(this) // Window object/actually gives window object
```


## Inside a function
> This keyword works differenty in strictmode
```js
function x (){
    console.log(this);
}
```
it returns **window** without strict mode and **undefined** when in strict mode
and even in strict mode :
window.x() would give window as we have given it reference to window object

### This substitution - 
If the value of this keyword is null or undefined anytime its replaced with global object only in **non-strict mode**. <br><br>

# 🌐 Global Object in JavaScript

## ✅ What is it?

The **global object** provides access to globally available variables and functions in any environment.

---

## 🌍 Environment-wise Globals

| Environment | Global Object   | Example                |
|-------------|------------------|-------------------------|
| Browser     | `window`         | `window.alert()`       |
| Node.js     | `global`         | `global.setTimeout()`  |
| Universal   | `globalThis` ✅  | `globalThis.setTimeout()` |

---

## 🔁 Differences

### `window`
- Browser-only.
- Represents the browser window.
```js
window.foo = 1;
console.log(foo); // 1
```

### `global`
- Node.js-only.

```js
global.bar = 2;
console.log(bar); // 2
globalThis
```
✅ Standard in ES2020+.

Works in all environments.

```js
globalThis.baz = 3;
console.log(baz); // 3
```

## This in an object's method 
If we have a function in object , its called method.

```js
const obj = {
    a : 10,
    x : function(){
        console.log(this);
    }
}

obj.x()//{ a: 10, x: [Function: x] }
```
It is very important to notice how the function is called , hence this inside x has obj has global object.

so if we do this.a , we get a = 10

## `apply , call and bind`


## `call()`

- Invokes a function **immediately**.
- Pass arguments **individually**.

```js
function greet(city) {
  console.log(`Hello, I'm ${this.name} from ${city}`);
}

const person = { name: "Alice" };
greet.call(person, "Delhi");
// Output: Hello, I'm Alice from Delhi
```


```js
const student = {
    name : 'Nabin',
    printname : function (){
        console.log(this.name);
    }
}

console.log(student.printname);

const student2 = {
    name : 'GodWin',
}

//Is there any way I can use the printname fn of the student object to use it in student 2
```

This is where the call keyword comes in to play and we rewrite the this keyword using it 
```js

student.printname.call(student2)
//GodWin
```
`bind vs. apply`
Both bind() and apply() manage a function's this context.

`bind()`
Creates a new function with this permanently set. It doesn't run immediately.

```JavaScript

const userNabin = { name: "Nabin", greet: function() { console.log(`Hello, ${this.name}!`); } };
const nabinsGreet = userNabin.greet.bind(userNabin);
nabinsGreet(); // Output: Hello, Nabin!
apply()
Immediately runs the function with a specified this and arguments as an array.
```
```JavaScript

const gamePlayer = { name: "Godwin" };
function introduce(game) { console.log(`${this.name} plays ${game}.`); }
introduce.apply(gamePlayer, ["Fortnite"]); // Output: Godwin plays Fortnite.
```


## This inside arrow function

```js
const obj = {
    a : 10,
    x : ()=>{
        console.log(this)
    },
}
obj.x() // {}
```

value of this over here is not the parent object but enclosing lexical context and hence gives `window` object.






