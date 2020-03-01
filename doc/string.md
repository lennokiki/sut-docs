# 字符串

## stringTrim(string[, type])

### 过滤指定字符串内的空格

```
const str = ' abc  dd ef g '

// 默认过滤全部空格，输出`abcddefg`
const res1 = stringTrim(str) 

// 过滤起始空格，输出`abc  dd ef g `
const res2 = stringTrim(str, 'left')

// 过滤结尾空格，输出` abc  dd ef g`
const res3 = stringTrim(str, 'right')

// 过滤起始和结尾空格，输出`abc  dd ef g`
const res4 = stringTrim(str, 'around')

// 过滤内容中间空格，输出` abcddefg `
const res5 = stringTrim(str, 'middle')
```

## stringTransCase(string, type)

### 转换大小写

```
const str = 'hi, HelLO world'

// 全部转换为大写，输出`HI, HELLO WORLD`
const re1 = stringTransCase(str, 'upper')

// 全部转换为小写，输出`hi, hello world`
const re2 = stringTransCase(str, 'lower')

// 首字母转换为大写，输出`Hi, Hello World`
const re3 = stringTransCase(str, 'capitalize')
```

## stringColor(isRgb?: boolean)

### 随机生成色值，默认生成16进制色值，当传递`true`为入参时生成rgb色值

```
// 生成16进制色值如`#0a0a0a`
const color1 = stringColor()

// 生成rgb色值如`RGB(2,23,111)`
const color2 = stringColor(true)
```

## stringColor16ToRgb(string)

### 将有效的16进制色值转换为rgb格式

```
// 输出`RGB(0,0,0)`
const color1 = stringColor16ToRgb('#000')

// 输出`RGB(234,239,51)`
const color2 = stringColor16ToRgb('#eaef33')

// 输出`RGB(234,239,51)`
const color2 = stringColor16ToRgb('#EAEF33')
```

## stringColorRgbTo16(string)

### 将有效的rgb色值转换为16进制色值格式

```
// 输出`#000000`
const color1 = stringColorRgbTo16('rgb(0,0,0)')

// 输出`#eaef33`
const color2 = stringColorRgbTo16('RGB(234,239,51)')
```

## stringNumToLetter(index[, type])

### 将数字转换为字母排版，类似Excel当中的ABCD..Z的自动表头，默认转换为大写字母

```
// 输出`A`
const letter1 = stringNumToLetter(0)

// 输出`z`
const letter2 = stringNumToLetter(25, 'lower')

// 输出`aa`
const letter2 = stringNumToLetter(26, 'lower')

// 输出`ZA`
const letter3 = stringNumToLetter(26 * 26)
```
