class Rectangle{
  constructor(numeroRectangulo){
    this.numeroRectangulo=numeroRectangulo;
    this.height=20;
    this.width=numeroRectangulo*20+20;
    this.color=this.getRandomColor();
  }

  draw(ctx,posX,posY){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(posX-(this.width/2),posY,this.width,this.height);
    ctx.closePath();
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
