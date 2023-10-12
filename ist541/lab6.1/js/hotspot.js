// JavaScript Document

$( function() {
   $("icon area").click( function(){

      if ($(this).attr("id") == "USA") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, USA is the third one");
      }

      if ($(this).attr("id") == "China") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, China has the largest population: 1,343,239,923");
      }

      if ($(this).attr("id") == "India") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,India is the second one");
      }

   });
}); //end main jQuery function

$( function() {
   $("map area").click( function(){
        $('#myModal').modal("show");
