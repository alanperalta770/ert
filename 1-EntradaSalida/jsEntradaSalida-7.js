/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var sumare4
    sumare4=document.getElementById("numeroUno").value;
    var azul
    azul=document.getElementById("numeroDos").value;
    var resultado
    resultado=parseInt(sumare4)+parseInt(azul);
    alert("su resultado es " + resultado);
}

function restar()
{
    var dos
    var tres
    var cuatro
    var dos=document.getElementById("numeroUno").value;
    var tres=document.getElementById("numeroDos").value;
    var cuatro=parseInt(dos)-parseInt(tres);
    alert("su resultado es " + cuatro );
}

function multiplicar()
{ 
    var negro
    var violeta
    var naranja
    var negro=document.getElementById("numeroUno").value;
    var violeta=document.getElementById("numeroDos").value;
    var naranja=parseInt(negro) * parseInt(violeta);
    alert("su resultado es " + naranja);
}

function dividir()
{
	
}

