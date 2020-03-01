# 类型

## typeIsEqual(obj1, obj2)

### 判断两个对象是否值相等

```
const obj1 = { a: '1', b: [1, 2, 3]}
const obj2 = { a: '1', b: [1, 2, 3]}
const obj3 = { a: '2', b: [1, 2, 3]}

// res1输出`true`
const res1 = typeIsEqual(obj1, obj2)

// res2输出`false`
const res2 = typeIsEqual(obj2, obj3)
```

## typeIs[](target)

### 判断目标类型

```
// 判断目标是否为字符串类型
const res = typeIs.isString(target)
 
// 判断目标是否为数值类型
const res = typeIs.isNumber(target)
 
// 判断目标是否为函数类型
const res = typeIs.isFunction(target)
 
// 判断目标是否为布尔类型
const res = typeIs.isBoolean(target)
 
// 判断目标是否为对象类型
const res = typeIs.isObject(target)
 
// 判断目标是否为数组类型
const res = typeIs.isArray(target)
 
// 判断目标是否为正则类型
const res = typeIs.isRegExp(target)
 
// 判断目标是否为arguments即参数类型
const res = typeIs.isArguments(target)
 
// 判断目标是否为日期类型
const res = typeIs.isDate(target)
 
// 判断目标是否为Symbol类型
const res = typeIs.isSymbol(target)
 
// 判断目标是否为错误类型
const res = typeIs.isError(target)
 
// 判断目标是否为Promise类型
const res = typeIs.isPromise(target)
 
// 判断目标是否为Set类型
const res = typeIs.isSet(target)
```
