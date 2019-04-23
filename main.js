function lim() {
        location.reload(true);
    }



 function consulta() {
 	   var rut;
    var rut = document.getElementById("rut").value;
   
   jQuery.getJSON('https://siichile.herokuapp.com/consulta', {rut: rut}, function(result) {

    rut1 = JSON.stringify(result ,["rut"],'') ;
    nom = JSON.stringify(result ,["razon_social"],'') ;
    giro = JSON.stringify(result ,["actividades","giro",],'') ;
    
 //stripear nose hacerlo de otra maneroa asi que asi nomas
    rut1 =  rut1.replace('{"rut":"' , "")
    rut1 =  rut1.replace('"}' , "")

    nom = nom.replace('{"razon_social":"',"")
    nom = nom.replace('"}',"")

    giro = giro.replace('{"actividades":[{"giro":"',"")
    giro = giro.replace('{"giro":"',"")
    giro = giro.replace('(V"},{"giro":"',"")
    giro = giro.replace('(',"")
    giro =giro.replace('"}]}',"")
    giro = giro.replace('"}',"")


    if(nom == "**"){
    rut1= "sin iniciacion de actividades"
    nom = "sin iniciacion de actividades"
    giro = "sin iniciacion de actividades"
    document.getElementById("1").innerHTML = rut1;
    document.getElementById("2").innerHTML = nom;
    document.getElementById("3").innerHTML = giro;
    }

    document.getElementById("1").innerHTML = rut1;
    document.getElementById("2").innerHTML = nom;
    document.getElementById("3").innerHTML = giro;


   })


//alert(JSON.stringify(result, null, 4));
//document.getElementById("demo").innerHTML = 5 + 6;
//console.log(result);
//$('#stage').html('<p> Name: ' + jd.name + '</p>');
}




	
