var ctx = document.getElementById("canvas").getContext("2d");

var instancia = null;
var auxiliar = null;
var anterior = null;
var siguiente = null;

function jugar(dificultad){
	instancia = new juego(dificultad);
	instancia.draw(ctx);
	document.getElementById("movimientos").innerHTML = 0;
}
	instancia.draw(ctx);
}
