window.onload = initAll;
function initAll ()
{
	alert (navigator.platform);
	document.getElementById("redirect").onclick = clickHandler;
	switch (navigator.platform)
	{
		case "win32" :
			alert ("You are using windows");
			break;
		case "MacPPC" :
			alert ("You are using mac");
			break;

	}
}
function clickHandler ()
{
	//alert ("clicked");
	window.location = "http://www.google.com";
	//return false;
}
