/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{var numero
    numero=document.getElementById("numeroUno").value;
    var numeros
    numeros=document.getElementById("numeroDos").value;
    var resulto
    resulto=parseInt(numero)+parseInt(numeros);
    alert("tun resultado es "+resulto);
}