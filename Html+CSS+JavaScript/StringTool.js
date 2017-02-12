// JavaScript Document
function trim()
{
	var start,end;
	start = 0;
	end = this.length-1;
	while (start<=end&&this.charAt(start)==" "){
		start++;
	}
	while (start<=end&&this.charAt(end)==" "){
		end--
	}
	return this.substring(start,end+1);
}

function reverse(){
	var str="";
	for (var x=this.length-1;x>=0;x--){
		str+= this[x];
	}
	return str;
}

String.prototype.trim = trim;
String.prototype.reverse = reverse;