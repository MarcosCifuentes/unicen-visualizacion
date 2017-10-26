 let player = new Player();
 let id;
 let score = 0;

function isCollision(object){
  let character = $("#character");
  let cy= character.offset().top;
  let cx = character.offset().left;
  let ch = character.outerHeight();
  let cw = character.outerWidth();

  let element = $("#"+object);
  let ey = element.offset().top;
  let ex = element.offset().left;
  let eh = element.outerHeight();
  let ew = element.outerWidth();

  return!(
    ((cy + ch) < (ey)) ||
    (cy> (ey + eh)) ||
    ((cx + cw) < ex) ||
    (cx > (ex + ew)));

  }

  function enemyMoveUpdate(px){
    let enemy =  $("#enemy");
    if(parseInt(enemy.offset().left)>-50){
      enemy.offset({left: parseInt(enemy.offset().left)-px});
    }else{
      let distanceX = Math.floor((Math.random()) + innerWidth);
      this.updateDistance("enemy",distanceX);
    }
  }

  function updateDistance(object,distanceX,distanceY){
    let div = document.getElementById(object);
    if(object == 'enemy'){
      div.style.left = parseInt(div.style.left,10) + distanceX+'px';
    }
  }

  function update(){
    this.enemyMoveUpdate(15);
    score += 1;
    document.getElementById('scoreIngame').innerHTML = score;

    if(this.isCollision('enemy')){
      player.dead();
      setTimeout(function() {this.gameover();}, 800);
    }
  }

  function gameover(){
    document.getElementById('enemy').style.webkitAnimationPlayState = 'paused';
    document.getElementById('back-1').style.webkitAnimationPlayState = 'paused';
    document.getElementById('back-2').style.webkitAnimationPlayState = 'paused';
    document.getElementById('back-3').style.webkitAnimationPlayState = 'paused';
    document.getElementById('back-4').style.webkitAnimationPlayState = 'paused';
    document.getElementById('back-5').style.webkitAnimationPlayState = 'paused';
    document.getElementById('character').style.webkitAnimationPlayState = 'paused';
    clearInterval(id);
    document.getElementById("game").style.webkitFilter = "blur(5px)";
    document.getElementById('scoreEndGame').innerHTML = score;
    document.getElementById('gameOver').style.visibility = 'visible';
    document.getElementById('gameOver').style.zIndex = '1200';
  }

  function play(){
    id = setInterval(function(){
      this.update();
    }, 50);
  }

  this.play();

  $(document).on('keydown', function(e) {
    if (e.keyCode === 87 || (e.keyCode === 38)) {
      player.jump();
    }
  });
