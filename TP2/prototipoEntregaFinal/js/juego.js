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
}
