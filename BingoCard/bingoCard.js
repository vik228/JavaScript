window.onload = initAll;
var usedNums = new Array (76);
function initAll()
{
	document.getElementById ("reload").onclick = anotherCard;
	newCard();
}
function newCard ()
{
	for (var i = 0; i < 24; i++)
	{
		setSquare (i);
	}
}
function setSquare (thisSquare)
{
	var currSquare = "square" + thisSquare;
	var colPlace = new Array (0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	var colBasis = colPlace[thisSquare]*15;
	var newNum = colBasis + getNum() + 1;
	if (usedNums[newNum])
	{
		while (usedNums[newNum])
		{
			newNum = colBasis + getNum() + 1;
		}
	}
	usedNums[newNum] = true;
	document.getElementById (currSquare).innerHTML = newNum;
}
function getNum ()
{
	return (Math.floor (Math.random()*15));
}
function anotherCard ()
{
	for (var i = 0; i < usedNums.length; i++)
		usedNums[i] = false;
	newCard ();
	return false;
}
