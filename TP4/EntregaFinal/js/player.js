class Player{
  constructor(){
    this.vidas=3;
  }

  jump(){
    $('.characterWalking').addClass('jump');
    setTimeout(function() { $('.characterWalking').removeClass('jump'); }, 800);
  }

  dead(){
    $('.characterWalking').addClass('died');

  };

  colide(){
    $('.characterWalking').addClass('colide');

  };
}
