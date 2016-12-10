window.addEventListener('load', function(){

var keyButton = document.getElementsByClassName('key');
var keyObj = {
  97 : {
    code : 'A',
    sound : new Howl({
      src: ['sounds/bubbles.mp3']
    })
  },
 115 : {
   code: 'S',
   sound : new Howl({
     src: ['sounds/clay.mp3']
   })
 },
 100 : {
   code: 'D',
   sound : new Howl({
     src: ['sounds/confetti.mp3']
   })
 },
 102 : {
   code: 'F',
   sound : new Howl({
     src: ['sounds/corona.mp3']
   })
 },
 103 : {
   code: 'G',
   sound : new Howl({
     src: ['sounds/glimmer.mp3']
   })
 },
 104 : {
   code: 'H',
   sound : new Howl({
     src: ['sounds/moon.mp3']
   })
 },
 106 : {
   code: 'J',
   sound : new Howl({
     src: ['sounds/pinwheel.mp3']
   })
 },
 107 : {
   code: 'K',
   sound : new Howl({
     src: ['sounds/splits.mp3']
   })
 },
 108 : {
   code: 'L',
   sound : new Howl({
     src: ['sounds/strike.mp3']
   })
  }
 };

document.onkeypress = function(event){

  for(var i = 0 ; i < keyButton.length; i ++){

    if(keyObj[event.keyCode].code === keyButton[i].id){
      var keyID = keyObj[event.keyCode].code;
      document.querySelector('#' + keyID).classList.toggle('playing');
      keyObj[event.keyCode].sound.play();

        setTimeout(function(){
        document.querySelector('#' + keyID).classList.toggle('playing');
        }, 200);
    }
   }
 } //end doc.onkeypress


}); //end window.load
