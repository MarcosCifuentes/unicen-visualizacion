class juego{
  constructor(dificultad){
    this.torreIzquierda = new torre(200);
    this.torreCentro = new torre(500);
    this.torreDerecha = new torre(800);
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

  checkSelected (posX,posY){
    if(this.torreIzquierda.checkClicked(posX,posY))
      return this.torreIzquierda;
    else if(this.torreCentro.checkClicked(posX,posY))
      return this.torreCentro;
    else if(this.torreDerecha.checkClicked(posX,posY))
      return this.torreDerecha;
    else
      return null;
  }

  checkEmpty(posX,posY){
    if((this.torreIzquierda.checkClicked(posX,posY)) && (this.torreIzquierda.checkEmpty()))
      return true;
    else if((this.torreCentro.checkClicked(posX,posY)) && (this.torreCentro.checkEmpty()))
      return true;
    else if((this.torreDerecha.checkClicked(posX,posY)) && (this.torreDerecha.checkEmpty()))
      return true;
    else
      return false;
  }

}