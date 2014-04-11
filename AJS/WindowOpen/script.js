var isOpen = null;
function openMyWindow (winUrl, winName, winFeatures, winObj)
{
	if (winObj != null)
	{
		if (!winObj.closed)
		{
			winObj.focus();
			return winObj;
		}
	}
	var newObj = window.open (winUrl, winName, winFeatures, winObj);
	return newObj;
}
function openWin (e)
{
	isOpen = openMyWindow ("http://www.google.com", "myWin", "height = 250, width = 480", isOpen);
}
function loadHandler ()
{
	com_vikas.EVENTS.addEventHandler (document.getElementById ('opener'), "click", openWin, false);
}
com_vikas.EVENTS.addEventHandler (window, "load", loadHandler, false);

