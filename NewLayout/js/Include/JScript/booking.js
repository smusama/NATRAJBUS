// JScript File

function bookingval()
{
  
    val = document.getElementById('ctl00_cphkalladaTravels_lblvalue').innerText;      
    if(val=='UNR')
    {
        if (isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_txtbookedby'), "Card Holder's Name Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {if(isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_txtconno'), "contact Number Must'nt be Empty ", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {if (isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_txtconadd1'), "Contact Address Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))    
        {if (isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_txtcity'),"city Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {if (isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_txtzipcode'), "Pincode Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {if (isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_ddlstate'), "State Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
    //  {if (isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_TxtEmail'), "Email id  Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {if (isValidEmail(document.getElementById('ctl00_cphkalladaTravels_TxtEmail'), " E-mail id Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {return true;	
	    }}}}}}}
    }
    else
     {     
      if(isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_txtbookedby'), "Card Holder's Name Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {if(isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_txtconno'), "Contact Number Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
//	    {if(isEmptyValidation(document.getElementById('ctl00_cphkalladaTravels_TxtEmail'), "Agent Ticket Number Must'nt be Empty", document.getElementById('ctl00_cphkalladaTravels_lblcaptchamsg')))
        {return true;
	    }}
	 }
      return false;      
 }
  
  