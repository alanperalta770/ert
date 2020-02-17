function mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var valor;
	do{
		
		valor = prompt("ingrese un numero");
		if(valor>0)
		{
		 positivo=positivo+parseInt(valor);
		}else{
			negativo=negativo*parseInt(valor)
		}
        
	}while(respuesta="si"||respuesta="Si");



 // EN LUGAR DE HACER RESPUWESTA  QUE TOME PRIMERO LA RESPUESTA Y DESPUES EL RESTO

 document.getElementById('suma').value=positivo;
 document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN