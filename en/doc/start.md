
# Start

## Installing

It can be introduced in two modes, NPM or by the way of ` < script > ` tag

### Npm

Install node environment

```
npm i simple-utils-tiny -S
```

### Script

Import simple-utils-tiny.min.js under dist directory to download to local or use CDN

```
<script src="./simple-utils-tiny.min.js"></script>

// Or use cdn
<script src="https://cdn.jsdelivr.net/npm/simple-utils-tiny@1.1.2/dist/simple-utils-tiny.min.js"></script>
```

## How to use

### node environment

**Introduction on demand**

```
import { stringTrim, rgAllowFloat } from 'simple-utils-tiny'
const res = stringTrim(' abc  dd ef g', 'around') // 'abc  dd ef g'
```

**Introduce all**

```
import sUtils from 'simple-utils-tiny'
const res = sUtils.stringTrim(' abc  dd ef g', 'middle') // ' abcddefg'
```

### Traditional mode development

```
<script>
const res = sUtils.stringTrim(' abc  dd ef g', 'around') // 'abc  dd ef g'
</script>
```