(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{180:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计模式")]),a._v(" "),r("p",[a._v("设计模式定义：在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。通俗一点来讲就是在某种特定场合下对某个问题的一种解决方案。")]),a._v(" "),r("p",[a._v("所有的设计模式的实现都遵循一条原则，‘找出程序变化的地方，并将变化封装起来’。")]),a._v(" "),r("h2",{attrs:{id:"设计原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计原则")]),a._v(" "),r("p",[a._v("设计本身是为了提高代码可利用性，增加可维护性，符合以下的原则：")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("单一原则：永远不应该有多于一个原因来改变某个类。当我们做系统设计时，如果发现有一个类拥有了两种的职责，那就问自己一个问题：可以将这个类分成两个类吗？如果真的有必要，那就分吧。千万不要让一个类干的事情太多！")])]),a._v(" "),r("li",[r("p",[a._v("开放封闭原则：软件实体，如：类、模块与函数，对于扩展应该是开放的，但对于修改应该是封闭的。当需求有改动，要修改代码了，此时您要做的是，尽量用继承或组合的方式来扩展类的功能，而不是直接修改类的代码。当然，如果能够确保对整体架构不会产生任何影响，那么也没必要搞得那么复杂了，直接改这个类吧。")])]),a._v(" "),r("li",[r("p",[a._v("最少知识原则（迪米特原则）：尽量减少对象之间的交互，从而减小类之间的耦合。简言之，一定要做到：低耦合，高内聚。")])]),a._v(" "),r("li",[r("p",[a._v("里氏转换原则：在使用基类的的地方可以任意使用其子类，能保证子类完美替换基类。")])]),a._v(" "),r("li",[r("p",[a._v("接口隔离原则：一个类与另一个类之间的依赖性，应该依赖于尽可能小的接口。不要对外暴露没有实际意义的接口")])]),a._v(" "),r("li",[r("p",[a._v("依赖倒转原则：引用一个对象，如果这个对象有底层对象，直接引用底层对象，比如可以直接用小桶打水，就没必要引用大桶向大桶灌水再用大桶。")])])]),a._v(" "),r("p",[a._v("solid: S:单一职责原则(Single responsibility principle),O:开放封闭原则(Open Close Principle),最少知识原(Law of Demeter),里氏替换原则(Liskov Substitution Principle),接口隔离原则(Interface Segregation Principle),依赖倒置原则(Dependence Inversion Principle)")]),a._v(" "),r("h2",{attrs:{id:"单例模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单例模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 单例模式")]),a._v(" "),r("p",[a._v("应用场景：全局唯一模态框，登录注册。\n延伸：单例懒加载\n定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。")]),a._v(" "),r("h2",{attrs:{id:"策略模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#策略模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 策略模式")]),a._v(" "),r("p",[a._v("应用场景：计算不同绩效的工资，表单验证\n将计算逻辑或者验证逻辑的算法单独封装。\n定义：一系列的算法，将它们一个个封装起来，并且使它们可以相互替代。")]),a._v(" "),r("h2",{attrs:{id:"代理模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 代理模式")]),a._v(" "),r("p",[a._v("应用场景：图片懒加载(proxyImage),代理缓存，代理合并请求\n定义：一个对象提供一个代用品或占位符，以便控制对它的访问。")]),a._v(" "),r("h2",{attrs:{id:"迭代器模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 迭代器模式")]),a._v(" "),r("p",[a._v("定义：提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。")]),a._v(" "),r("h2",{attrs:{id:"发布-订阅模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发布-订阅模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 发布-订阅模式")]),a._v(" "),r("p",[a._v("应用场景：DOM 事件系统(addEventListener)，网站登录系统\n定义：又叫观察者模式，它定义了对象间的一种一对多的依赖关系。当一个对象的状态发生变化时，所有依赖它的对象都将受到通知。\n延伸：订阅不同事件，订阅离线缓存")]),a._v(" "),r("h2",{attrs:{id:"命令模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令模式")]),a._v(" "),r("h2",{attrs:{id:"组合模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组合模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 组合模式")]),a._v(" "),r("h2",{attrs:{id:"模板模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模板模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 模板模式")]),a._v(" "),r("p",[a._v("延伸：好莱坞原则")]),a._v(" "),r("h2",{attrs:{id:"享元模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#享元模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 享元模式")]),a._v(" "),r("p",[a._v("定义：核心是运用共享技术来有效的支持大量颗粒度的对象，常用于性能优化。\n延伸：对象池")]),a._v(" "),r("h2",{attrs:{id:"职责链模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#职责链模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 职责链模式")]),a._v(" "),r("p",[a._v("定义：避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，知道有一个对象处理它为止。\n例子：手机商城-是否有 500 打折券->200 打折券 ->有库存...，aop，上传组件适配 html5=>flash=>xxx")]),a._v(" "),r("h2",{attrs:{id:"中介者模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 中介者模式")]),a._v(" "),r("p",[a._v("定义：作用是解除对象与对象之间的紧耦合关系，所有的相关对象都通过中介者对象来通信")]),a._v(" "),r("h2",{attrs:{id:"装饰者模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#装饰者模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 装饰者模式")]),a._v(" "),r("h2",{attrs:{id:"状态模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 状态模式")]),a._v(" "),r("h2",{attrs:{id:"适配器模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 适配器模式")]),a._v(" "),r("p",[a._v("定义：作用是解决两个软件实体间的接口不兼容问题。")])])}],!1,null,null,null);t.default=s.exports}}]);