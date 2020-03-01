# Type

## typeIsEqual(obj1, obj2)

### Determine whether two objects have equal values

```
const obj1 = { a: '1', b: [1, 2, 3]}
const obj2 = { a: '1', b: [1, 2, 3]}
const obj3 = { a: '2', b: [1, 2, 3]}

// Output `true`
const res1 = typeIsEqual(obj1, obj2)

// Output `false`
const res2 = typeIsEqual(obj2, obj3)
```

## typeIs[](target)

### Judge target type

```
// Determine whether the target is of string type
const res = typeIs.isString(target)
 
// Determine whether the target is a numerical type
const res = typeIs.isNumber(target)
 
// Judge whether the target is a function type
const res = typeIs.isFunction(target)
 
// Determine whether the target is of boolean type
const res = typeIs.isBoolean(target)
 
// Determine whether the target is of object type
const res = typeIs.isObject(target)
 
// Determine whether the target is an array type
const res = typeIs.isArray(target)
 
// Determine whether the target is of regular type
const res = typeIs.isRegExp(target)
 
// Determine whether the target is arguments, that is, the parameter type
const res = typeIs.isArguments(target)
 
// Determine whether the target is a date type
const res = typeIs.isDate(target)
 
// Judge whether the target is symbol type
const res = typeIs.isSymbol(target)
 
// Determine whether the target is the wrong type
const res = typeIs.isError(target)
 
// Determine whether the target is promise type
const res = typeIs.isPromise(target)
 
// Determine whether the target is of set type
const res = typeIs.isSet(target)
```
