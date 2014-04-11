window.onload = setupCanvas;
var c = null;
var cx = null;
var mousedown = false;
var oldx = null;
var oldy = null;
function setupCanvas ()
{
	c = document.getElementById ("myCanvas");
	cx = c.getContext("2d");
	c.height = 400;
	c.width = 300;
	cx.lineWidth = 20;
	cx.lineCap = 'round';
	cx.srokeStyle = 'rgb(0, 0, 50)';
	cx.font = 'bold 300px helvetica';
	cx.fillStyle = '(rgb (255, 0, 0))';
	cx.textBaseLine = 'middle';
	drawLetter ('y');
	c.onmousedown = processOnMouseDown;
	c.onmouseup = processOnMouseUp;
	c.onmousemove = callPaint;
}
function drawLetter (letter)
{
	var centerx = (c.width - (cx.measureText(letter).width))/2;
	var centery = c.height/2;
	cx.fillText (letter, centerx, centery);
}
function processOnMouseDown (e)
{
	mousedown = true;
	return false;
}
function processOnMouseUp (e)
{
	mousedown = false;
	return false;

}
function callPaint(e)
{
	var x = e.clientX;
	var y = e.clientY;
	if (mousedown)
	{
		paint (x, y);
	}
	
}
function paint (x, y)
{
	cx.beginPath();
	if (oldx > 0 && oldy > 0)
	{
		cx.moveTo (oldx,oldy);
	}
	cx.lineTo (x, y);
	cx.stroke();
	cx.closePath();
	oldx = x;
	oldy = y;
}
