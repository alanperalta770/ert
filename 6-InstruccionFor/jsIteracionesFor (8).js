function mostrar()
{ 
var numero=parseInt(prompt("ingrese un numero:"));
var contador=0;
for(var i=1;i<=numero;i++){
    if((numero%i)=0){
        contador++
    }
    if (contador==2) {
        alert("El numero primo ingresado es primo");
    }
    else{
        alert("El numero no es primo")
    }
}




}//FIN DE LA FUNCIÓN