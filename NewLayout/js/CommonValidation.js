/*Numeric Validation*/
function AllowAlphabet(evt){return filterInputCommonForAllValidation(0, evt, '');}

function AllowNumericAndAlphabet(evt){return filterInputCommonForAllValidation(2, evt, '');}

function AllowNumeric(evt){return filterInputCommonForAllValidation(1, evt, '');}

function AllowNumericWithDecimal(evt){return filterInputCommonForAllValidation(3, evt,'');}

function AllowCustomFormat(evt,custom){return filterInputCommonForAllValidation(6, evt, custom);}

/*Common For All*/
function filterInputCommonForAllValidation(filterType, evt, customfrm)
{ 
    var keyCode, Char, inputField, filter = ''; 
    var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ. '; 
    var num   = '0123456789.'; 
    var number= '0123456789';
    var splchr = '/'; 
    var splchr = '@_~$&*#/-'; 
    if(window.event)
    { 
	    keyCode = window.event.keyCode; 
	    evt = window.event; 
    }
    else if (evt)keyCode = evt.which; 
    else return true; 
        
    if(filterType == 0) filter = alpha; 
    else if(filterType == 1) filter = num; 
    else if(filterType == 2) filter = alpha + num;
    else if(filterType == 3) filter = num; 
    else if(filterType == 4) filter = number; 
    else if(filterType == 5) filter = alpha + num + splchr; 
    else if(filterType == 6) filter = customfrm;  
    
    if(filter == '') return true;
    
    inputField = evt.srcElement ? evt.srcElement : evt.target || evt.currentTarget; 
    if((keyCode==null) || (keyCode==0) || (keyCode==8) || (keyCode==9) || (keyCode==13) || (keyCode==27))return true; 
    Char = String.fromCharCode(keyCode); 
    if((filter.indexOf(Char) > -1)) return true;     
    else return false;
}