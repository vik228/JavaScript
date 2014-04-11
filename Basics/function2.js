function facto (n)
{
	return ((n < 2) ? 1 : n*facto(n-1));
}
var fact = function fac (n) {return ((n < 2) ? 1 : n*fac(n-1))};
var square = function(number) {return number*number};
print (fact(3))
print (square (3));
