## 什么是虚拟 Dom
虚拟 Dom 就是一个 Js 对象，用它来描述真实 Dom
----------------------------------------------------

## 非虚拟 Dom 方案
### 第一种方案
* 生成页面的过程
    > 1. state 数据
    > 2. 模板
    > 3. state数据 + 模板 = 真实Dom → 显示
    > 4. state数据 发生改变
    > 5. state数据 + 模板 = 真实Dom，替换原始的DOM

* 缺陷：
    > 第一次生成了一个完整的 Dom 片段
    > 第二次生成了一个完整的 Dom 片段
    > 第二次生成的 Dom 替换第一次的 Dom，非常的耗性能
    > 替换原始的 Dom 的过程非常消耗性能

### 第二种方案
* 生成页面的过程
    > 1. state 数据
    > 2. JSX 模板
    > 3. state数据 + 模板 = 真实Dom → 显示
    > 4. state数据 发生改变
    > 5. state数据 + 模板 = 真实Dom，并不直接替换原始 Dom
    > 6. 新的 Dom(DocumentFragment：文档碎片) 和原始的 Dom 做比对，找差异
    > 7. 找出发生了变化的 Dom 中的 元素
    > 8. 只用新的 Dom 中发生变化的 元素，替换老的 Dom 中的 元素

* 缺陷：
    > 新的 Dom 和原始的 Dom 做比对的过程，消耗性能
    > 1. 性能的提升并不明显

## 虚拟 Dom 方案
* 生成页面的过程
    > 1. state 数据
    > 2. JSX 模板
    > 3. state数据 + 模板 = 生成虚拟 Dom
    ( 虚拟Dom: ['div', {id: 'abc}, ['span', {}, 'hello world']] )
    > 4. 用虚拟 Dom 的结构真实 Dom  → 显示
    ( 真实Dom: <div id="abc"><span>hello world</span></div> )
    > 5. state 发生变化
    > 6. 数据 + 模板 = 生成新的虚拟 Dom (极大的提升了性能)
    ( 新的虚拟Dom: ['div', {id: 'abc}, ['span', {}, 'hello byebye']] )
    > 7. 比较原始虚拟 Dom 和新的虚拟 Dom 的区别，找到区别是 span 中的内容 (极大的提升了性能)
    > 8. 直接操作 Dom，改变 span 中的内容

* 特点：
    > 1. 引入虚拟 Dom，减少了对真实 Dom 的创建，以及 Dom 的对比，取而代之的是创建 js 对象，对比的也是 js 对象
    > 2. 生成虚拟 Dom 节点的过程，也消耗性能，但与修改真实 Dom 相比要小的多，毕竟只是生成一个JS对象
    > 3. 它使得跨端应用得以实现。React Native

## 深入了解虚拟 Dom
    react的虚拟dom解析过程： JSX -> React.createElement -> 虚拟Dom(JS 对象) -> 真实的DOM


##  React 虚拟 Dom 中的 Diff 算法
    > 比较原始虚拟 Dom 和新的虚拟 Dom 的区别，找到区别是 span 中的内容 (极大的提升了性能)
    > 比较原则：同层比对。若某一层的 Dom 有差异时，则停止比对该 Dom 上的子 Dom，直接替换整个 Dom
    优势：算法简单，比对的速度较快，减少了算法上的消耗
    缺点：会造成 Dom 上重新渲染的浪费
    注: key 值尽量不要用下标，因为下表是变化的，会导致 key 不稳定。






