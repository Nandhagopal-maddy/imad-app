console.log('Loaded!');

var element = document.getElementById('main');
element.innerHTML = 'jarvis';
 
 var img = document.getElementById('madi');
 var marginLeft = 0;
 var marginRight = 0;
 function moveLeft(){
     marginRight = marginRight +3;
     img.style.marginLeft = marginRight+'px';
 }
 function moveRight (){
     marginLeft = marginLeft + 3;
     img.style.marginLeft = marginLeft + 'px';
 }
 img.onclick = function () {
    var interval = setInterval (moveRight, 10);
    if (marginLeft>=30) {
        var interval2 = setInterval(moveLeft , 10);
        if(marginLeft==60)
        {
        marginLeft = marginLeft - 60;
        }
    }
        
 };
 