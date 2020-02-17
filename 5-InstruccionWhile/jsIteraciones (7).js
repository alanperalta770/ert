function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var uno=0;
	do
	{
		contador++;
		uno=prompt("ingrese numero");
		acumulador=acumulador+parseInt(uno);
		respuesta=prompt("ingrese su respuesta","imgrese Si o No ");
	}
	while(respuesta=="Si"||respuesta=="No");

 document.getElementById('suma').value=acumulador;
 document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN