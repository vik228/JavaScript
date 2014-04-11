window.onload = initTest;
function initTest ()
{
	document.onclick = doSomething();
	document.getElementById ("link1").addEventListener ('click', handleLinkOne, false);
	document.getElementById ("link2").addEventListener ('click', handleLinkTwo, false);
}
function handleLinkOne ()
{
	alert ("link1 clicked");
	//return false;
}
function handleLinkTwo ()
{
	alert ("link2 clicked");
	//return false;
}
function doSomething ()
{
	alert ("The general event handler fired");
}
