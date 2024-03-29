window.onload = initForms;
function initForms ()
{
	for (var i = 0;i < document.forms.length; i++)
	{
		document.forms[i].onsubmit = function () {
			return validForm();
		}
	}
}
function validForm ()
{
	//alert ("hiii");
	var allGood = true;
	var allTags = document.getElementsByTagName ("*");
	for (var i = 0; i < allTags.length; i++)
	{
		if (!validTag (allTags[i]))
		{
			allGood = false;
		}
	}
	return allGood;
	
	function validTag (thisTag)
	{
		var outClass = "";
		var allClasses = thisTag.className.split (" ");
		for (var j = 0; j < allClasses.length; j++)
		{
			//alert (allClasses[j]);
			outClass += validBasedOnClass (allClasses[j]) + " ";
		}
		thisTag.className = outClass;
		if (outClass.indexOf ("invalid") > -1)
		{
			invalidLabel (thisTag.parentNode);
			thisTag.focus();
			if (thisTag.nodeName == "INPUT")
			{
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validBasedOnClass (thisClass)
		{
			var classBack = "";
			switch (thisClass)
			{
				case "":
				case "invalid":
					break;
				case "reqd":
					if (allGood && thisTag.value == "")
					{
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "radio":
				case "email":
					classBack += thisClass;
					break;
				default:
					if (allGood && !crossCheck (thisTag, thisClass))
					{
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;
		}
		function crossCheck (inTag, otherFieldID)
		{
			if (!document.getElementById (otherFieldID))
			{
				return false;
			}
			return (document.getElementById (otherFieldID).value == inTag.value);
		}
		function invalidLabel (parentTag)
		{
			if (parentTag.nodeName == "LABEL")
			{
				parentTag.className += " invalid";
			}
		}
	}
}
