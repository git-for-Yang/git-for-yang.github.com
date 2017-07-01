
// jscript.dom 包，用来操作DOM

if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.dom = function() { }



//将任意的一个DOM元素水平居中
jscript.dom.layerCenterH = function(inObj) {
  var lca;
  var lcb;
  var lcx;
  var iebody;
  var dsocleft;
  if (window.innerWidth) {
    lca = window.innerWidth;
  } else {
    lca = document.body.clientWidth;
  }
  lcb = inObj.offsetWidth;
  lcx = (Math.round(lca / 2)) - (Math.round(lcb / 2));
  iebody = (document.compatMode &&
    document.compatMode != "BackCompat") ?
    document.documentElement : document.body;
  dsocleft = document.all ? iebody.scrollLeft : window.pageXOffset;
  inObj.style.left = lcx + dsocleft + "px";

} 



//将任意的一个DOM元素竖直居中
jscript.dom.layerCenterV = function(inObj) {
  var lca;
  var lcb;
  var lcy;
  var iebody;
  var dsoctop;
  if (window.innerHeight) {
    lca = window.innerHeight;
  } else {
    lca = document.body.clientHeight;
  }
  lcb = inObj.offsetHeight;
  lcy = (Math.round(lca / 2)) - (Math.round(lcb / 2));
  iebody = (document.compatMode &&
    document.compatMode != "BackCompat") ?
    document.documentElement : document.body;
  dsoctop = document.all ? iebody.scrollTop : window.pageYOffset;
  inObj.style.top = lcy + dsoctop + "px";

} 




//当使用一个ajax请求时，得到一堆包含<script>的内容，如何执行。
jscript.dom.execScripts = function (inText) {
  var si = 0;
  while (true) {
    // Finding opening script tag.
    var ss = inText.indexOf("<" + "script" + ">", si);
    if (ss == -1) {
      return;
    }
    // Find closing script tag.
    var se = inText.indexOf("<" + "/" + "script" + ">", ss);
    if (se == -1) {
      return;
    }
    // Jump ahead 9 characters, after the closing script tag.
    si = se + 9;
    // Get the content in between and execute it.
    var sc = inText.substring(ss + 8, se);
    eval(sc);
  }
} 




/**
 * 如何引用任意数量的DOM元素
 */
jscript.dom.getDOMElements = function() {
  if (arguments.length == 0) {
    return null;
  }
  if (arguments.length == 1) {
    return document.getElementById(arguments[0]);
  }
  var elems = new Array();
  for (var i = 0; i < arguments.length; i++) {
    elems.push(document.getElementById(arguments[i]));
  }
  return elems;
} 
