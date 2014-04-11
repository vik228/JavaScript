window.onload = function () {
	document.getElementById ('b').onclick = searchPattern;
}
function searchPattern ()
{
	var str = document.getElementById ('p1').innerHTML;
	var pat = /javascript/i;
	countSearch (str, pat, 10);
}
function searchPat (str, pat)
{
	if (str.search (pat) != -1)
		alert (str.search(pat));
	else
		alert ("pattern not found");
}
function countSearch (str, pat, patLength)
{
	var count = 0, pos = 0;
	while ((pos = str.search (pat)) != -1)
	{
		count++;
		pos += patLength;
		str = str.substr (pos);
	}
	alert (count);
}
