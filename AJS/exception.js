window.onload = testException;
function getName ()
{
	var sName = prompt ("Enter your name", "");
	if (!sName || sName.length == 0)
		throw new Error ("Invalid name");
	alert ("Your name is: " + sName);
}
function testException ()
{
	try
	{
		getName();
	}
	catch (e)
	{
		alert ("Not a valid name");
	}
}
