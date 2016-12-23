function calcular()
{
	var n = document.getElementById("n").value;
	var salida = document.getElementById("salida");
	if (n>21){
		salida.innerHTML = n-21;
	}
	else{
		salida.innerHTML = (21-n)*2
	}
}