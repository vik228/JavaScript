window.onload = function() {
	document.getElementById ('btnMatchGlobal').onclick = doGlobalSearch;
	document.getElementById ('btnMatchNonGlobal').onclick = doNonGlobalSearch;
}
function findMatchesGlobal (str, pat)
{
	var result = str.match (pat);
	alert ("A total of " + result.length + " matches: " + result.join(", "));
}
function findMatchesNonGlobal (str, pat)
{
	var result = str.match (pat);
	alert (result.length + ": " + result[0] + ", " + result[1] + ", " + result[2]);
}
function doGlobalSearch ()
{
	var str1 = document.getElementById ('sourceText').innerHTML;
	findMatchesGlobal (str1, (/(\d{3})-(\d{4})/g));
}
function doNonGlobalSearch ()
{
	var str1 = document.getElementById ('sourceText').innerHTML;
	findMatchesNonGlobal (str1, (/(\d{3})-(\d{4})/));
}

