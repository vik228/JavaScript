addOnLoad (initOne);
addOnLoad (initTwo);
addOnLoad (initThree);

function addOnLoad (newFunction)
{
	var oldOnLoad = window.onload;
	if (typeof oldOnLoad == "function")
	{
		window.onload = function(){
			if (oldOnLoad)
			{
				//oldOnLoad();
			}
			newFunction();
		}
	}
	else
		window.onload = newFunction;
}
function initOne ()
{
	alert ("Me called");
	document.getElementById ("pageBody").style.backgroundColor = "#0000FF";
}
function initTwo ()
{
	alert ("Me2 called");
	document.getElementById ("pageBody").style.color = "#FF0000";
}
function initThree ()
{
	alert ("me3 called");
	var allTags = document.getElementsByTagName("*");
	for (var i = 0; i < allTags.length; i++)
	{
		if (allTags[i].nodeName == "H1")
		{
			allTags[i].style.border = "5px green solid";
			allTags[i].style.padding = "25px";
			allTags[i].backgroundColor = "#FFFFFF";
		}
	}
}
