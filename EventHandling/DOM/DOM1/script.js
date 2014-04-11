window.onload = initAll;
var nodeChangingArea;

function initAll ()
{
	document.getElementsByTagName ("form")[0].onsubmit = nodeChanger;
	nodeChangingArea = document.getElementById ("modifiable");
}

function addNode ()
{
	//alert ("cuming here");
	var inText = document.getElementById ("textArea").value;
	var newText = document.createTextNode (inText);
	
	var newGraf = document.createElement ("p");
	newGraf.appendChild (newText);
	nodeChangingArea.appendChild (newGraf);
	
	return false;
}
function delNode ()
{
	var nodeToDelete = document.getElementById ("grafCount").selectedIndex;
	var allGrafs = nodeChangingArea.getElementsByTagName ("p");
	var killGraf = allGrafs.item(nodeToDelete);
	nodeChangingArea.removeChild(killGraf);
}
function insertNode ()
{
	var insertPlace = document.getElementById("grafCount").selectedIndex;
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode (inText);
	var newGraf = document.createElement ("p");
	newGraf.appendChild (newText);
	var allGrafs = document.getElementsByTagName ("p");
	var oldGraf = allGrafs.item (insertPlace);
	nodeChangingArea.insertBefore (newGraf, oldGraf);
}

function nodeChanger ()
{
	var actionType = -1;
	var currentPageCount = nodeChangingArea.getElementsByTagName ("p").length;
	var radioButtonSet = document.getElementsByTagName("form")[0].nodeAction;

	for (var i = 0; i < radioButtonSet.length; i++)
	{
		if (radioButtonSet[i].checked)
		{
			actionType = i;
		}
	}

	switch (actionType)
	{
		case 0:
			addNode();
			break;
		case 1:
			if (currentPageCount > 0)
			{
				delNode();
				break;
			}
		case 2:
			if (currentPageCount > 0)
			{
				insertNode ();
				break;
			}
		default:
			alert ("No valid action was choosen");
	}
	document.getElementById ("grafCount").options.length = 0;
	for (var i = 0; i < nodeChangingArea.getElementsByTagName ("p").length; i++)
	{
		document.getElementById ("grafCount").options[i] = new Option(i+1);
	}

	return false;
}
