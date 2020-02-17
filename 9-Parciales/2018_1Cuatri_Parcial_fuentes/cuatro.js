function mostrar()
{
var a
var b
var c
var d
a=prompt("ingrese numero uno ","ingrese aqui");
b=prompt("ingrese numero dos ","ingrese aqui" );
if(a==b){alert("su numero uno es "+a+ " igaul a a su numero dos "+b)}
else
{
 if (a>b) {c=parseInt(a)-parseInt(b);
    alert("numero uno es mayor se genera una resta su resultado es "+c);
}
    
else
  d=parseInt(a)+parseInt(b);
  alert("numero dos es mayor se genera una suma su resultado es "+d);
  if (d>10) {alert("la suma es "+d+" y supero el 10"); }
}
}