function map (f, a)
{
	var result = new Array(), i;
	for (i = 0; i < a.length; i++)
		result[i] = f(a[i]);
	return result;
}
var result = new Array();
result = map (function (x) {return (x*x*x)}, [0,1,2,5,10]);
for (var i = 0; i < result.length; i++)
	print (result[i]);

