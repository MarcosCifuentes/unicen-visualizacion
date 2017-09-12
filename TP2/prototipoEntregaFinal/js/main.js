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

canvas.onmousedown = function(e){
	anterior = instancia.checkSelected(e.layerX,e.layerY);
	if(anterior.checkEmpty()){
		auxiliar = anterior.takeRectangle();
		instancia.actualizarMovimientos();
	}
	else
	anterior = null;
}

canvas.onmousemove = function(e){
	if((auxiliar != null) && (anterior!= null)){
		instancia.draw(ctx);
		auxiliar.draw(ctx,e.layerX,e.layerY);
	}
}
canvas.onmouseup = function(e){
	siguiente = instancia.checkSelected(e.layerX,e.layerY);
	if(siguiente != null){
		if(siguiente.acceptRectangle(auxiliar)){
			siguiente.putRectangle(auxiliar);
			siguiente = null;
			anterior = null;
			auxiliar = null;

	instancia.draw(ctx);
}
