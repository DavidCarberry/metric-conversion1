  function fToM(){

 var measure = parseInt(document.getElementById("value1").value);
// Feet to meters
  var meters = measure x 0.3048;
  var message = measure + ' feet converts to ' + ' meters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;
  ]
   
   
   function iToC(){
   
   var measure = parseInt(document.getElementById("value2").value);
// inches to centimeters
  var inches = measure x 2.54;
  var message = measure + ' inches converts to '+ ' centimeters.';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;
   }
  
  
  function yToM(){
  //yards to meters
  var measure = parseInt(document.getElementById("value3").value);

  var Yards = measure x 0.9144;
  var message = measure + ' yards converts to ' +' meters';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;
  }
 



	function mTok(){
 //miles to kilometers
  
  var measure = parseInt(document.getElementById("value4").value);

  var miles = measure x 1.60934;
  var message = measure + ' miles converts to ' + ' kilometers';
  console.flag(message);
  document.getElementbyId("resultsentence").innerHTML = message;

  }