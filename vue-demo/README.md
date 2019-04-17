准备工作：下载vue 源码  ，

### 从一条命令开始

首先在vue源码下的build文件夹，新建一个空白html，然后引入vue.js，再新建一个app.js

```html
<script src="./vue.js"></script>
<script src="app.js"></script>
```

在app.js里，打印vue

```js
console.dir(Vue);
```

我们可以看到Vue 对象以及原型上有这些方法和属性

![](https://ws1.sinaimg.cn/large/006tNc79ly1g248gmy2b7j311u0qmjws.jpg)


#### new Vue 发生了什么
```html
<div id="app">
  {{ message }}
</div>
```


```js
var demo = new Vue({
    el: '#root',
    data() {
      return {
        text: 'hello vuejs!'
      }
    }
})
```
我们都知道，`new` 关键字在 Javascript 语言中代表实例化是一个对象，Vue 的构造函数调用了_init这个方法，

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

最终它会在页面上渲染出 `hello vue`，下面我们将从数据驱动的角度，来弄清楚模板和数据如何渲染成最终的 DOM。

Vue.js 一个核心思想是数据驱动，数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据，而且DOM 操作是非常消耗性能的。因此是当交互复杂的时候，只关心数据的修改会让代码的逻辑变的非常清晰，并且性能会比传统方式好很多。

vuejs 中采用简洁的模板语法将声明式的将数据渲染为DOM

```html
<div id="app">
  {{ message }}
</div>
```



```js
var demo = new Vue({
    el: '#root',
    data() {
      return {
        text: 'hello vuejs!'
      }
    }
})
```

最终它会在页面上渲染出 `hello vue`，下面我们将从数据驱动的角度，来弄清楚模板和数据如何渲染成最终的 DOM。
打开src 下的core/instance/index.js 源码，即可以看到Vue 构造函数的挂载顺序

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```




