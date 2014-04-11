window.onload = initAll;
var focusElementStyle = "2px solid #000000";
var unFocusElementStyle = "2px solid #cbcbcb";
var focusBackColor = "#ffc";
var emailReg = /^[\w\.=-]+\@[\w\.-]+\.[a-z]{2,4}$/;
var invalidFeilds = 0;
function initAll ()
{
	var ele = document.getElementsByTagName ('textarea');
	for (var i = 0; i < ele.length; i++)
	{
		com_vikas.EVENTS.addEventHandler (ele[i], 'focus', highlightFormElement, false);
		com_vikas.EVENTS.addEventHandler (ele[i], 'blur', unHighlightFormElement, false);
	}

	ele = document.getElementsByTagName ('input');
	for (var i = 0; i < ele.length; i++)
	{
		var attr = ele[i].getAttribute ('type');
		if (attr.indexOf ('text') != -1)
		{
			com_vikas.EVENTS.addEventHandler (ele[i], 'focus', highlightFormElement, false);
			com_vikas.EVENTS.addEventHandler (ele[i], 'blur', unHighlightFormElement, false);
		}
	}
	ele = document.getElementById('form1');
	com_vikas.EVENTS.addEventHandler (ele, 'reset', function() {
		document.getElementsByTagName('input')[0].focus();
		var allLabels = document.getElementsByTagName ('label');
		for (var i = 0; i < allLabels.length; i++)
		{
			document.getElementsByTagName('label')[i].className = "required";
		}
	}, false);

	com_vikas.EVENTS.addEventHandler (ele, 'submit', validateAllFields, false);
	document.getElementsByTagName ('input')[0].focus();
	com_vikas.EVENTS.addEventHandler (document.getElementById ('subject'), 'blur', validateSubject, false);
	com_vikas.EVENTS.addEventHandler (document.getElementById ('address'), 'blur', validateAddress, false);
	com_vikas.EVENTS.addEventHandler (document.getElementById ('message'), 'blur', validateMsg, false);
}

function highlightFormElement (evt)
{
	var a = com_vikas.EVENTS.getEventTarget(evt);
	if (a  != null)
	{
		a.style.border = focusElementStyle;
		a.style.backgroundColor = focusBackColor;
	}
}

function unHighlightFormElement (evt)
{
	var a = com_vikas.EVENTS.getEventTarget (evt);
	if (a != null)
	{
		a.style.border = unFocusElementStyle;
		a.style.backgroundColor = "";
	}
}
function getLabelById (thisId)
{
	var allLabels = document.getElementsByTagName ('label');
	var attrName = window.event ? "htmlFor" : "for";
	for (var i = 0; i < allLabels.length; i++)
	{
		if (allLabels[i].getAttribute (attrName) == thisId)
		{
			return allLabels[i];
		}
	}
	return null;
}
function validateSubject ()
{
	//alert ("vikas");
	var subId = document.getElementById ('subject');
	var ok = (subId.value != null && subId.value.length != 0)
	var subLabel = getLabelById ('subject');
	if (subLabel != null)
	{
		if (ok)
		{
			subLabel.className = "validated";
		}
		else
			subLabel.className = "invalid";
	}
	return ok;
}
function validateAddress ()
{
	var subId = document.getElementById ('address');
	var ok = (subId.value != null && subId.value.length != 0 && emailReg.test (subId.value))
	var subLabel = getLabelById ('address');
	if (subLabel != null)
	{
		if (ok)
		{
			subLabel.className = "validated";
		}
		else
			subLabel.className = "invalid";
	}
	return ok;
}
function validateMsg()
{
	var subId = document.getElementById ('message');
	var ok = (subId.value != null && subId.value.length != 0)
	var subLabel = getLabelById ('message');
	if (subLabel != null)
	{
		if (ok)
		{
			subLabel.className = "validated";
		}
		else
			subLabel.className = "invalid";
	}
	return ok;
}
function validateAllFields (e)
{
	var otay = validateMsg();
	otay &= validateAddress();
	otay &= validateSubject();
	if (!otay)
	{
		alert ("Please fill the form properly");
		com_vikas.EVENTS.preventDefault(e);
	}
}
