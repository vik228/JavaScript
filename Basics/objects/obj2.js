//Object initializer method;
var myHonda = {color: "red", wheels: 4, engine: {cylinders:4, size: 2.2}};
print (myHonda.color);
print (myHonda.engine.cylinders);
//Function constructor method
function car (make, model, year)
{
	this.make = make;
	this.model = model;
	this.year = year;
}
var myCar = new car ("Eagle", "Talon TSL", 1993);

//The properties can be other objects also,....consider the follwing "person" object..
function person (name, age, sex)
{
	this.name = name;
	this.age = age;
	this.sex = sex;
}
function Car1 (make, model, year, owner)
{
	this.make = make;
	this.model = model;
	this.year = year;
	this.owner = owner;
}
var p1 = new person ("vikas", "22", "male");
var c1 = new Car1 ("Eagle", "Talson TSL", 1993, p1);
print (c1.owner.name);

//suppose we want to add some property to the object Car1...in order to do this so that all the objects of the type Car1 gets information abt this property is to use "prototype" property....

Car1.prototype.color = null;
c1.color = "red";
print (c1.color);
