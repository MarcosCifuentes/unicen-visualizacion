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
