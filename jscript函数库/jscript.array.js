//构建数组包,包含一些常用的数组函数



if (typeof jscript == 'undefined') {
  jscript = function() { }
}
jscript.array = function() { }



//jscript.array.copyArray将一个数组的内容复制到另一个数组
jscript.array.copyAssay=function(inSrcArray,inDesArray){
	var i;
	for(i=0;i<inSrcArray.length;i++){
		inDesArray.push(inSrcArray[i]);
		}
		return inDesArray;
	}


//jscript.array.findInArray查找一个特定值是否在数组中
jscript.array.findInArray=function(inArray,inValue){
	var i;
	for(i=0;i<inArray.length;i++){
		if(inArray[i]==inValue){
			return inArray[i];
			}
		}
		return -1;
	}
	
	
//jscript.array.arrayAverage计算数组中的平均值
jscipt.array.arrayAverage=function(inArray){
	var sum=0;
	var i;
	for(i=0;i<inArray.length;i++){
		sum+=inArray[i];
		}
	return sum/inArray.length;
	}