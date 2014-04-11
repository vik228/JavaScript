function Rectangle (w, h)
{
	this.width = w;
	this.height = h;
}
Rectangle.prototype.area = function () {
	return (this.width * this.height);
}
Rectangle.prototype.perimeter = function () {
	return (2*this.width + 2*this.height);
}
Rectangle.prototype.toString = function () {
	return ("Rectangle of width: " + this.width + " & height: " + this.height);
}
function DepthRectangle (w, h, d)
{
	Rectangle.call (this, w, h);
	this.depth = d;
}
DepthRectangle.prototype = new Rectangle ();
DepthRectangle.prototype.constructor = DepthRectangle;
DepthRectangle.prototype.volume = function () {
	return (this.area()*this.depth);
}
DepthRectangle.prototype.toString = function () {
	return ("DepthRectangle of width: " + this.width + " ,height: " + this.height + " and depth :" + this.depth);
}
Array.prototype.longestElement = function () {
	var maxLength = 0;
	for (var i = 0; i < this.length; i++)
	{
		if (this[i].toString().length > maxLength)
		{
			maxLength = this[i].toString().length;
		}
	}
	return maxLength;
}
var myRect = new Rectangle (5, 6);
var myDepthRectangle = new DepthRectangle (5, 6, 7);
//alert (myDepthRectangle.toString());
//alert (myDepthRectangle instanceof Rectangle);
//alert (myRect.toString());
var myArray = new Array (0, 1, "this is an example", "lets make a big string, make it bigger and bigger");
alert (myArray.longestElement ());

