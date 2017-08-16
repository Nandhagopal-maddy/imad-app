console.log('Loaded!');

var element = document.getElementById('main');
element.innerHTML = 'jarvis';
 
 var img = document.getElementById('madi');
 img.onclick = function () {

    console.log('inside function');   
    img.style.marginLeft ='100px';     
 };
 