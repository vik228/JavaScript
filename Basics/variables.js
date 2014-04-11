function myFunc (theObject)
{
	theObject.make = "Toyota";
}
var myCar = {make: "Honda", model: "Accord", year: 1998}, x, y;
x= myCar.make;
print (x);
myFunc (myCar);
y = myCar.make;
print(y);
