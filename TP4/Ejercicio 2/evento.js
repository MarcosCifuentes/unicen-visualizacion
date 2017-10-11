let div1 = document.getElementById('figura1');
let div2 = document.getElementById('figura2');
let div3 = document.getElementById('figura3');
let div4 = document.getElementById('figura4');
let array = ["rotate(60deg)","translate(100px,100px)","scale(2)","translate(200px,200px)","skewX(25deg)"];
let color = "";

div1.addEventListener('click', ()=>{
  let random= array[Math.floor(Math.random() * array.length)];
  div1.style.transform=random;
  let color=getRandomColor();
  div1.style.color=color;
});
div2.addEventListener('click', ()=>{
  let random= array[Math.floor(Math.random() * array.length)];
  div2.style.transform=random;
  let color=getRandomColor();
  div2.style.color=color;
});
div3.addEventListener('click', ()=>{
  let random= array[Math.floor(Math.random() * array.length)];
  div3.style.transform=random;
  let color=getRandomColor();
  div3.style.color=color;
});
div4.addEventListener('click', ()=>{
  let random= array[Math.floor(Math.random() * array.length)];
  div4.style.transform=random;
  let color=getRandomColor();
  div4.style.color=color;
});
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
