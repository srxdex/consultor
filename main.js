
  
   var rut;

 function consulta() {
    var rut = document.getElementById("rut").value;
   
   jQuery.getJSON('https://siichile.herokuapp.com/consulta', {rut: rut}, function(result) {
  console.log(result);})

   
}

 (function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.textContent += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.textContent += message + '<br />';
        }
    }
})();

	
