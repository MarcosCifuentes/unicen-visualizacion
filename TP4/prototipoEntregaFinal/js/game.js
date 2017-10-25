let self = this;

$(document).on('keydown', function(e) {
  if (e.keyCode === 87 || (e.keyCode === 38)) { // 68 is the letter D on the keyboard
    $('.characterWalking').addClass('jump');
    setTimeout(function() { $('.characterWalking').removeClass('jump'); }, 800);
  }
});

$(document).on('keydown', function(e) {
  if (e.keyCode === 83 || (e.keyCode === 40)) { // 68 is the letter D on the keyboard
    $('.characterWalking').addClass('died');
    setTimeout(function() { $('.characterWalking').removeClass('died'); }, 800);
  }
});

// $(document).on('keydown', function(e) {
//     if ((e.keyCode === 87) || (e.keyCode === 38)) { // 68 is the letter D on the keyboard
//         $('.characterWalk').addClass('duck');
//         setTimeout(function() { $('.characterWalk').removeClass('duck'); }, 800);
//     }
// });

// isCollision(object){
//   let runner = $("#runner");
//   let ry= runner.offset().top;
//   let rx = runner.offset().left;
//   let rh = runner.outerHeight();
//   let rw = runner.outerWidth();
//
//   let element = $("#"+object);
//   let ey = element.offset().top;
//   let ex = element.offset().left;
//   let eh = element.outerHeight();
//   let ew = element.outerWidth();
//
//   return!(
//     ((ry + rh) < (ey)) ||
//     (ry> (ey + eh)) ||
//     ((rx + rw) < ex) ||
//     (rx > (ex + ew)));
//
//   }

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

    // if(this.isCollision('enemy')){
    //         this.player.dead();
    //         this.gameover();
    //    }
  }

  function jugar(){
    id = setInterval(function(){
      self.update();
    }, 50);
  }

  this.jugar();
