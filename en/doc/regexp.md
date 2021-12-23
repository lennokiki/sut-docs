# RegExp

## rgIsInteger(num[, type])

### Judge whether the target is an integer, type: +|-

```
// Positive integer, returning `true`
rgIsInteger(123)
// Negative integer, return `true`
rgIsInteger(-123)

// Specify positive, return `true`
rgIsInteger(123, '+')
// Specify positive, return `false`
rgIsInteger(-123, '+')

// Specify as negative, return `false`
rgIsInteger(123, '-')
// Specify as negative, return `true`
rgIsInteger(-123, '-')
```

## rgIsFloat(num[, type])

### Determine whether the target is floating-point type, type: +|-

```
// Positive floating point, return `true`
rgIsFloat(123.24)
// Negative floating point, return `true`
rgIsFloat(-123.24)

// Specify positive floating point, return `true`
rgIsFloat(123.24, '+')
// Specify positive floating point, return `false`
rgIsFloat(-123.24, '+')

// Specify as negative floating point, return `false`
rgIsFloat(123.24, '-')
// Specify as negative floating point, return `true`
rgIsFloat(-123.24, '-')
```

## rgAllowInteger(num[, len, type])

### In theory, you should not be able to enter letters or other non numerical items when you limit the input of numbers of a specified type or length, especially the data of the amount type. This function can directly filter the content other than the condition.

### As long as the input form and other controls in react are set with value, they are fully controlled components, so there is no need to replace the regular replacement of the input content. But forms like Vue or traditional mode can't control the user's input, so they can only replace

### [Using rgalloweinteger to restrict input integer in Vue](http://jsrun.pro/PvfKp/edit)

```
// Only integer is allowed, unlimited length
const res1 = rgAllowInteger(yourInputValue)

// Only positive integers are allowed, and the length cannot exceed 5 digits
const res2 = rgAllowInteger(yourInputValue, 5, '+')

// Only negative integers are allowed, unlimited length
const res3 = rgAllowInteger(yoruInputValue, Number.POSITIVE_INFINITY, '-')
```

## rgAllowFloat(str[, floatLen, type, integerLen])

### Limit the input of floating-point decimal of specified floating-point length, type and integer length. The principle is the same as above

### [Use rgallowflow in Vue to limit input floating point](http://jsrun.pro/EvfKp/edit)

```
// Only positive and negative floating-point values are allowed, and the number of decimal places is not more than 2 by default
const res1 = rgAllowFloat(yourInputValue)

// It is only allowed to input no more than 4 decimal places, no more than 5 integers and positive numbers
const res2 = rgAllowFloat(yourInputValue, 4, '+', 5)

// Only the decimal place is allowed to be input no more than 1, and the integer place is not allowed to be input more than 7, negative
const res3 = rgAllowFloat(yourInputValue, 1, '-', 7)
```

## rgIsPhone(str)

### Determine whether the target is a standard mobile number format

```
const res = rgIsPhone(phoneNum)
```

## rgIsTel(str)

### Determine whether the target is a standard phone number format

```
const res = rgIsTel(telNum)
```

## rgIsTelOrMobile(str)

### Determine whether the target is a standard phone number or mobile number format

```
const res = rgIsTelOrMobile(phoneOrTelNum)
```

## rgIsChinese(str)

### Judge whether the target is completely Chinese

```
const res = rgIsChinese(str)
```

## rgIsEmail(str)

### Determine whether the target is a standard mailbox format

```
const res = rgIsEmail(str)
```

## rgIsID(str)

### Judge whether the target is a standard Chinese citizen ID number

```
const res = rgIsID(str)
```

## rgIsUrl(str)

### Determine whether the target is a valid link address

```
const res = rgIsUrl(str)
```

## rgIsPC

### Determine whether the current environment is a PC environment

```
const res = rgIsPC()
```

## rgThousandMark(str[, type])

### Add or remove thousands to a target

```
// Add thousands, output `12,345.34`
const res1 = rgThousandMark(12345.34)

// Add thousands, output `The number 1,112,223,334.5564 and 111 and 222,333 and 32,123.1`
const res2 = rgThousandMark('The number 1112223334.5564 and 111 and 222333 and 32123.1')

// Decimation, output `12345.34`
const res3 = rgThousandMark('12,345.34', '-')
```

## rgBrowserType(isTest360?: boolean)

### Determine the current browser model, and recognize the following browsers：IE+Version、Edge、FF、Wechat、QQ、Maxthon、Safari、UC、Opear、Sougou、360、Chrome

### If you need to identify 360 browsers, you need to transfer parameters `true`

```
const res = rgBrowserType()
```
