var ctx = document.getElementById("canvas").getContext("2d");
var original = null;
var source = "images/kingkong.jpg";
var controlCarga = false;

function imagenPredefinida (){
	var predefinida = new Image();
	predefinida.src =original;
	imgOrigin = predefinida;
	predefinida.onload = function () {
		myDrawImage(this);
	}
}
imagenPredefinida();
}

function seleccionar() {
	controlCarga = true;
	document.getElementById('js-seleccionarImagen').click();
}

function cargarImagen() {
	if (controlCarga) {
		var image = new Image();
		image.src =document.getElementById('js-seleccionarImagen').files[0].name;
		source = image.src;
		original = image;
		image.onload = function () {
			myDrawImage(this);
		}
		imagenPredefinida();
	}else{
		imagenPredefinida();
	}
}

function myDrawImage(image) {
	ctx.drawImage(image,0,0);
}

function guardarImagenFiltrada() {
   ctx.toDataURL("image/jpg");
 }

function filtroBlancoYNegro(){
	myDrawImage(original);
	var imageData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);

	for (x=0; x<imageData.width; x++){
		for (y=0; y<imageData.height; y++){

			r=getRed(imageData,x,y);
			g=getGreen(imageData,x,y);
			b=getBlue(imageData,x,y);

			BlancoYNegro=(r+g+b)/3;

			setPixel(imageData,x,y,BlancoYNegro,BlancoYNegro,BlancoYNegro,255);
		}
	}
	ctx.putImageData(imageData,0,0);
}


function filtroNegativo(){
	myDrawImage(original);
	var imageData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);

	for (x=0; x<imageData.width; x++){
		for (y=0; y<imageData.height; y++){

			negativoRed= 255-getRed(imageData,x,y);
			negativoGreen= 255-getGreen(imageData,x,y);
			negativoBlue= 255-getBlue(imageData,x,y);

			setPixel(imageData,x,y,negativoRed,negativoGreen,negativoBlue,255);
		}
	}
	ctx.putImageData(imageData,0,0);
}

function filtroSepia(){
	myDrawImage(original);
	var imageData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);

	for (x=0; x<imageData.width; x++){
		for (y=0; y<imageData.height; y++){

			r=getRed(imageData,x,y);
			g=getGreen(imageData,x,y);
			b=getBlue(imageData,x,y);

			sepiaRed=Math.floor(0.393*r + 0.769*g + 0.189*b);
			sepiaGreen=Math.floor(0.349*r + 0.686*g + 0.168*b);
			sepiaBlue=Math.floor(0.272*r + 0.534*g + 0.131*b);


			setPixel(imageData,x,y,sepiaRed,sepiaGreen,sepiaBlue,255);
		}
	}
	ctx.putImageData(imageData,0,0);
}

function filtroBinarizacion(){
	myDrawImage(original);
	var imageData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);

	for (x=0; x<imageData.width; x++){
		for (y=0; y<imageData.height; y++){

			r=getRed(imageData,x,y);
			g=getGreen(imageData,x,y);
			b=getBlue(imageData,x,y);

			BYNBInario=(r+g+b)/3;

			if (BYNBInario < 120){
				BYNBInario = 0;
			}
			else {
				BYNBInario = 255;}


				setPixel(imageData,x,y,BYNBInario,BYNBInario,BYNBInario,255);
			}
		}
		ctx.putImageData(imageData,0,0);
	}

	function getRed(imageData,x,y){
		index=(x+y*imageData.width)*4;
		return imageData.data[index+0];
	}

	function getGreen(imageData,x,y){
		index=(x+y*imageData.width)*4;
		return imageData.data[index+1];
	}

	function getBlue(imageData,x,y){
		index=(x+y*imageData.width)*4;
		return imageData.data[index+2];
	}

	function setPixel(imageData,x,y,r,g,b,a){
		index = (x+y*imageData.width)*4;
		imageData.data[index+0] =r;
		imageData.data[index+1] =g;
		imageData.data[index+2] =b;
		imageData.data[index+3] =a;
	}
