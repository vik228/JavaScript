function myConcat (separator)
{
	print (separator);
	var result = "", i;
	for (var i = 1; i < arguments.length; i++)
	{
		result += arguments[i] + separator;
	}
	return result;
}
print (myConcat(", ", "red ", "orange", "blue"));
