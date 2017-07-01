//构建jscript.datetime日期包,包含一些常用的日期时间代码



if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.datetime = function() { }



/*jscript.datetime.getNumberDaysInMonth通过输入的年月来直到这个月有多少天
 *输入的月份是1-12;表示为0-11;
 *4,6,9,11月只有30天
 *闰年2月29天，否则28天
 *其他月份31天
 */
jscript.datetime.getNumberDaysInMonth = function(inMonth, inYear) {
  inMonth = inMonth - 1;
  var leap_year = this.isLeapYear(inYear);
  if (leap_year) {
    leap_year = 1;
  } else {
    leap_year = 0;
  }
  if (inMonth == 3 || inMonth == 5 || inMonth == 8 || inMonth == 10) {
    return 30;
  } else if (inMonth == 1) {
    return 28 + leap_year;
  } else {
    return 31;
  }
} 


//jscript.datetime.isLeapYear判断是否为闰年
jscript.datetime.isLeapYear = function(inYear) {
  if ((inYear % 4 == 0 && !(inYear % 100 == 0)) || inYear % 400 == 0) {
    return true;
  } else {
    return false;
  }
} 