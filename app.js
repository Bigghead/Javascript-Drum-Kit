window.addEventListener('load', function(){

var keyButton = document.getElementsByClassName('key');

document.onkeypress = function(event){
 var keyObj = {
   97 : 'A',
   115 : 'S',
   100 : 'D',
   102 : 'F',
   103 : 'G',
   104 : 'H',
   106 : 'J',
   107 : 'K',
   108 : 'L'
  };
  for(var i = 0 ; i < keyButton.length; i ++){
    if(keyObj[event.keyCode] === keyButton[i].id){
      var keyID = keyObj[event.keyCode];
      document.querySelector('#' + keyID).classList.toggle('playing');
    }
  }
 }


 keyButton[0].addEventListener('click', function(){
   this.classList.toggle('playing');
 });

});
