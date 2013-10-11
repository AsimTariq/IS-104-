// Programmeringsspråk listen som viser "Display" på siden.

var textBlocks = new Array( 
'Velkommen til en mystisk verden av programmeringsspråk', 
'Actionscript', 
'Apllescript',
'ASP',
'BASIC',
'C',
'C++',
'Clojure',
'COBOL',
'Coldfusion',
'Erlang',
'Fortran',
'Groovy',
'Haskell',
'Java',
'Javascript',
'Perl',
'PHP',
'Python',
'Ruby',
'Scala',
'Scheme'
); 

function changeText(elemid)
 { 
var ind = document.getElementById(elemid).selectedIndex; 
document.getElementById("display").innerHTML=textBlocks[ind]; 
	} 
	
function myFunction()
{
alert("Denne siden er under konstruksjon kom tilbake senere!!!");
}
