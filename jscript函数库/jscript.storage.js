/**
 * jscript.storage package
 *	客户端存储
 */
 
 
 
 
 
if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.storage = function() { }




//创建一个cookie并把它保存在客户端
jscript.storage.setCookie = function(inName, inValue, inExpiry) {
  if (typeof inExpiry == "Date") {
    inExpiry = inExpiry.toGMTString();
  }
  document.cookie = inName + "=" + escape(inValue) + "; expires=" + inExpiry;
} 





//获得一个指定cookie的值
jscript.storage.getCookie = function(inName) {
  var docCookies = document.cookie;
  var cIndex = docCookies.indexOf(inName + "=");
  if (cIndex == -1) {
    return null;
  }
  cIndex = docCookies.indexOf("=", cIndex) + 1;
  var endStr = docCookies.indexOf(";", cIndex);
  if (endStr == -1) {
    endStr = docCookies.length;
  }
  return unescape(docCookies.substring(cIndex, endStr));
}






//删除cookie
jscript.storage.deleteCookie = function(inName) {
  if (this.getCookie(inName)) {
    this.setCookie(inName, null, "Thu, 01-Jan-1970 00:00:01 GMT");
  }
} 
