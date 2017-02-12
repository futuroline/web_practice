// JavaScript Document
function Persion(name,age){
	this.name = name;
	this.age= age;
}
	
var p = new Persion("lisi",90);

p.getName = function(){
	return p.name;
}