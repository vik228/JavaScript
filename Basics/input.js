importPackage(java.io);
importPackage(java.lang);
var stdin = new BufferedReader ( new InputStreamReader (System['in']));
var aLine = stdin.readLine();
while (!aLine.EOF())
{
	print (aLine);
}
