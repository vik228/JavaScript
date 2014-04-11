window.onload = printCode;
function printCode ()
{
	document.getElementById ("jsCode").innerHTML = "boom";
	alert ("This is the alert box!!!!");
	if (navigator.cookieEnabled)
	{
		alert ("oh bhencod!!! support karta hai be..:P..:D");
	}
	else
	{
		alert ("iski ma ki...nai karta madharchod..chutiya browser..huhhh");
	}
	if (confirm ("karna chahta hai betichod"))
	{
		//alert ("thek hai beta");
		var ans = prompt ("naam bta bhenchod", "");
		if (ans)
		{
			alert ("tera naam hai " + ans);
		}
		else
			alert ("naam pucha lund insaan");
	}
	else
		alert ("ma chuda behn ke lode");
}
