/**
 * jscript.string
 *	帮助我们使用字符串
 */
 
 
 
if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.string = function() { }




//计算一个子串在字符串中出现的次数
jscript.string.substrCount = function(inStr, inSearchStr) {
  if (inStr == null || inStr == "" ||
    inSearchStr == null || inSearchStr == "") {
    return 0;
  }
  var splitChars = inStr.split(inSearchStr);
  return splitChars.length - 1;
}





//从一个字符串中删除指定的字母
jscript.string.stripChars = function(inStr, inStripOrAllow, inCharList) {
  if (inStr == null || inStr == "" ||
    inCharList == null || inCharList == "" ||
    inStripOrAllow == null || inStripOrAllow == "") {
     return "";
  }
  inStripOrAllow = inStripOrAllow.toLowerCase();
  var outStr = "";
  var i;
  var j;
  var nextChar;
  var keepChar;
  for (i = 0; i < inStr.length; i++) {
    nextChar = inStr.substr(i, 1);
    if (inStripOrAllow == "allow") {
      keepChar = false;
    } else {
      keepChar = true;
    }
    for (j = 0; j < inCharList.length; j++) {
      checkChar = inCharList.substr(j, 1);
      if (inStripOrAllow == "allow" && nextChar == checkChar) {
        keepChar = true;
      }
      if (inStripOrAllow == "strip" && nextChar == checkChar) {
        keepChar = false;
      }
    }
    if (keepChar == true) {
      outStr = outStr + nextChar;
    }
  }
  return outStr;
} 





//测试是否只包含合法字符或者只包含非法字符
jscript.string.strContentValid = function(inString, inCharList, inFromExcept) {
  if (inString == null || inCharList == null || inFromExcept == null ||
    inString == "" || inCharList == "") {
    return false;
  }
  inFromExcept = inFromExcept.toLowerCase();
  var i;
  if (inFromExcept == "from_list") {
    for (i = 0; i < inString.length; i++) {
      if (inCharList.indexOf(inString.charAt(i)) == -1) {
        return false;
      }
    }
    return true;
  }
  if (inFromExcept == "not_from_list") {
    for (i = 0; i < inString.length; i++) {
      if (inCharList.indexOf(inString.charAt(i)) != -1) {
        return false;
      }
    }
    return true;
  }
} 



 
 
 
//在一个字符串中出现的替换所有的某个子串
jscript.string.replace = function(inSrc, inOld, inNew) {
  if (inSrc == null || inSrc == "" || inOld == null || inOld == "" ||
    inNew == null || inNew == "") {
    return "";
  }
  while (inSrc.indexOf(inOld) > -1) {
    inSrc = inSrc.replace(inOld, inNew);
  }
  return inSrc;
}





//从字符串的开头删掉空格
jscript.string.leftTrim = function(inStr) {
  if (inStr == null || inStr == "") {
    return null;
  }
  var j;
  for (j = 0; inStr.charAt(j) == " "; j++) { }
  return inStr.substring(j, inStr.length);
} 





//从字符串的开头删掉空格
jscript.string.rightTrim = function(inStr) {
  if (inStr == null || inStr == "") {
    return null;
  }
  var j;
  for (j = inStr.length - 1; inStr.charAt(j) == " "; j--) { }
  return inStr.substring(0, j + 1);
} 




//同时从两边删除空格
jscript.string.fullTrim = function(inStr) {
  if (inStr == null || inStr == "") {
    return "";
  }
  inStr = this.leftTrim(inStr);
  inStr = this.rightTrim(inStr);
  return inStr;
} 





//将一个字符串分割成几个指定长度的片段
jscript.string.breakLine = function(inText, inSize) {
  if (inText == null || inText == "" || inSize <= 0) {
    return inText;
  }
  if (inText.length <= inSize) {
    return inText;
  }
  var outArray = new Array();
  var str = inText;
  while (str.length > inSize) {
    var x = str.substring(0, inSize);
    var y = x.lastIndexOf(" ");
    var z = x.lastIndexOf("\n");
    if (z != -1) {
      y = z;
    }
    if (y == -1) {
      y = inSize;
    }
    outArray.push(str.substring(0, y));
    str = str.substring(y);
  }
  outArray.push(str);
  return outArray;
} 
