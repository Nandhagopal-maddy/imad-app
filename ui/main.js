
 
 var button = document.getElementById('counter');
 
 button.onclick = function() {
	 
 var request = new XMLHttpRequest();
 
 request.onreadystatechange = function() {
	  
	  if(request.status === XMLHttpRequest.DONE){
		  
	  if(request.status === 200) {
			 
	  var counter = Request.responseText;
			 
	  var span = document.getElementById('count');
		 
		 span.innerHTML = counter.toString();
		 }
	 }
 };
 request.open('GET' ,'http://localhost:8080/counter', true);
 request.send(null);
 };
  var nameinput = document.getElementById('name');
  var names = nameinput.value;
  var submit = document.getElementById('submit_btn');
  submit.onclick = function() {
	  var names = ['name1','name2','name3',];
	  var list = ''; 
	  for (var i =0; i< names.length; i++){
		  list == '<li>'+ names[i]+'</li>';
	  }
	  var ul = document.getElementById('nameslist');
	  ul.innerHTML = list;
  };
 