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

#### deep in core

让我们打开src 下的core/instance/index.js 源码，即可以看到Vue 构造函数的挂载顺序

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

那么关键的顺序代码就是下面这几行

```js
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

#### init 初始化

打开 `src/core/instance/init.js`, 