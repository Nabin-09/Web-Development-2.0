# This keywword





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
it returns **window** without strict mode and **undefinded** when in strict mode
