/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var uno
var dso
var uno=document.getElementById("sueldo").value;
dso=(parseInt(uno*10/100))+parseInt(uno);
document.getElementById("resultado").value=dso;
}
