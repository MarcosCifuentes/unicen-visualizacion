class Juego{
  constructor(dificultad){
    this.torreIzquierda = new Torre(150);
    this.torreCentro = new Torre(450);
    this.torreDerecha = new Torre(750);
    this.movimientos = 0;
    this.dificultad = dificultad;
    for(var i=0; i<dificultad; i++){
      var rectangulo = new Rectangle(dificultad-i);
      this.torreIzquierda.putRectangle(rectangulo);
    }
  }

  draw(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.torreIzquierda.draw(ctx);
    this.torreCentro.draw(ctx);
    this.torreDerecha.draw(ctx);
  }

  rectanguloSeleccionado(posX,posY){
    if(this.torreIzquierda.rectanguloClicked(posX,posY)){
      return this.torreIzquierda;
      }
    else if(this.torreCentro.rectanguloClicked(posX,posY)){
      return this.torreCentro;
      }
    else if(this.torreDerecha.rectanguloClicked(posX,posY)){
      return this.torreDerecha;
      }
  }

  tieneRectangulos(posX,posY){
    if((this.torreIzquierda.rectanguloClicked(posX,posY)) && (this.torreIzquierda.tieneRectangulos()))
      return true;
    else if((this.torreCentro.rectanguloClicked(posX,posY)) && (this.torreCentro.tieneRectangulos()))
      return true;
    else if((this.torreDerecha.rectanguloClicked(posX,posY)) && (this.torreDerecha.tieneRectangulos()))
      return true;
    else
      return false;
  }

  ganar(){
    if(this.dificultad == this.torreDerecha.rectangulosEnTorre())
      return true;
    else
      return false;
  }

  getMovimientos(){
    return this.movimientos;
  }

  actualizarMovimientos(){
    this.movimientos++;
    document.getElementById("movimientos").innerHTML = this.movimientos;
  }
}
