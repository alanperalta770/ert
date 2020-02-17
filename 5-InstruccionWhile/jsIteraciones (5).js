function mostrar()
{

var sexo = prompt("ingrese f ó m .");//creo el var y asignoun prompt
while (sexo!="f"&&sexo!="m") {sexo=prompt("vuelva a ingresar f o m");//la condicion del whiele va con "!" para poder ingresar dos cosa x ejemplo este ejercicio 
    
}
document.getElementById('Sexo').value=sexo;//luego agrego el valor del var dentro del document

}//FIN DE LA FUNCIÓN