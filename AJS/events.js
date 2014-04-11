function addEventHandler (oNode, sEvt, fFunc, bCaptures)
{
	if (typeof (window.event) != "undefined")
	{
		oNode.attachEvent ("on" + sEvt, fFunc);
	}
	else
		oNode.addEventListener (sEvt, fFunc, bCaptures);
}
function removeEventHandler (oNode, sEvt, fFunc, bCaptures)
{
	if (typeof (window.event) != "undefined")
	{
		oNode.detachEvent ("on" + sEvt, fFunc);
	}
	else
		oNode.removeEventListener (sEvt, fFunc, bCaptures);
}
function onLinkClicked (e)
{
	alert ("You clicked this link");
}
function getEventTarget (e)
{
	if (window.event != null)
		return (window.event.srcElement);
	else
		return e.target;
}
function onCheckBoxChecked (e)
{
	var target = getEventTarget (e);
	var obj = document.getElementById ("clickLink");
	if (target.checked)
		addEventHandler (obj, "click", onLinkClicked, false);
	else
		removeEventHandler (obj, "click", onLinkClicked, false);
}
function setUpClickHandler ()
{
	var oNode = document.getElementById ('checkbox1');
	addEventHandler (oNode, "click", onCheckBoxChecked, false);
}
addEventHandler (window, "load", setUpClickHandler, false);
