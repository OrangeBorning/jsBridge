# JavascriptBridge
H5和客户端之间使用到的桥接封装

## Basic Usage
``` bash
npm install javascript-bridge
or
yarn add javascript-bridge
```
``` javascript
import JSBridge from 'javascript-bridge';
```

## H5页面中调用
``` javascript
// 初始化,判断当前是否存在可用的bridge对象
JsBridge.first() 
// OC端 向 JS端 传数据的回调函数， 注册 registerHandler（标识符， 数据回调闭包）， 当OC端发起数据传送，会调用 function(数据, OC端给的回调函数)
JsBridge.registerHandler(name, fun)
// JS端 向 OC端 传数据的方式，callHandler（方法标识符， 数据， 回调）
JsBridge.callHandler(name, data, fun)
```

## vue中使用示例
main.js
```javascript
import JsBridge from 'javascript-bridge';
Vue.prototype.$JsBridge = JsBridge
```
App.vue
```javascript
this.$JsBridge.first() // 连接App
```
Test.vue
```javascript
methods: {
  registerFunName () {
    this.$JsBridge.registerHandler('fun-name',(res) => { // H5注册方法供客户端调用
      const result = JSON.parse(res)
      if(result.success === true) {                     
         // do something                                          
      } else {
         // do something 
      }
    })
  },
  callFunName () { 
    this.$JsBridge.callHandler('fun-name',{data}) // H5调用客户端注册的方法
  }
}
```
