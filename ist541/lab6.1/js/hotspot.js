// JavaScript Document

$( function() {

$("map area").click( function(){
			
$('#myModal').modal("show");

if ($(this).attr("id") == "Gmail") {
$("#feedback").css("color","red");
$("#feedback").html("Although you can access Google Chat and Spaces in Gmail, there is an easier way to meet in real time");
}
			
if ($(this).attr("id") == "Meet") {
$("#feedback").css("color","green");
$("#feedback").html("Yes, accessing Google Meet allows you to meet virtually in real time to collaborate");
}
			
if ($(this).attr("id") == "Calendar") {
$("#feedback").css("color","red");
$("#feedback").html("No,but Google Calendar is a great place to schedule a virtual meeting");
}
			
if ($(this).attr("id") == "SharedDocs") {
$("#feedback").css("color","red");
$("#feedback").html("No,but this is a great place to collaborate on group documents");
}
	
if ($(this).attr("id") == "Drive") {
$("#feedback").css("color","red");
$("#feedback").html("No,but Google Drive is where you might share files and group documents");
}
			
});
	
}); //end main jQuery function




