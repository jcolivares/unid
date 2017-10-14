/*
Utilizacion de jquery
*/

//Esto es como el main en otros lenguajes
$(document).ready(function(){


    $("#cuatri").change(function(){
        //alert("hola mundo");
        var cuatri = $(this).val();

        $("#titulo").text("Cuatrimestre="+cuatri);
        $("#titulo").css("font-size", "50pt");
    });

});
