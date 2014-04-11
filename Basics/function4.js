var pet = function (name)
{
	//var s = "a string";
	var getName = function ()
	{
		return name;
	}
	return getName;
}
var myPet = pet ("vivie");
print (myPet ());
//print (s);
