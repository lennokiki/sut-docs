
# 开始

## 安装依赖

可分为两种模式引入，使用npm或者通过`<script>`标签的方式引入

### Npm

安装node环境

```
npm i simple-utils-tiny -S
```
or

```
yarn add simple-utils-tiny
```


### Script

引入dist目录下的 simple-utils-tiny.min.js 下载到本地或者使用cdn

```
<script src="./simple-utils-tiny.min.js"></script>

// Or use cdn
<script src="https://cdn.jsdelivr.net/npm/simple-utils-tiny@1.1.2/dist/simple-utils-tiny.min.js"></script>
```

## 如何使用

### node环境

**按需引入**

```
import { stringTrim, rgAllowFloat } from 'simple-utils-tiny'
const res = stringTrim(' abc  dd ef g', 'around') // 'abc  dd ef g'
```

**引入全部**

```
import sUtils from 'simple-utils-tiny'
const res = sUtils.stringTrim(' abc  dd ef g', 'middle') // ' abcddefg'
```

### 传统模式开发

```
<script>
const res = sUtils.stringTrim(' abc  dd ef g', 'around') // 'abc  dd ef g'
</script>
```