function addEventHandler (oNode, sEvt, sFunc, bCaptures)
{
	if (!(typeof(window.event) == "undefined"))
		oNode.attachEvent ("on" + sEvt, sFunc);
	else
		oNode.addEventListener (sEvt, sFunc, bCaptures);
}
function getEventTarget (e)
{
	if (window.event != null)
		return (window.event.srcElement);
	else
		return e.target;
}
function stopEvent (evt)
{
	if (window.event != null)
	{
		window.event.cancelBubble = true;
	}
	else
		evt.stopPropagation();
}
function div1Handler (evt)
{
	
	var e = evt || window.event;
	var target = getEventTarget (e);
	var str = "Event handler for div1 , target: " + target.getAttribute ('id') + " ; type: " + e.type;
	if (e.eventPhase)
		str += " ; phase: " + e.eventPhase;
	alert (str);

}
function div2Handler (evt)
{
	
	var e = evt || window.event;
	var target = getEventTarget (e);
	var str = "Event handler for div2 , target: " + target.getAttribute ('id') + " ; type: " + e.type;
	if (e.eventPhase)
		str += " ; phase: " + e.eventPhase;
	alert (str);
	stopEvent (evt);
}
function div3Handler (evt)
{
	
	var e = evt || window.event;
	var target = getEventTarget (e);
	var str = "Event handler for div3 , target: " + target.getAttribute ('id') + " ; type: " + e.type;
	if (e.eventPhase)
		str += " ; phase: " + e.eventPhase;
	alert (str);
}
function bodyHandler (evt)
{
	var e = evt || window.event;
	var target = getEventTarget (e);
	var str = "Event handler for body , target: " + target.getAttribute ('id') + " ; type: " + e.type;
	if (e.eventPhase)
		str += " ; phase: " + e.eventPhase;
	alert (str);
}
function initializeHandlers ()
{
	var bodyObj = document.getElementsByTagName ("body")[0];
	var div1Obj = document.getElementById ("div1");
	var div2Obj = document.getElementById ("div2");
	var div3Obj = document.getElementById ("div3");
	addEventHandler (bodyObj, "click", bodyHandler, false);
	addEventHandler (div1Obj, "click", div1Handler, false);
	addEventHandler (div2Obj, "click", div2Handler, false);
	addEventHandler (div3Obj, "click", div3Handler, false);
	if (!window.event)
	{
			
		addEventHandler (bodyObj, "click", bodyHandler, true);
		addEventHandler (div1Obj, "click", div1Handler, true);
		addEventHandler (div2Obj, "click", div2Handler, true);
		addEventHandler (div3Obj, "click", div3Handler, true);
	}
}
addEventHandler (window, "load", function (evt) { initializeHandlers();});
