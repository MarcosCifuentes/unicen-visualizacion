class Torre {
  constructor(posicion){
    this.Rectangulos = [];
    this.posX=posicion;
    this.width=300;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = "#000000";;
    ctx.fillRect(this.posX-15,80,30,400);
    ctx.closePath();

    var y = 400;
    for (var i = 0; i<this.Rectangulos.length; i++){
      y = y-this.Rectangulos[i].heigth;
      this.Rectangulos[i].draw(ctx,this.posX,y);
    }
  }

  takeRectangle(){
    return this.Rectangulos.pop();
  }

  putRectangle(rectangle){
    return this.Rectangulos.push(rectangle);
  }

  acceptRectangle(rectangle){
    if(this.Rectangulos.length > 0){
      if(this.Rectangulos[this.Rectangulos.length-1].numeroRectangulo > rectangle.numeroRectangulo)
        return true;
      else
        return false;
    }
    else {
      return true;
    }
  }

  rectangulosEnTorre(){
    return this.Rectangulos.length;
  }

  checkClicked(posX,posY){
    if ((posX > this.posX-(this.width/2)) && (posX < this.posX+(this.width/2)))
      return true;
    else
      return false;
  }

  checkEmpty(){
    if (this.Rectangulos.length > 0)
      return true;
    else
      return false;
  }
}
