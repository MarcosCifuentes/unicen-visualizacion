class Player{
  constructor(){
    this.numeroRectangulo=numeroRectangulo;
    this.height=20;
    this.width=numeroRectangulo*20+20;
    this.color=this.getRandomColor();
  }
function setJumping(){
  player isJumping=true;
  anim=document.getElementsByClassName('className');
  Player.div.animetion=anim;
  anim.addEventListener('animationEnd',function(){
    Player anim='run';
    Player.isJumping =false;
  }
}

$(document).on('keydown', function(e) {
    if (e.keyCode === 87) { // 87 is the letter W on the keyboard
        $('.characterWalk').addClass('jump');
        setTimeout(function() { $characterWalk.removeClass('jump'); }, 800);
    }
});
