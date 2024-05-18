# NOTES

### Can't use `alert()` in node.js

> This is because it's a property of the browser `window` object. It's not part of JavaScript, it's just a facility available to JavaScript in that environment.

### null v/s undefined

> undefined means a variable has been defined but no value has been assigned to it whereas null can assigned to a variable as a representation of no value.

    null == undefined // true
    nul === undefined // false
    Therefore, null and undefined are equal but not identical.


> typeof null = Object  
> typeof undefined = undefined

### Type Conversion to Number

> alphanumeric => NaN  
> null => 0  
> undefined => NaN  
> true => 1 & false => 0

### Static Typing v/s Dynamic Typing

> Statically typed languages do type checking at compile-time whereas dynamically typed languages do type checking at run-time. So, JavaScript is a dynamically typed language.
