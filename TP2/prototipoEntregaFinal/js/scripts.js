var ctx = document.getElementById("canvas").getContext("2d");


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
class Rectangle{
	constructor(paramPosX,paramPosY,paramladoX,paramladoY,paramColor){
		this.posX=paramPosX;
		this.posY=paramPosY;
		this.ladoX=paramladoX;
		this.ladoY=paramladoY;
		this.color=paramColor;
	}

	draw (canvas){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.posX,this.posY,this.ladoX,this.ladoY);
	}

	selectRectangle(e){

		var cX = e.clientX;
	 	var cY = e.clientY;


		if (((this.posX<cX) && ((this.posX + this.ladoX) > cX))&&
		((this.posY<cY) && ((this.posY + this.ladoY) > cY))){
		}
	}
}

var control=" ";

// function construirDiscos (cantidad){
// 	for (var i = 0; i < cantidad; i++) {
// 		var i =  new Rectangle(30,0,50,20,getRandomColor());
// 		canvas.onload = rectangulo1.draw();
// 	}
// }
var rectangulo1 =  new Rectangle(30,0,50,20,getRandomColor());
canvas.onload = rectangulo1.draw();
var rectangulo2 =  new Rectangle(20,20,75,20,getRandomColor());
canvas.onload = rectangulo2.draw();
var rectangulo3 =  new Rectangle(10,40,100,20,getRandomColor());
canvas.onload = rectangulo3.draw();
var rectangulo4 =  new Rectangle(0,60,125,20,getRandomColor());
canvas.onload = rectangulo4.draw();

canvas.addEventListener('click',function(e) {rectangulo1.selectRectangle(e)});

// function mouseDown(e) {
//
// 	var cX = e.clientX;
// 	var cY = e.clientY;
//
// 	for (var i = 0; i < discos.length; i++) {
// 		if ((discos[i].posX <=cX &&(discos[i].posX+discos[i].ladoX) >=cX)&& (discos[i].posY<=cY && (discos[i].posY+discos[i].ladoY) >=cY ){
//
// 		}
// 	}
// }

// function mouseMove(e){
//
// }
//
// function mouseUp (e){
//
// }
