let div = document.getElementById('figura');
let array = ["rotate(60deg)","translate(100px,100px)","scale(2)","translate(200px,200px)","skewX(25deg)"];

div.addEventListener('click', ()=>{
  let random= array[Math.floor(Math.random() * array.length)];
  div.style.transform=random;
});
