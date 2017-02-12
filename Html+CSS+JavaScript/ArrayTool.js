// JavaScript Document
function getMax(){
	var max = this[0];
	for (var i=1;i<this.length;i++){
		if (max<this[i]){
			max = this[i];
		}
	}
	return max;
}

function getMin(){
	var min = 0;
	for (var i=0;i<this.length;i++){
		if (this[min]>this[i]){
			min = i;
		}
	}
	return this[min];
}

function show(){
	for (i in this){
		document.write(this[i]+"  ");
	}
}

Array.prototype.getMax = getMax;
Array.prototype.getMin = getMin;
Array.prototype.show = show;