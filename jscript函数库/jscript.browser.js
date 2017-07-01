//创建jscript.browser代码包，包含一些浏览器标识信息的函数


if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.browser = function() { }



//jscript.browser.getBrowserIdentity获取正在使用应用程序的浏览器的标识信息
jscript.browser.getBrowserIdentity = function() {
  return navigator.appName + " " + navigator.appVersion;
} 
