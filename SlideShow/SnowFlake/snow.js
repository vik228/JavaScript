window.onload = initAll;
var c = null;
var cx = null;
var heightOffset = 100;
function initAll ()
{
	//alert ("yea");
	c = document.getElementById ("cv1");
	cx = c.getContext("2d");
	c.height = 800;
	c.width = 1600;
	//cx.fillRect (0, 0, 1001, 1001)
	setInterval (function() {snowFall()} , 300);
}
function snowFall ()
{
	clear();
	for (var i = 0; i < 3; i++)
	{
		cx.fillStyle = "green"
		var x = Math.random ()*c.width;
		var y = Math.random ()*heightOffset;
		var i = 0, j = 0;
		while (i <= x || j < y)
		{
			cx.arc (i++, j++, 10, 0, 2*Math.PI);
			cx.fill();
		}
	}
	//clear();

}
function clear()
{
	
		cx.clearRect (0, 0, c.width, c.height);
		cx.beginPath();
		cx.strokeRect (0, 0, c.width+1, c.height+1);
		cx.stroke();
}
