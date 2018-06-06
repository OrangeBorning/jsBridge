/**
 * 函数描述：js调用webview事件
 *
 * jsBridge.callHandler(method, data, callBack(response));
 * @param method {string} 方法名
 * @param data {Object} 参数
 * @return {Object} 回调
 */

/**
 * 函数描述：webView调用JS事件
 *
 * jsBridge.registerHandler(method, callBack(response));
 * @param method {string} 方法名
 * @return {Object} 回调
 */

export default {
  init: function(callback) {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!isiOS) {
      // 判断当前是否存在可用的bridge对象
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function() {
            callback(WebViewJavascriptBridge)
          },
          false
        );
      }
    } else {
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }
      window.WVJBCallbacks = [callback];
      // 创建iframe 对象， 在网页中，iframe的用法非常多，主要应用于伪ajax、嵌套页面、页面重用。
      var WVJBIframe = document.createElement('iframe');
      // 修改 iframe 属性参数
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
      document.documentElement.appendChild(WVJBIframe);
      // 超时则移除iframe 对象
      setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)
    }
  },

  first: function() {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    console.log(u)
    if (!isiOS) {
      console.log('noWebView')
      var _this = this;
      _this.init(function(bridge) {
        bridge.init(function(message, responseCallback) {
          responseCallback(data);
        })
      })
    }
  },

  // OC端 向 JS端 传数据的回调函数， 注册 registerHandler（标识符， 数据回调闭包）， 当OC端发起数据传送，会调用 function(数据, OC端给的回调函数)
  registerHandler: function(name, fun) {
    var _this = this;
    _this.init(function(bridge) {
      bridge.registerHandler(name, fun);
    })
  },

  // JS端 向 OC端 传数据的方式，callHandler（方法标识符， 数据， 回调）
  callHandler: function(name, data, fun) {
    var _this = this;
    _this.init(function(bridge) {
      bridge.callHandler(name, data, fun);
    })
  }
}

