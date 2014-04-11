var thisList = null;
function addEventHandler (oNode, sEvt, sFunc, bCaptures)
{
	if (typeof (window.event) != "undefined")
	{
		oNode.attachEvent("on" + sEvt, sFunc);
	}
	else
		oNode.addEventListener (sEvt, sFunc, bCaptures);
}
function CreateList (oSelList)
{
	this.objectSelList = oSelList;
}

CreateList.prototype.clear = function () {
	this.objectSelList.length = 0;
}

CreateList.prototype.fill = function (thisArray) {
	for (var  i = 0; i < thisArray.length; i++)
	{
		this.objectSelList.options[i] = new Option (thisArray[i]);
	}
}

CreateList.prototype.getCount = function () {
	return (this.objectSelList.length);
}

CreateList.prototype.find = function (thisItem, bShow) {
	this.objectSelList.selectedIndex = -1;
	for (var i = 0; i < this.getCount(); i++)
	{
		if (this.objectSelList.options[i].text == thisItem)
		{
			if (bShow)
				this.objectSelList.options.selectedIndex = i;
		}
	}
}
function fillList ()
{
	var itm = new Array ("one", "two", "three", "four", "five");
	thisList.fill(itm);
}
function clearList ()
{
	thisList.clear();
}
function listSize()
{
	alert (thisList.getCount());
}
function searchList ()
{
	thisList.find (document.getElementById ('txtToFind').value, true);
}
function initHandlers  ()
{
	var bObj1 = document.getElementById('b1');
	var bObj2 = document.getElementById ('b2');
	var bObj3 = document.getElementById ('b3');
	var bObj4 = document.getElementById ('b4');
	addEventHandler (bObj1, "click", fillList, false);
	addEventHandler (bObj2, "click", clearList, false);
	addEventHandler (bObj3, "click", listSize, false);
	addEventHandler (bObj4, "click", searchList, false);

}
window.onload = function () {
	thisList = new CreateList (document.getElementById('theList'));

	initHandlers();
}
