// JavaScript source code
function sum()  
{ 
    var myElec=document.getElementById("myElec").value; 
    var myGas=document.getElementById("myGas").value; 
    var Total=parseInt(myGas)+parseInt(myElec); 
    document.getElementById("Total").value=Total; 
} 