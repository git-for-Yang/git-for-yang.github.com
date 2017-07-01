/**
 * jscript.lang包
 *	在基础的水平上包含一些帮助我们使用JS的代码
 */
 
 
 
 
 
if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.lang = function() { }




//复制一个对象的属性给另一个对象
jscript.lang.copyProperties = function(inSrcObj, inDestObj, inOverride){
  var prop;
  for (prop in inSrcObj) {
    if (inOverride || !inDestObj[prop]) {
      inDestObj[prop] = inSrcObj[prop];
    }
  }
  return inDestObj;
} 
