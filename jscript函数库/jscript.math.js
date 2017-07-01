//jscript.matn包，包含一些数学函数



if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.math = function() { }


//如何在一个指定范围内生成随机数
jscript.math.genRandomNumber = function(inMin, inMax) {

  if (inMin > inMax) {
    return 0;
  }
  return Math.round(inMin + (inMax - inMin) * Math.random());

} // End genRandomNumber().
