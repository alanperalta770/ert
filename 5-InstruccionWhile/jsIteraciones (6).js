function mostrar()
{
//creo var dos igualados a 0
	var contador=0;
	var acumulador=0;
	var uno
	//creo un whiel
 while (contador<5) { uno=prompt("ingrese numeros aqui");//creo el prompt y guardo esos datos en un var, aca mismo en el while agrego la condicion de cuantas veces repito el while
 acumulador=acumulador+parseInt(uno);//para poder sumar los numeros ingresados en el var uno y acumularlos tengo que parsearlos ""parseInt"
 contador++//para contar las rondad que se van sumando y no se valla repitiendo el cuadro de prompt infinitamente pongo contador +1
 }
 document.getElementById('suma').value=acumulador;//creo el document para agregar el numero en la pagina
 document.getElementById('promedio').value=acumulador/5;//y aca divido el el va acumulado para sacar el promedio final

}//FIN DE LA FUNCIÓN