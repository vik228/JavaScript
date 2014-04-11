window.onload = initDbClick;

function initDbClick()
{
	alert ("hiiii");
	for (var i = 0; i < document.images.length; i++)
	{
		document.images[i].ondbclick = newWindow;
	}
}
function newWindow ()
{
	var imgName = "images/" + this.id + ".jpg";
	var imgWindow = window.open (imgName, "imgWin", "width = 320, height = 240, scrollbars = no");
}
