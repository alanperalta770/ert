function mostrar()
{  
 var mesDelAño = document.getElementById('mes').value;

 switch (mesDelAño) {
    case "Febrero":
        alert("Este mes tiene 28 dias")
        break;}
 switch (mesDelAño) {
     case "Abril":
         case"Junio":
         case"Septiembre":
         case"Noviembre":
         alert("Este mes tiene 30 dias")
         default:alert("Este mes tiene mas de 31 dias ")
         break;
        }
}//FIN DE LA FUNCIÓN