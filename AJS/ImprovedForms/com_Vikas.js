var com_vikas = null;
if (!com_vikas)  
	com_vikas = {};
com_vikas.EVENTS = {
	NAME: "Event Handling Module",
	VERSION: 1.0,

	addEventHandler: function (oNode, sEvt, fnHandler, bCapture){
		if (typeof(window.event) != "undefined")
			oNode.attachEvent ("on" + sEvt, fnHandler);
		else
			oNode.addEventListener (sEvt, fnHandler, bCapture)
	},
	
	removeEventHandler: function (oNode, sEvt, fnHandler, bCpature) {
		if (typeof (window.event) != "undefined")
			oNode.detachEvent ("on" + sEvt, fnHandler);
		else
			oNode.removeEventListener (sEvt, fnHandler, bCapture);
	},

	getEventTarget: function (evt) {
		if (window.event)
			return window.event.srcElement;
		else
			return evt.target;
	},

	stopEvent: function (evt) {
		if (window.event)
			window.event.cancelBubble = true;
		else
			evt.stopPropagation();
	},

	preventDefault: function (evt) {
		if (window.event)
			window.event.returnValue = false;
		else
			evt.preventDefault ();
	}

}
