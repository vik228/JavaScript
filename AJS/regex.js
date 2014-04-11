window.onload = initAll;
function initAll ()
{
	document.getElementById('b').onclick = testStr;
}
function testStr ()
{
	var text = document.getElementById ('anStr').value;
	alert (bTestAllGroups (text));
}
function bTestAllGroups (text)
{
	return (text.match (/(['"])[^'"]*\1/) != null);
}
