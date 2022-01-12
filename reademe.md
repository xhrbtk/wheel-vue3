- npm info vue-router versions  // 用命令行查询所有 vue-router 的可用版本

```
- cant find module  typescript 只能理解.ts 文件 无法理解 .vue 文件
- 解决方法  创建xxx.d.ts 告诉ts 如何理解.vue文件
- shims-vue.d.ts 文件
```

## Home.vue
- topnav: 左边是logo 右边是menu
- banner： 文字介绍 + 开始按钮

## Doc.vue
- topnav: 同上
- content: 左边是aside 右边是main

## 自动引入功能  安装auto import 插件

## switch 组件 当value为字符串”true“或布尔值true时 显示为开 其他情况显示为关

## vue3 的v-model

## 传给组件的事件  默认传给组件的最外层元素 button组件
- 默认所有属性都绑定到根元素
- 使用inheritAttrs:false 可以取消默认绑定
- 使用$attrs或者context.attrs获取所有属性
- 使用v-bind="$attrs"批量绑定属性
- 使用const{size, ...rest} = context.attrs 将属性分开
## 不能使用scoped
- 因为data-v-xxx中的xxx每次运行可能不同
- 必须输出稳定不变的class 选择器 方便使用者覆盖
- 必须家前缀
- .button 不行 很容易被使用者覆盖
- .wheel-button 可以 不太容易被覆盖
- .theme-link 不行 很容易被使用者覆盖
- .wheel-theme-link 可以 不太容易被覆盖

## Teleport 任意传送门

## 所有写的.vue文件最终都会变成一个type  context.slots.default()[0] === Tab 用来判断传进去的子组件是否是Tab组件
## 如何在运行时 确认子组件的类型  通过检查context.slots.default()数组

## 添加圆弧clip-path