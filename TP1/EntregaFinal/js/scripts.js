var ctx = document.getElementById("canvas").getContext("2d");
var ctxFiltros = document.getElementById("canvasFiltros").getContext("2d");
var imagen = null;
var source = "images/kingkong.jpg";

function imagenPredefinida(){
	var predefinida = new Image();
	predefinida.src =source;
	imagen = predefinida;
	predefinida.onload = function () {
		myDrawImage(this,0,0);
	}
}

imagenPredefinida();

function myDrawImage(image) {
	ctx.drawImage(image,0,0,500,300);
	ctxFiltros.drawImage(image,0,0,500,300);
}

$(function() {
	$('#file-input').change(function(e) {
		var file = e.target.files[0],
		imageType = /image.*/;

		if (!file.type.match(imageType))
		return;

		var reader = new FileReader();
		reader.onload = fileOnload;
		reader.readAsDataURL(file);

	});

	function fileOnload(e) {
		var $img = $('<img>', { src: e.target.result });
		var canvas = $('#canvas')[0];
		var context = canvas.getContext('2d');

		$img.load(function() {
			ctx.drawImage(this, 0, 0,500,300);
			ctxFiltros.drawImage(this,0,0,500,300);
			imagen=canvas;
		});

	}
});

function guardarImagenFiltrada() {
	var dataURL = canvasFiltros.toDataURL("image/png");
	var a = document.getElementById("guardar");
	a.href= dataURL;
}

function filtroBlancoYNegro(){
	myDrawImage(imagen);
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
	ctxFiltros.putImageData(imageData,0,0);
}

function filtroNegativo(){
	myDrawImage(imagen);
	var imageData = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height);

	for (x=0; x<imageData.width; x++){
		for (y=0; y<imageData.height; y++){

			negativoRed= 255-getRed(imageData,x,y);
			negativoGreen= 255-getGreen(imageData,x,y);
			negativoBlue= 255-getBlue(imageData,x,y);

			setPixel(imageData,x,y,negativoRed,negativoGreen,negativoBlue,255);
		}
	}
	ctxFiltros.putImageData(imageData,0,0);
}

function filtroSepia(){
	myDrawImage(imagen);
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
	ctxFiltros.putImageData(imageData,0,0);
}

function filtroBinarizacion(){
	myDrawImage(imagen);
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
		ctxFiltros.putImageData(imageData,0,0);
	}

	function filtroBlur(){
		convolve([[ 1,  2,  1],
      [ 2,  4,  2],
      [ 1,  2,  1]])
	}

	function filtroBorderLine(){
		convolve([[ 1,  1,  1],
      [ 1, -7,  1],
      [ 1,  1,  1]])
	}

	function filtroSharpen(){
		convolve([[ 0, -2,  0],
      [-2, 11, -2],
      [ 0, -2,  0]])
	}

	function convolve(matrix,offset){
		var m = [].concat(matrix[0], matrix[1], matrix[2]); // flatten
		divisor = m.reduce(function(a, b) {return a + b;}) || 1; // sum
		var oldpx = ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height).data;
		var newdata = ctxFiltros.createImageData(ctx.getImageData(0,0,ctx.canvas.width,ctx.canvas.height));
		var newpx = newdata.data
		var len = newpx.length;
		var res = 0;
		var w = 500;

		for (var i = 0; i < len; i++) {
    if ((i + 1) % 4 === 0) {
      newpx[i] = oldpx[i];

    }
		res = 0;
	     var these = [
	       oldpx[i - w * 4 - 4] || oldpx[i],
	       oldpx[i - w * 4]     || oldpx[i],
	       oldpx[i - w * 4 + 4] || oldpx[i],
	       oldpx[i - 4]         || oldpx[i],
	       oldpx[i],
	       oldpx[i + 4]         || oldpx[i],
	       oldpx[i + w * 4 - 4] || oldpx[i],
	       oldpx[i + w * 4]     || oldpx[i],
	       oldpx[i + w * 4 + 4] || oldpx[i]
	     ];
	     for (var j = 0; j < 9; j++) {
	       res += these[j] * m[j];
	     }
	     res /= divisor;
	     if (offset) {
	       res += offset;
	     }
	     newpx[i] = res;

  }
  ctxFiltros.putImageData(newdata,0,0);
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
