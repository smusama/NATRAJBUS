// Validator JScript File

    
function isValidDate(elemID, Msg, DisplayID)
	{
		var dateExpression = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
		if(elemID.value.match(dateExpression))
		    {
			    DisplayID.innerText="";
			    elemID.focus();
			    return true;
		    }
		else
		    {
			    DisplayID.innerText=Msg;
			    return false;
		    }
	}
function trim(stringToTrim) 
	{
		return stringToTrim.replace(/^\s+|\s+$/g,"");
	}
function isAlphaNumeric(e)
		{
		
			var key = window.event ? e.keyCode : e.which;
			var keychar = String.fromCharCode(key);
			var reg = new RegExp("[0-9a-zA-Z]+$")
			
		if (key == 8)
			{
			 return true;
			}
			if (key == 0)
			{
			 return true;
			}
		if (key == 13)
			{
				key=8;
				keychar = String.fromCharCode(key);     
			}
		return reg.test(keychar);
		}
       
function allownumbers(e)
   {   
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    var reg = new RegExp("[0-9]")
     if (key == 8)
    {
     return true;
    }
    if (key == 0)
    {
     return true;
    }
    if (key == 13)
    {
     key=8;
     keychar = String.fromCharCode(key);     
    }
    return reg.test(keychar);
   } 

function SpaceDontAllow(e)
{
var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    var reg = new RegExp("[a-zA-Z.]+$")
if (key == 32)
    {
     return false;
    }
}
function DontAllow(e)

{
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    var reg = new RegExp("[a-zA-Z]+$")
    if (key == 8)
    {
     return true;
    }
     if (key == 0)
    {
     return true;
    }
    if (key == 32)
    {
     return true;
    }
   
    if (key == 13)
    {
     key=8;
     keychar = String.fromCharCode(key);     
    }
    return reg.test(keychar);
}

function AllowsSpace(e)
{   

 var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    var reg = new RegExp("[a-zA-Z ]+$")
 
    if (key == 8)
    {
     return true;
    }
    if (key == 0)
    {
     return true;
    }
    if (key == 46)
    {
     return true;
    }
    if (key == 13)
    {
     key=8;
     keychar = String.fromCharCode(key);     
    }
    return reg.test(keychar);
}

function Allowdot(e)
{
 var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    var reg = new RegExp("[a-zA-Z.]+$")
    if (key == 8)
    {
     keychar = String.fromCharCode(key);
    }
    if (key == 13)
    {
     key=8;
     keychar = String.fromCharCode(key);     
    }
    return reg.test(keychar);
}

function ForAddress(e)
{
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    var reg = new RegExp("[0-9a-zA-Z]+$")
    if (key == 8)
    {
     keychar = String.fromCharCode(key);
    }
    if (key == 13)
    {
     key=8;
     keychar = String.fromCharCode(key);     
    }
     if (key == 32)
    {
     keychar = String.fromCharCode(key);     
    return true;
    }
    return reg.test(keychar);

}
    function validatePwd(elemID,elemconID,Msg,DisplayID) 
    {
	    var pw1 = elemID.value;
		var pw2 = elemconID.value;
		if (pw1 != pw2) 
			{
			    DisplayID.innerText = Msg;
			    elemconID.value='';
			    elemID.focus();
			    return false;			
	    	}
	    return true
	 }
	 
  
     function isValidEmail(elemID, Msg, DisplayID)
   {
		var emailExpression=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if(elemID.value.match(emailExpression))
	    {
			    DisplayID.innerText="";			    
			    return true;
		    }
		else
	    {
			    DisplayID.innerText=Msg;
			    elemID.focus();
			    return false;
		    }
	}   
	
	function isValidValue(e)
  {
	              
	             var val = document.getElementById('ctl00_cphSRMTransports_lblvalue').innerText;
	             var key;   
	               if(val=='U')
                   {  
                        key = e.which ? e.which : e.keyCode;
				        if((key>=64 && key<=90)||(key>=48 && key<=57)||(key>=97 && key<=122)||key==45||key==46||key==95)
				        {   
				   	        e.returnValue = true;	
				        }
				        else
				        {
					        e.returnValue = false;
				        }
				     }
				     else
				     {
				     	 	
                         key = e.which ? e.which : e.keyCode;
                         if((key>=48 && key<=57) || (key>=65 && key<=91) || (key >=97 &&  key<=123)||(key==13)||(key==32))
                           {    
                           e.returnValue= true;
                           }
                           else
                          {
                                			
                          e.returnValue = false;	
                          }
				     }   
                
       
	}	
	
	
	    function ValidateDate(sender,args)
        {       
                     if (sender._selectedDate < new Date()) 
                     {
                       //document.getElementById('ctl00_cphSRMTransports_lblErrorMsg').innerText ="";
                       // document.getElementById('ctl00_cphSRMTransports_lblErrorMsg').innerText ="Previous date booking not allowed.";
                     
                        
                        sender._selectedDate = new Date(); 
                        sender._textbox.set_Value(sender._selectedDate.format(sender._format))
                     }
        }
            
            
     
	
	 
	       
	    
 function ValidateDate2(sender,args)
        {
                     if (sender._selectedDate > new Date()) 
                     {
                      // document.getElementById('ctl00_cphRajeshtvls_lblErrorMsg').innerText ="";
                       // document.getElementById('ctl00_cphRajeshtvls_lblErrorMsg').innerText ="Previous date booking not allowed.";
                     
                        
                        sender._selectedDate = new Date(); 
                        sender._textbox.set_Value(sender._selectedDate.format(sender._format))
                        
                     }
                   
            
        
        }
            
         
     



function fun2(e)
     {
     alert(e)
      var ce1 = $find("ce1");
        var start = ce1.get_selectedDate();        
        if(start == null)
            return;
        var ce2 = $find("ce2");
        var end = ce2.get_selectedDate();
        if(end == null)
            return;
if(start>end)
{
alert("from date is  higer then to date");
return false;
}            
        start.setDate(start.getDate() + 5);
        if(start < end)
        {
            alert("Should be select 5 days only from the to date");
             start.setDate(start.getDate() - 5);
            return false;
            }
        start.setDate(start.getDate() - 5);
     }