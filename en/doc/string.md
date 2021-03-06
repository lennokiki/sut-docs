# String

## stringTrim(string[, type])

### Filter spaces in the specified string

```
const str = ' abc  dd ef g '

// Filter all spaces by default, output `abcddefg`
const res1 = stringTrim(str) 

// Filter start space, output `abc  dd ef g `
const res2 = stringTrim(str, 'left')

// Filter end space, output ` abc  dd ef g`
const res3 = stringTrim(str, 'right')

// Filter start and end spaces, output `abc  dd ef g`
const res4 = stringTrim(str, 'around')

// Filter the space between contents, output ` abcddefg `
const res5 = stringTrim(str, 'middle')
```

## stringTransCase(string, type)

### Convert case

```
const str = 'hi, HelLO world'

// Convert all to uppercase, output `HI, HELLO WORLD`
const re1 = stringTransCase(str, 'upper')

// Convert all to lowercase, output `hi, hello world`
const re2 = stringTransCase(str, 'lower')

// Initial to uppercase, output `Hi, Hello World`
const re3 = stringTransCase(str, 'capitalize')
```

## stringColor(isRgb?: boolean)

### Generate the color value randomly. The hexadecimal color value is generated by default. RGB color value is generated when 'true' is passed as the input parameter

```
// Generate hexadecimal color values such as `#0a0a0a`
const color1 = stringColor()

// Generate RGB color values as follows `RGB(2,23,111)`
const color2 = stringColor(true)
```

## stringColor16ToRgb(string)

### Convert valid hexadecimal color values to RGB format

```
// Output `RGB(0,0,0)`
const color1 = stringColor16ToRgb('#000')

// Output `RGB(234,239,51)`
const color2 = stringColor16ToRgb('#eaef33')

// Output `RGB(234,239,51)`
const color3 = stringColor16ToRgb('#EAEF33')
```

## stringColorRgbTo16(string)

### Convert valid RGB color values to hexadecimal color value format

```
// Output `#000000`
const color1 = stringColorRgbTo16('rgb(0,0,0)')

// Output `#eaef33`
const color2 = stringColorRgbTo16('RGB(234,239,51)')
```

## stringNumToLetter(index[, type])

### Convert numbers to alphabetic typesetting, similar to the automatic header of ABCD.. Z in Excel, which is converted to uppercase by default

```
// Output `A`
const letter1 = stringNumToLetter(0)

// Output `z`
const letter2 = stringNumToLetter(25, 'lower')

// Output `aa`
const letter3 = stringNumToLetter(26, 'lower')

// Output `ZA`
const letter4 = stringNumToLetter(26 * 26)
```
