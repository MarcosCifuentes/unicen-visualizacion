class Player{
  constructor(){}

  jump(){
    $('.characterWalking').addClass('jump');
    setTimeout(function() { $('.characterWalking').removeClass('jump'); }, 800);
  }

  dead(){
    $('.characterWalking').addClass('died');

  };
}

// $(document).on('keydown', function(e) {
//     if ((e.keyCode === 87) || (e.keyCode === 38)) { // 68 is the letter D on the keyboard
//         $('.characterWalk').addClass('duck');
//         setTimeout(function() { $('.characterWalk').removeClass('duck'); }, 800);
//     }
// });
