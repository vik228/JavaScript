window.onload = initAll;

function initAll ()
{
	document.getElementsByTagName ("form")[0].onsubmit = addNode;
	document.getElementById("deleteNode").onclick = delNode;
}

function addNode ()
{
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode (inText);

	var newPnode = document.createElement("p");
	newPnode.appendChild(newText);

	var docBody = document.getElementsByTagName ("body")[0];
	docBody.appendChild (newPnode);
	return false;
}
function delNode()
{
	var Ptags = document.getElementsByTagName ("p");
	if (Ptags.length > 1)
	{
		var lastPnode = Ptags[Ptags.length-1];
		var docBody = document.getElementsByTagName ("body")[0];
		var removed = docBody.removeChild (lastPnode);
	}
	else
		alert ("Nothing to remove");
	return false;
}
