var ctx = document.getElementById("canvas").getContext("2d");
var nuevoJuego = null;
var rectanguloAuxiliar = null;
var torreAnterior = null;
var torreSiguente = null;

function jugar(dificultad){
	nuevoJuego = new Juego(dificultad);
	nuevoJuego.draw(ctx);
	document.getElementById("movimientos").innerHTML = 0;
	document.getElementById("notificaciones").innerHTML ="";
}

canvas.onmousedown = function(e){
	document.getElementById("notificaciones").innerHTML ="";
	torreAnterior = nuevoJuego.rectanguloSeleccionado(e.layerX,e.layerY);
	if(torreAnterior.rectangulosEnTorre()){
		rectanguloAuxiliar = torreAnterior.takeRectangle();
	}
	else
	torreAnterior = null;
}

canvas.onmousemove = function(e){
	if((rectanguloAuxiliar != null) && (torreAnterior!= null)){
		nuevoJuego.draw(ctx);
		rectanguloAuxiliar.draw(ctx,e.layerX,e.layerY);
	}
}
canvas.onmouseup = function(e){
	torreSiguente = nuevoJuego.rectanguloSeleccionado(e.layerX,e.layerY);
	if(torreSiguente != null && torreAnterior!=null){
		if(torreSiguente.acceptRectangle(rectanguloAuxiliar)){
			torreSiguente.putRectangle(rectanguloAuxiliar);
			if (torreAnterior != torreSiguente){
			nuevoJuego.actualizarMovimientos();
			}
			if(nuevoJuego.ganar()){
				document.getElementById("notificaciones").innerHTML = "GANASTE!!!, lo has logrado en "+	nuevoJuego.getMovimientos() +" movimientos";
			}
		}
		else{
			document.getElementById("notificaciones").innerHTML = "Movimiento no permitido (piezas de menor a mayor)"
			torreAnterior.putRectangle(rectanguloAuxiliar);
		}
		torreSiguente = null;
		torreAnterior = null;
		rectanguloAuxiliar = null;
	}
	nuevoJuego.draw(ctx);
}
