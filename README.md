## 简介
`v-debounce-throttle`是一个vue防抖节流指令，控制单一事件的触发频率。其核心是拦截组件元素的`v-on`绑定事件，采用原生的事件注册机制。具体代码如下：
- [gitHub](https://github.com/gerryli0214/vue-directives)
- [npm](https://www.npmjs.com/package/v-debounce-throttle)

## 起步
1. 安装
```shell script
npm install v-debounce-throttle -S
```
2. 引入
```ecmascript 6
import vDebounceThrottle from 'v-debounce-throttle'
Vue.use(vDebounceThrottle)
```
3. 示例
- 防抖
```html
<button v-debounce="handleClick"></button>
```
- 节流
```html
<button v-throttle="handleClick"></button>
```

## 使用案例
- 使用方法1
```html
<button v-debounce="handleClick">方法1</button>
```
- 使用方法2
```html
<button v-debounce="{fun: 'handleClick', event: 'click', args: 'test'}"></button>
```
- 使用方法3
```html
<button v-debounce.dblclick.stop="handleDblclick"></button>
```

## API文档

### 参数
| 参数名称 | 数据类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| event | String | false | click | 事件名称 |
| args | Any | false | null | 附加参数 |
| wait | Number | false | 200 | 等待时间 |

### 修饰符(modifier)
- 事件
    - click
    - dblclick
    - keyup
    - keydown
    - keypress
    - mousedown
    - mouseover
    - mouseleave
    - scroll
- 事件修饰符
    - stop(取消冒泡)
    - prev(阻止默认事件)

