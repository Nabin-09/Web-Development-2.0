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





