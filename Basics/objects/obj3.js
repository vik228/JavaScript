function displayCar ()
{
	var result = "A beautiful " + this.year + " " + this.make + " " + this.model;
	print (result);
}
function person (name, age, sex)
{
	this.name = name;
	this.age = age;
	this.sex = sex;
}
function Car (make, model, year, owner)
{
	this.make = make;
	this.model = model;
	this.year = year;
	this.owner = owner;
	this.displayCar = displayCar;
}
var p1 = new person ("vikas", 22, "male");
var c1 = new Car ("abc", "gfd", 1993, p1);
c1.displayCar();
