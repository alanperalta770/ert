function mostrar()
{
var hora
hora=document.getElementById("laHora").value; 
var dos 
dos=parseInt(hora)
switch(dos){
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    alert("Es de mañana");
    break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 18:
    case 19:
    alert ("Es de tarde");
    break;
}





} 