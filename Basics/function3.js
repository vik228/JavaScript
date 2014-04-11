var num1 = 2;
var num2 = 3;
var name = "vikas";
function multiply ()
{
	return(num1*num2);
}
multiply ();
function getScore ()
{
	var num1 = 2;
	var num2 = 3;
	function add ()
	{
		return (name + " scored "  + (num1 + num2));
	}
	return add();
}
print (multiply());
print (getScore());
