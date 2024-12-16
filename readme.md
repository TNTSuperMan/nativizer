# nativizer
normal function to native function.
## Usage
```js
const nativefn = nativize(()=>console.log("Hey!"))
console.log(nativefn.toString()) //function () { [native code] }
```
## Warn
If the first and subsequent arguments of the nativized function are not specified, the first argument of the original function is undefined.  
It is possible to resolve this by specifying strictLen, but if the first argument is left undefined in the nativized function and no further arguments are specified, the first argument of the original function will not be specified.