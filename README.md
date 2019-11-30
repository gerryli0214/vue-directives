# debounce && throttle
## params list：
| params | type | require | default | 
| ------ | ------ | ------ | ------ |
| fun | String | true | (empty) |
| event | String | false | click |
| args | Any | false | (empty) |
| wait | Number | false | 200 |
## remark：
### 1、	modifiers support event type：click,dblclick,keyup,keydown,keypress,mouseup,mousedown,mouseover,mouseleave,scroll，stop => stopPropagation，prev => preventDefault
### 2、	register event by DOM, you should not use v-on bind events.
### 3、中文文档地址：https://www.cnblogs.com/gerry2019/p/11962009.html
## how to use（throttle like this）
1. npm install v-debounce-throttle -D
2. import vueDirective from 'v-debounce-throttle'
3. Vue.use(vueDirective)
- methods-1：
	v-debounce=”funName”
- methods-2：
	v-debounce=”{fun: ‘xxx’, event: ‘xxx’}”
- methods-3：
	v-debounce.click.stop=’funName’

