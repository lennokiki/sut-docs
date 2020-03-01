# 正则

## rgIsInteger(num[, type])

### 判断目标是否为整型，type: + | -

```
// 正整数，返回`true`
rgIsInteger(123)
// 负整数，返回`true`
rgIsInteger(-123)

// 指定为正数，返回`true`
rgIsInteger(123, '+')
// 指定为正数，返回`false`
rgIsInteger(-123, '+')
 
 // 指定为负数，返回`false`
rgIsInteger(123, '-')
// 指定为负数，返回`true`
rgIsInteger(-123, '-')
```

## rgIsFloat(num[, type])

### 判断目标是否为浮点型，type: + | -

```
// 正浮点型，返回`true`
rgIsFloat(123.24)
// 负浮点型，返回`true`
rgIsFloat(-123.24)
 
// 指定为正浮点型，返回`true`
rgIsFloat(123.24, '+')
// 指定为正浮点型，返回`false`
rgIsFloat(-123.24, '+')
 
// 指定为负浮点型，返回`false`
rgIsFloat(123.24, '-')
// 指定为负浮点型，返回`true`
rgIsFloat(-123.24, '-')
```

## rgAllowInteger(num[, len, type])

### 限制输入指定类型或者长度的数字，特别是输入金额类型的数据，理论上不应当能输入字母或者其他非数字的东西。此函数可直接过滤条件外的其他内容。
### React当中的input表单等控件只要设置了value即为完全受控组件，所以不需要对输入内容进行replace的正则替换。但是像vue或者传统模式下的表单无法控制用户输入的内容，所以只能进行replace替换
### [vue当中使用rgAllowInteger限制输入整型](http://jsrun.pro/PvfKp/edit)

```
// 只允许输入整数，长度无限制
const res1 = rgAllowInteger(yourInputValue)

// 只允许输入正整数，且长度不能超过5位数
const res2 = rgAllowInteger(yourInputValue, '+', 5)

// 只允许输入负整数，长度无限制
const res3 = rgAllowInteger(yourInputValue, '-')
```

## rgAllowFloat(str[, floatLen, type, integerLen])

### 限制输入指定浮点型长度、类型、整型长度的浮点小数，原理同上
### [vue当中使用rgAllowFloat限制输入浮点型](http://jsrun.pro/EvfKp/edit)

```
// 只允许输入正负数值浮点型数值，且小数位默认不超过2位
const res = rgAllowFloat(yourInputValue)
 
// 只允许输入小数位不超过4位，整数位不超过5位，正数
const res = rgAllowFloat(yourInputValue, 4, '+', 5)
 
// 只允许输入小数位不超过1位，整数位不超过7位，负数
const res = rgAllowFloat(yourInputValue, 1, '-', 7)
```

## rgIsPhone(str)

### 判断目标是否为标准的手机号码格式

```
const res = rgIsPhone(phoneNum)
```

## rgIsTel(str)

### 判断目标是否为标准的电话号码格式

```
const res = rgIsTel(telNum)
```

## rgIsTelOrMobile(str)

### 判断目标是否为标准的电话号码或者手机号码格式

```
const res = rgIsTelOrMobile(phoneOrTelNum)
```

## rgIsChinese(str)

### 判断目标是否完全为中文

```
const res = rgIsChinese(str)
```

## rgIsEmail(str)

### 判断目标是否是标准的邮箱格式

```
const res = rgIsEmail(str)
```

## rgIsID(str)

### 判断目标是否为标准的中国公民身份证号码

```
const res = rgIsID(str)
```

## rgIsUrl(str)

### 判断目标是否为有效的链接地址

```
const res = rgIsUrl(str)
```

## rgIsPC

### 判断当前环境是否为pc环境

```
const res = rgIsPC()
```

## rgThousandMark(str[, type])

### 给目标添加千分符或者去掉千分符

```
// 添加千分符，输出`12,345.34`
const res = rgThousandMark(12345.34)

// 添加千分符，输出`The number 1,112,223,334.5564 and 111 and 222,333 and 32,123.1`
const res = rgThousandMark('The number 1112223334.5564 and 111 and 222333 and 32123.1')

// 去除千分符，输出`12345.34`
const res = rgThousandMark('12,345.34', '-')
```

## rgBrowserType(isTest360?: boolean)

### 判断当前浏览器是什么型号，能识别以下浏览器：IE+Version、Edge、FF、Wechat、QQ、Maxthon、Safari、UC、Opear、Sougou、360、Chrome
### 如果需要识别360浏览器需要传递参数`true`

```
const res = rgBrowserType()
```

