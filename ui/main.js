console.log('Loaded!');

var element = document.getElementById('main');
element.innerHTML = 'jarvis';
 
 var img = document.getElementById('madi');
 var marginLeft = 0;
 function moveRight (){
     marginLeft = marginLeft + 10;
     img.style.marginLeft = marginLeft + 'px';
 }
 img.onclick = function () {
    var interval = setinterval (moveRight, 100);
    console.log('inside function');   
        
 };
 