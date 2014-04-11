var gCount = 0;
window.onload = function () {
	document.getElementById ('btnFind').onclick = replaceStr;
}
function replaceStr ()
{
	//alert ("hiii");
	var str = document.getElementById ('sourceText').innerHTML;
	//alert (str);
	//var a = str.replace (/javascript/gi, "JavaScript");
	var strToReplace = function () {
		return "JavaScript" + gCount++;	
	}
	var a = str.replace (/javascript/gi, strToReplace);
	document.getElementById ('sourceText').innerHTML = a;
}
