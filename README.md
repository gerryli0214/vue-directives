# 防抖节流使用指南
## 默认参数：
### 备注
| 参数名称 | 数据类型 | 必填 | 默认值 | 
| ------ | ------ | ------ | ------ |
| fun | String | true | 空 |
| event | String | false | click |
| args | Any | false | 空 |
| wait | Number | false | 200 |
## 备注：
### 1、	modifiers为指令修饰符，默认与vue事件绑定保持一致，目前支持的事件类型：click,dblclick,keyup,keydown,keypress,mouseup,mousedown,mouseover,mouseleave,scroll，事件修饰符stop => 阻止默认事件，prev => 阻止事件冒泡
### 2、	自定义指令默认通过原生JS注册元素事件，在按钮元素上使用的时候，需要移出通过v-on(@)绑定的事件
## 使用方法（节流同理）
- 方法1：
	v-debounce=”funName”
- 方法2：
	v-debounce=”{fun: ‘xxx’, event: ‘xxx’}”
- 方法3：
	v-debounce.click.stop=’funName’

