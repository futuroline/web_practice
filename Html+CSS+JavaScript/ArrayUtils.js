// JavaScript Document
function ArrayTool(){
	
}

var ArrayTool = new ArrayTool();

function getMax(arr){
	var max = arr[0];
	for (var i=1;i<arr.length;i++){
		if (max<arr[i]){
			max = arr[i];
		}
	}
	return max;
}

function getMin(arr){
	var min = 0;
	for (var i=1;i<arr.length;i++){
		if (arr[min]>arr[i]){
			min = i;
		}
	}
	return arr[min];
}

ArrayTool.getMax = getMax;
ArrayTool.getMin = getMin;