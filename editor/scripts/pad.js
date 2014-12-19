localStorage.padnumbers=0;  // set a local variable
function line(event)
{
	if(event.keyCode==13)		// check if key pressed is ENTER
	{
		if(localStorage.padnumbers==0) // if first time pressed
		{
			document.getElementById('padnumbers').value=localStorage.padnumbers;		// set 0 at first place
			localStorage.padnumbers=parseInt(localStorage.padnumbers)+1					// increase local variable
			document.getElementById('padnumbers').value=document.getElementById('padnumbers').value+'\n'+localStorage.padnumbers;		
					// after setting to zero put a new line
		}
		else
		{			// after zero has been set keep on adding the local variable so that it return 0 1 2 with /n and so on
					document.getElementById('padnumbers').value=document.getElementById('padnumbers').value+'\n'+localStorage.padnumbers;
		}
		localStorage.padnumbers=parseInt(localStorage.padnumbers)+1;	
		 // increase local variable by 1

				document.getElementById('padnumbers').scrollTop=localStorage.padnumbers+1;
	}

	var words=document.getElementById('pad').value;
	var chars=0;
	var space=0;
	var w=0;
	for(var i=0;i<words.length;i++)
	{
		if(words.charAt(i)==' ')
		{
			if(words.charAt(i-1)!=' ')
			space=space+1;	
		}
		w=space+1;

		if(words.charAt(i)==' '||words.charAt(i)=='\t'||words.charAt(i)=='\n')
		{
		
		}
		
		else
		{
			chars=chars+1;
		}
	}
	document.getElementById('chars').value=chars;
	document.getElementById('words').value=w;
	
}
function fontChange()
{
		document.getElementById('pad').style.fontFamily=document.getElementById('fontfamily').value;
		document.getElementById('padnumbers').style.fontFamily=document.getElementById('fontfamily').value;
}
function fontSize()
{
		document.getElementById("pad").style.fontSize=document.getElementById('fontsize').value;
		document.getElementById("padnumbers").style.fontSize=document.getElementById('fontsize').value;
}
function bold()
{
		document.getElementById("pad").style.fontWeight="bold";
		document.getElementById("padnumbers").style.fontWeight="bold";
}
function italics()
{
		document.getElementById("pad").style.fontStyle="italic";
		document.getElementById("padnumbers").style.fontStyle="italic";
}


function read()
{
	var find=document.getElementById('pad').value;
	for(var i=0;i<find.length;i++)
	{
		if(find.charAt(i)=='\n')
		{
				if(localStorage.padnumbers==0) // if first time pressed
				{
			document.getElementById('padnumbers').value=localStorage.padnumbers;		// set 0 at first place
			localStorage.padnumbers=parseInt(localStorage.padnumbers)+1					// increase local variable
			document.getElementById('padnumbers').value=document.getElementById('padnumbers').value+'\n'+localStorage.padnumbers;		
					// after setting to zero put a new line
				}
				else
				{			// after zero has been set keep on adding the local variable so that it return 0 1 2 with /n and so on
					document.getElementById('padnumbers').value=document.getElementById('padnumbers').value+'\n'+localStorage.padnumbers;
				}
				localStorage.padnumbers=parseInt(localStorage.padnumbers)+1;	
		 // increase local variable by 1

				document.getElementById('padnumbers').scrollTop=localStorage.padnumbers+1;
		
		
		}
	}

}
