function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var rar
	rar=Math.floor(Math.random()*10+1);
	if (rar>=9){alert(rar+ " Excelente");}
	else if (rar>4) {alert(rar+ " Aprobo");}
	else alert(rar + " Vamos la proxima se puede");
}